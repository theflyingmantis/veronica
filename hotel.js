let hotels = [
    {
        "name": "Royal Residency",
        "lat": "26.27076",
        "lng": "73.030178",
        "tariff": "2000 per day",
        "address": "some ok place in city"
    },
    {
        "name": "Vivanta Taj",
        "lat": "26.267228",
        "lng": "73.019496",
        "tariff": "10000 per day",
        "address": "some good place in city"
    }
];

let rawList = [
    {
        "name": "Chandra Inn",
        "address": "Panch Batti Circle, Airport Road, Ratanada, Jodhpur",
        "contact": "0291-2670610, 0291-5103791,02912670583",
        "dist": "",
        "roomSpecs": "Deluxe Room: Double-Rs 2500+tax(including breakfast) Super Deluxe Room: Double-Rs 2800+tax  (including breakfast)"
    },
    {
        "name": "Hotel Priya",
        "address": "181-182, Nai Sarak, Jodhpur ",
        "contact": "0291-2547463, 0291-2547879, 09414475439 ",
        "dist": "",
        "roomSpecs": "Super Deluxe (Ac) Big: Single-Rs.1100, Double-Rs.1200, Extra person- Rs.200 Super Deluxe (Ac) Small: Single-Rs.1000, Double-Rs.1100, Extra person- Rs.200 "
    },
    {
        "name": "Hotel Suncity International",
        "address": "Near Panch Batti Circle, Airport Road, Jodhpur",
        "contact": "9636033999",
        "dist": "",
        "roomSpecs": "single - Rs 1800+tax , Rs 700/extra person double - Rs 2100+ tax ,Rs 700/extra person"
    },
    {
        "name": "Youth Hostel ",
        "address": "Bhati Chauraha, Ratanada, Jodhpur",
        "contact": "0291-2517160 ",
        "dist": "",
        "roomSpecs": "Dormitory: Rs.135/person (general), Rs.85/person (student Id) Non Ac Room (Twin Bed): Rs.500 Ac Room (Twin Bed): Rs.750 "
    },
    {
        "name": "Rajputana Palace ",
        "address": "Near Panch Batti Circle, Airport Road, Jodhpur",
        "contact": "91 291 5153600",
        "dist": "",
        "roomSpecs": "Deluxe Room: Single-Rs 2500 Double-Rs2800 Super Deluxe Room: Single/Double-Rs 3500 "
    },
    {
        "name": "Hotel Galaxy",
        "address": "Nai Sarak Chouraha, Outside Sojati Gate, Jodhpur ",
        "contact": "0291-2625098 ",
        "dist": "",
        "roomSpecs": "AC Room: Rs 1200 (Double) , Rs 1500(triple),Rs 200 per extra person Non AC Room: Rs800 (Double), Rs 1000(triple) Rs 200 per extra person "
    },
    {
        "name": "Hotel Soner",
        "address": "5,Nai sarak , Jodhpur",
        "contact": "0291-2626732 , 9828508080",
        "dist": "",
        "roomSpecs": "single bed-Rs 400 & Rs 500  , Rs 200/extra person Double bed- Rs 600  , Rs 200/extra person Triple bed - Rs 900  , Rs 200/extra person Ac Double bed - Rs 950 , Rs 200/extra person"
    },
    {
        "name": "Baba Haveli ",
        "address": "Near Clock Tower Solanki Dairy, Ummed Chowk, Jodhpur",
        "contact": " 088903 66857",
        "dist": "",
        "roomSpecs": "Double bed- Rs 600(Non AC), Rs 850(AC) Triple bed - Rs 900 (AC)"
    },
    {
        "name": "Hotel Raman Palace",
        "address": "Opposite Kesar Bagh, Shiv Mandir Rd, Ratanada, Jodhpur",
        "contact": "0291 251 3980",
        "dist": "",
        "roomSpecs": "Econmic Double bed-Rs 800 (Air cooler) Standard Double bed- Rs 1200  (Air cooler)  Deluxe Double bed - Rs 1500/1800(AC) "
    },
    {
        "name": "Hotel Jasol Heritage",
        "address": "Jasol House, Police Line Rd, Ratanada, Jodhpur",
        "contact": "0291-2513036",
        "dist": "",
        "roomSpecs": "Standard Double bed-1200+tax(AC) Deluxe Double bed - Rs 1600+tax (AC)"
    },
    {
        "name": "Chandra Grand",
        "address": "E6A, MANDORE INDUSTRIAL AREA, 9 MILE, MANDORE, Jodhpur",
        "contact": "073400 64989",
        "dist": "10.8 Km",
        "roomSpecs": "Deluxe Room: Single-Rs 2200(+tax) Double-Rs2700(+tax) Super Deluxe Room: Single-2500(+tax)/Double-Rs 3000(+tax) "
    },
    {
        "name": "Govindam Family Restaurant & Guest House",
        "address": "Stone Park Ke Pass, 9  Nagour Road, N.H. 65, Rajasthan 342304 under 8 km from karwar ",
        "contact": "7790966203",
        "dist": "12.1 Km",
        "roomSpecs": "double - Rs 1000 (AC)(+10% discount)  double - Rs 500 (Fan)(+10% discount)"
    },
    {
        "name": "Haveli Resort & Hatai Restaurant",
        "address": "Daijar, Rajasthan 342301",
        "contact": "9829650500",
        "dist": "12.3 Km",
        "roomSpecs": "double bed - Rs 1500 (AC)"
    },
    {
        "name": "Laxmi Guest House",
        "address": "NH 65 bang opposite NLU, Jodhpur",
        "contact": "085609 80450",
        "dist": "15 Km",
        "roomSpecs": "Double bed room-Rs 1000(AC)(+20% discount)"
    },
    {
        "name": "Hotel Red Oak",
        "address": "Near Over Bridge, Mandore, Jodhpur, Jodhpur, Rajasthan 342304",
        "contact": "9414410691",
        "dist": "16.9 Km",
        "roomSpecs": "double bed -Rs 1200 (AC); Rs 800 (non AC); Rs 200/extra person"
    },
    {
        "name": "Baba Ramdev Guest House",
        "address": "Near Mandore Overbridge, Mandore, Jodhpur, Rajasthan 342304 ",
        "contact": "9784274020",
        "dist": "16.9 km ",
        "roomSpecs": "double bed- Rs 450(air cooler), Rs 900(AC), Rs 100/extra person"
    },
    {
        "name": "Mandore Guest House",
        "address": "Dadawari Lane Near, Mandore Rd, Mandore, Jodhpur",
        "contact": "0291 254 5210",
        "dist": "17.4 Km",
        "roomSpecs": "Double bed room-Rs 2250(AC)"
    }
];