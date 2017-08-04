'use strict';

var mymap = L.map('mapid').setView([26.35773, 73.0632], 12);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiYWJoaW5hdnJhaSIsImEiOiJjajU3YTduZjMwdjA5MnlwaHU0bnoweDNrIn0.b43RguKtcWbMVJP6jilW6w'
}).addTo(mymap);

let permanentCampusLatLng = [26.47649, 73.122371];
let mbmCampusLatLng = [26.27068, 73.034893];
let airportLatLng = [26.250152, 73.046908];
let railwayStationLatLng = [26.283607,73.023029];

let plotHotels = function(){
	let totalHotels = hotels.length;
	for(var i=0;i<totalHotels;i++){
		let hotel = L.marker([hotels[i].lat,hotels[i].lng]).addTo(mymap);
		let hotelInfo = "<b>" + hotels[i].name + "</b> <br> <b>" + "Address: </b>" + hotels[i].address + "<br> <b>" + "Tariff: </b>"+ hotels[i].tariff
		hotel.bindTooltip(hotelInfo);
	}
}

let plotCampus = function(){
	let permanentCampusCircle = L.circle(permanentCampusLatLng, {
	    color: 'red',
	    fillColor: '#f03',
	    fillOpacity: 0.5,
	    radius: 500
	}).addTo(mymap);
	permanentCampusCircle.bindTooltip("<b>Permanent Campus</b>");

	let mbmCampusCircle = L.circle(mbmCampusLatLng, {
	    color: 'red',
	    fillColor: '#f03',
	    fillOpacity: 0.5,
	    radius: 200
	}).addTo(mymap);
	mbmCampusCircle.bindTooltip("<b>Temporarty Campus (MBM)</b> <br> Bus Journey starts here");
}

let plotTransportations = function(){
	let airportIcon = L.icon({
  		iconUrl: 'images/airport.png',
  		iconSize: [31, 26]
	});
	let railwayIcon = L.icon({
		iconUrl: 'images/railway.png',
		iconSize: [31,26]
	});
	let airportMarker = L.marker(airportLatLng,{icon: airportIcon}).addTo(mymap);
	let railwayStationMarker = L.marker(railwayStationLatLng,{icon: railwayIcon}).addTo(mymap);
	airportMarker.bindTooltip("Airport");
	railwayStationMarker.bindTooltip("Railway Station");
}

let latlngPicker = function(){
	var popup = L.popup();
	function onMapClick(e) {
	    popup
	        .setLatLng(e.latlng)
	        .setContent("You clicked the map at " + e.latlng.toString())
	        .openOn(mymap);
	}
	mymap.on('click', onMapClick);
}


let init = function (){
	plotHotels();
	plotCampus();
	plotTransportations();
	latlngPicker();
}

init();