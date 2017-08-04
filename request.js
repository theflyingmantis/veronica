/**
 * Created by Ajat Prabha on 05-08-2017.
 */

function requestGeoCode(hotel) {
    return "https://maps.googleapis.com/maps/api/geocode/json?address=" + hotel.name + " " + hotel.address + "&key=AIzaSyDXdtr56UcC_v09_x1ehQpY6Y7yU5ea75A";
}

function reqListener() {
    var data = JSON.parse(this.responseText);
    setMarker(data);
}

function reqError(err) {
    console.log('Fetch Error :-S', err);
}

function mapToData(hotel) {
    var Req = new XMLHttpRequest();
    Req.onload = reqListener;
    Req.onerror = reqError;
    Req.open('get', requestGeoCode(hotel), true);
    Req.send();
}