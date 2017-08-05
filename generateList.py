import requests
import csv
import json

csvfile = open('hotel_list.csv', 'r')
jsonfile = open('hotels.js', 'w')

fieldnames = ("name", "address", "contact", "roomSpecs", "tarrif")
reader = csv.DictReader(csvfile, fieldnames)
jsonfile.write('hotelList = [')
for row in reader:
    url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + row['name'] + ' ' + row[
        'address'] + '&key=AIzaSyDXdtr56UcC_v09_x1ehQpY6Y7yU5ea75A'
    r = requests.get(url)
    result = r.json()
    try:
        name = row['name'].replace('\n', '')
        contact = row['contact'].replace('\n', '')
        tarrif = row['tarrif']
        address = result['results'][0]['formatted_address']
        lat, lng = result['results'][0]['geometry']['location']['lat'], result['results'][0]['geometry']['location'][
            'lng']
        result = [
            ('name', name),
            ('contact', contact),
            ('address', address),
            ('lat', lat),
            ('lng', lng),
            ('tarrif', tarrif)
        ]
        json.dump(dict(result), jsonfile)
        jsonfile.write(',\n')
    except IndexError:
        pass
jsonfile.write(']')


        # r = requests.get()
