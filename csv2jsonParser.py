import csv
import json

csvfile = open('hotel_list.csv', 'r')
jsonfile = open('hotels.json', 'w')

fieldnames = ("name", "address", "contact", "dist", "roomSpecs")
reader = csv.DictReader(csvfile, fieldnames)
jsonfile.write('[')
for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write(',\n')
jsonfile.write(']')
