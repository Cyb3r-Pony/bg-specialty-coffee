// ========================================
// BULGARIAN SPECIALTY CAFÉS DATA
// ========================================
// Edit this file to add, remove, or modify cafés
// Each city can have multiple cafés

const cafesData = {
    // Sofia - Capital city
    sofia: {
        name: 'Sofia',
        coords: { lat: 42.6977, lng: 23.3219 },
        cafes: [
            {
                id: 1,
                name: 'Savi Gelato & Specialty Coffee',
                address: 'San Stefano 9',
                coords: { lat: 42.695490500, lng: 23.339969900 },
                hours: 'To be announced',
                image: 'images/sofia/savi-gelato-san-stefano.jpg'
            },
            {
                id: 2,
                name: 'Martines Specialty Coffee Shop & Roastery',
                address: 'ul. "Hristo Belchev" 1',
                coords: { lat: 42.694587500, lng: 23.321919700 },
                hours: 'To be announced',
                image: 'images/sofia/martines-specialty-coffeeshop-sofia-owners-6.jpeg'
            },
            {
                id: 3,
                name: 'Coffee Syndicate',
                address: 'ul. "Moskovska" 3',
                coords: { lat: 42.697381800, lng: 23.326274800 },
                hours: 'To be announced',
                image: 'images/sofia/coffee-syndicate-moskovska.jpeg'
            },
            {
                id: 4,
                name: 'FlavouRITs',
                address: 'bul. "Evlogi i Hristo Georgiev" 15',
                coords: { lat: 42.684129100, lng: 23.322332300 },
                hours: 'To be announced',
                image: 'images/sofia/from-barista.jpg'
            },
            {
                id: 5,
                name: 'BETTER Specialty Coffee',
                address: 'ul. "Neofit Rilski" 59',
                coords: { lat: 42.689911000, lng: 23.324485100 },
                hours: 'To be announced',
                image: 'images/sofia/better.jpg'
            },
            {
                id: 6,
                name: 'DABOV Specialty Coffee – Lyuben Karavelov',
                address: 'ul. "Lyuben Karavelov" 58',
                coords: { lat: 42.685838500, lng: 23.324376700 },
                hours: 'To be announced',
                image: 'images/sofia/dabov-luben-karavelov.jpg'
            },
            {
                id: 7,
                name: 'Savi Gelato & Specialty Coffee South Park',
                address: 'Yaroslav Veshin 63',
                coords: { lat: 42.675024400, lng: 23.307020800 },
                hours: 'To be announced',
                image: 'images/sofia/savi-gelato-yaroslav-veshin.jpg'
            },
            {
                id: 8,
                name: 'Urban Embassy Specialty Coffee',
                address: 'ul. "Professor Fridtjof Nansen" 19',
                coords: { lat: 42.687023200, lng: 23.321628100 },
                hours: 'To be announced',
                image: 'images/sofia/urban-embassy.jpg'
            },
            {
                id: 9,
                name: 'Chucky\'s Coffee House',
                address: 'ul. "Hristo Belchev" 29',
                coords: { lat: 42.691847900, lng: 23.321035300 },
                hours: 'To be announced',
                image: 'images/sofia/chucky-coffee-house.jpeg'
            },
            {
                id: 10,
                name: 'DABOV Specialty Coffee Vitosha',
                address: 'Ivan Vazov, bul. "Vitosha" 192',
                coords: { lat: 42.675639900, lng: 23.309017300 },
                hours: 'To be announced',
                image: 'images/sofia/dabov-vitosha.jpg'
            },
            {
                id: 11,
                name: 'Rainbow Factory',
                address: 'ul. Veslets 10',
                coords: { lat: 42.698830000, lng: 23.325943000 },
                hours: 'To be announced',
                image: 'images/sofia/rainbow-factory.jpg'
            },
            {
                id: 12,
                name: 'STAMP – Coffee Brew and Tattoo',
                address: 'Hristo Botev Blvd 12',
                coords: { lat: 42.690875800, lng: 23.314507500 },
                hours: 'To be announced',
                image: 'images/sofia/stamp-coffee.jpg'
            },
            {
                id: 13,
                name: 'Altruist',
                address: 'ul. "Ekzarh Yosif" 49',
                coords: { lat: 42.700366600, lng: 23.325132200 },
                hours: 'To be announced',
                image: 'images/sofia/altruist.jpg'
            },
            {
                id: 14,
                name: 'Drekka',
                address: 'ul. "Marin Drinov" 23',
                coords: { lat: 42.695564700, lng: 23.343145000 },
                hours: 'To be announced',
                image: 'images/sofia/drekka.jpg'
            },
            {
                id: 15,
                name: 'BLOOM CAFE Specialty Coffee',
                address: 'ul. Veslets 23',
                coords: { lat: 42.700815000, lng: 23.325312000 },
                hours: 'To be announced',
                image: 'images/sofia/bloom-cafe.jpeg'
            },
            {
                id: 16,
                name: 'Kolichka Bar',
                address: 'ul. "San Stefano" 9',
                coords: { lat: 42.695415800, lng: 23.340022600 },
                hours: 'To be announced',
                image: 'images/sofia/kolichka-bar.jpeg'
            },
            {
                id: 17,
                name: 'Cambiare Specialty Coffee',
                address: 'boulevard "Aleksandar S. Pushkin" 15B',
                coords: { lat: 42.663514600, lng: 23.265911800 },
                hours: 'To be announced',
                image: 'images/sofia/cambiare-coffee.jpeg'
            },
            {
                id: 18,
                name: 'PUNKT',
                address: 'Krastova vada, ul. "Ivaylo Petrov" 7',
                coords: { lat: 42.650674800, lng: 23.311239800 },
                hours: 'To be announced',
                image: 'images/sofia/punkt.jpg'
            },
            {
                id: 19,
                name: 'DABOV Specialty Coffee – Iztok',
                address: 'ul. "Nikolay Haytov" 3',
                coords: { lat: 42.669263200, lng: 23.353289800 },
                hours: 'To be announced',
                image: 'images/sofia/dabov-iztok.jpg'
            },
            {
                id: 20,
                name: 'Gentoo',
                address: 'ul. "Neofit Rilski" 34',
                coords: { lat: 42.690260200, lng: 23.318790400 },
                hours: 'To be announced',
                image: 'images/sofia/gentoo.jpg'
            },
            {
                id: 21,
                name: 'DABOV Specialty Coffee – Angel Kunchev',
                address: 'ul. "Angel Kunchev" 28',
                coords: { lat: 42.689968500, lng: 23.321742000 },
                hours: 'To be announced',
                image: 'images/sofia/dabov-angel-kunchev.png'
            },
            {
                id: 22,
                name: 'DABOV Specialty Coffee – 5 Corners',
                address: 'Hristo Botev Blvd 1B',
                coords: { lat: 42.689903300, lng: 23.313664500 },
                hours: 'To be announced',
                image: 'images/sofia/dabov-5-corners.jpg'
            },
            {
                id: 23,
                name: 'From Barista Coffee and More',
                address: 'ul. "Bacho Kiro" 26, Sofia Center',
                coords: { lat: 42.700459000, lng: 23.326592000 },
                hours: 'To be announced',
                image: 'images/sofia/from-barista.jpg'
            },
            {
                id: 24,
                name: '369 Specialty Coffee + Bakery',
                address: 'bul. "Patriarh Evtimiy" 11',
                coords: { lat: 42.688091200, lng: 23.326668700 },
                hours: 'To be announced',
                image: 'images/sofia/369.jpeg'
            },
            {
                id: 25,
                name: 'doppio',
                address: '31 Ivaylo St.',
                coords: { lat: 42.694666800, lng: 23.313097600 },
                hours: 'To be announced',
                image: 'images/sofia/doppio.jpg'
            },
            {
                id: 26,
                name: 'Bug Coffee',
                address: 'ul. "Professor Asen Zlatarov" 19',
                coords: { lat: 42.693354000, lng: 23.344120000 },
                hours: 'To be announced',
                image: 'images/sofia/bug-coffee.jpg'
            },
            {
                id: 27,
                name: 'Coffee Syndicate Post 1',
                address: 'bul. "Yanko Sakazov" 70',
                coords: { lat: 42.696133100, lng: 23.344304600 },
                hours: 'To be announced',
                image: 'images/sofia/coffee-syndicate-yanko-sakazov.jpg'
            },
            {
                id: 28,
                name: 'Ж Jazz Room',
                address: 'ul. "Tsar Simeon" 49',
                coords: { lat: 42.701001300, lng: 23.325261200 },
                hours: 'To be announced',
                image: 'images/sofia/jazz-room.jpg'
            },
            {
                id: 29,
                name: 'Bearliner – Coffee and Afterwork Cocktails',
                address: 'ul. "Veslets" 22B',
                coords: { lat: 42.700888700, lng: 23.325506400 },
                hours: 'To be announced',
                image: 'images/sofia/bearliner.jpg'
            },
            {
                id: 30,
                name: 'COFFERO - Ring Mall',
                address: 'ul. "Okolovrasten pat" 214',
                coords: { lat: 42.624744300, lng: 23.352466000 },
                hours: 'To be announced',
                image: 'images/sofia/coffero-ring-mall.jpg'
            },
            {
                id: 31,
                name: 'COFFERO - The Mall',
                address: 'Tsarigradsko shose 115Z, The Mall',
                coords: { lat: 42.660915100, lng: 23.382659800 },
                hours: 'To be announced',
                image: 'images/sofia/coffero-the-mall.jpg'
            },
            {
                id: 32,
                name: 'Stay Awake 38',
                address: 'ul. "Neofit Rilski" 38',
                coords: { lat: 42.690129800, lng: 23.320023600 },
                hours: 'To be announced',
                image: 'images/sofia/stay-awake-38.jpg'
            },
            {
                id: 33,
                name: 'Vedra Coffee',
                address: 'Sofia Center, ul. "George Washington" 39',
                coords: { lat: 42.702051500, lng: 23.321650500 },
                hours: 'To be announced',
                image: 'images/sofia/vedra-coffee.jpg'
            },
            {
                id: 34,
                name: 'Late Cafe & Roastery - PARADISE',
                address: 'bul. "Cherni vrah" 100',
                coords: { lat: 42.658793000, lng: 23.315678900 },
                hours: 'To be announced',
                image: 'images/sofia/late-87-cherni-vrah.jpg'
            },
            {
                id: 35,
                name: 'New Coffee World',
                address: 'ul. "Plachkovski Manastir" 1',
                coords: { lat: 42.691000194, lng: 23.358529731 },
                hours: 'To be announced',
                image: 'images/sofia/from-barista.jpg'
            },
            {
                id: 36,
                name: 'Late Cafe & Roastery - THE MALL',
                address: 'bul. "Tsarigradsko shose" 115',
                coords: { lat: 42.660465270, lng: 23.382941666 },
                hours: 'To be announced',
                image: 'images/sofia/late-87-tsarigradsko-shose.png'
            },
            {
                id: 37,
                name: 'Late Cafe & Roastery - РАКОВСКА',
                address: 'ul „Georgi S. Rakovski" 113',
                coords: { lat: 42.698586439, lng: 23.332112316 },
                hours: 'To be announced',
                image: 'images/sofia/late-87-georgi-rakovski.jpg'
            },
            {
                id: 38,
                name: 'Late Cafe & Roastery - WEST MALL',
                address: 'bul. "Tsaritsa Yoanna" 15',
                coords: { lat: 42.710345124, lng: 23.271024397 },
                hours: 'To be announced',
                image: 'images/sofia/late-87-tsaritsa-yoanna.jpg'
            },
            {
                id: 39,
                name: 'Late Cafe & Roastery - КРАКА',
                address: 'ul. "Sheynovo" 2',
                coords: { lat: 42.692605341, lng: 23.336765108 },
                hours: 'To be announced',
                image: 'images/sofia/late-87-sheynovo.jpg'
            },
            {
                id: 40,
                name: 'COFFERO',
                address: 'bul. "Cherni vrah" 51B',
                coords: { lat: 42.659127446, lng: 23.316924744 },
                hours: 'To be announced',
                image: 'images/sofia/coffero-cherni-vrah.jpg'
            },
            {
                id: 41,
                name: '43.12 Coffee',
                address: 'ul. "Hristo Belchev" 29',
                coords: { lat: 42.69174139, lng: 23.320984396 },
                hours: 'To be announced',
                image: 'images/sofia/43-12-sofia.jpg'
            },
            {
                id: 42,
                name: 'NOA Coffee Shop & More',
                address: 'bul. "Vitosha" 89D',
                coords: { lat: 42.681994, lng: 23.314040 },
                hours: 'To be announced',
                image: 'images/sofia/noa-coffee-vitosha.jpg'
            },
            {
                id: 43,
                name: 'NOA Coffee Shop Odeon',
                address: 'bul. "Patriarh Evtimiy" 1',
                coords: { lat: 42.687982, lng: 23.328263 },
                hours: 'To be announced',
                image: 'images/sofia/noa-coffee-patriarh-evtimiy.jpg'
            }
        ]
    },

    // Plovdiv - Second largest city
    plovdiv: {
        name: 'Plovdiv',
        coords: { lat: 42.1354, lng: 24.7453 },
        cafes: [
            {
                id: 44,
                name: 'Savi Gelato & Specialty Coffee Plovdiv',
                address: 'ul. "Nayden Gerov" 17',
                coords: { lat: 42.143763200, lng: 24.747894800 },
                hours: 'To be announced',
                image: 'images/plovdiv/savi-nayden-gerov.jpg'
            },
            {
                id: 45,
                name: 'The Family Coffee Roasters',
                address: 'ul. "Rayko Daskalov" 54',
                coords: { lat: 42.151722500, lng: 24.746751700 },
                hours: 'To be announced',
                image: 'images/plovdiv/the-family-rayko-daskalov.jpg'
            },
            {
                id: 46,
                name: 'TURTLES Specialty Coffee',
                address: 'bul. Vasil Aprilov 104',
                coords: { lat: 42.148420000, lng: 24.731755500 },
                hours: 'To be announced',
                image: 'images/plovdiv/turtles.jpg'
            },
            {
                id: 47,
                name: 'Snack! Coffee Roasters',
                address: 'bul. Marica 25',
                coords: { lat: 42.154708100, lng: 24.733271300 },
                hours: 'To be announced',
                image: 'images/plovdiv/snack.jpeg'
            },
            {
                id: 48,
                name: 'Dealicious Coffee & Food',
                address: 'g.k. YuzhenYuzhen, ul. "Asen Hristoforov" 1',
                coords: { lat: 42.121159900, lng: 24.730571500 },
                hours: 'To be announced',
                image: 'images/plovdiv/dealicious.jpg'
            },
            {
                id: 49,
                name: 'Bluestone Doughnuts',
                address: 'Otets Paisiy 29',
                coords: { lat: 42.145419300, lng: 24.750222700 },
                hours: 'To be announced',
                image: 'images/plovdiv/bluestone-doughnuts.jpeg'
            },
            {
                id: 50,
                name: 'Dwell Coffee House',
                address: 'ul. "Prolet" 2',
                coords: { lat: 42.147563900, lng: 24.746814500 },
                hours: 'To be announced',
                image: 'images/plovdiv/dwell-coffee-house.jpg'
            },
            {
                id: 51,
                name: 'New Coffee World',
                address: 'bul. "Vasil Aprilov" 35',
                coords: { lat: 42.141367763, lng: 24.733467677 },
                hours: 'To be announced',
                image: 'images/plovdiv/new-coffee-world-vasil-aprilov.jpg'
            },
            {
                id: 52,
                name: 'The Family Coffee Roasters',
                address: 'ul. "Vasil Levski" 105',
                coords: { lat: 42.171999841, lng: 24.741706275 },
                hours: 'To be announced',
                image: 'images/plovdiv/the-family-vasil-levski.jpg'
            },
            {
                id: 53,
                name: 'Takin\' Ova',
                address: 'ul. "Petko R. Slaveykov" 25a',
                coords: { lat: 42.149328, lng: 24.754525 },
                hours: 'To be announced',
                image: 'images/plovdiv/takin-ova.jpg'
            }
        ]
    },

    // Varna - Coastal city
    varna: {
        name: 'Varna',
        coords: { lat: 43.2141, lng: 27.9147 },
        cafes: [
            {
                id: 54,
                name: '43.12 Concept Coffee',
                address: 'ul. "Voden" 18',
                coords: { lat: 43.203865900, lng: 27.916935000 },
                hours: 'To be announced',
                image: 'images/varna/43-12-voden.jpg'
            },
            {
                id: 55,
                name: 'Blend Coffee & Social Place',
                address: 'Blvd. Tsar Osvoboditel 23A',
                coords: { lat: 43.208925900, lng: 27.921762800 },
                hours: 'To be announced',
                image: 'images/varna/blend-coffee.jpg'
            },
            {
                id: 56,
                name: 'Wholehearted Cafe',
                address: 'ul. "Tsaribrod" 29',
                coords: { lat: 43.199962900, lng: 27.912834000 },
                hours: 'To be announced',
                image: 'images/varna/wholehearted.jpg'
            },
            {
                id: 57,
                name: 'Jasmin Coffee Roastery',
                address: 'ul. "Preslav" 28',
                coords: { lat: 43.201547500, lng: 27.915688200 },
                hours: 'To be announced',
                image: 'images/varna/jasmin-coffee.jpg'
            },
            {
                id: 58,
                name: 'DABOV Specialty Coffee Varna',
                address: 'ul. "Ivan Vazov" 21',
                coords: { lat: 43.204775300, lng: 27.916162200 },
                hours: 'To be announced',
                image: 'images/varna/dabov-varna.jpg'
            },
            {
                id: 59,
                name: '43.12 Coffee',
                address: 'ul. "Preslav" 15',
                coords: { lat: 43.199741800, lng: 27.915454500 },
                hours: 'To be announced',
                image: 'images/varna/43-12-preslav.jpg'
            },
            {
                id: 60,
                name: 'Coffee & Tea House',
                address: 'ul. Rayko Zhinzifov 40',
                coords: { lat: 43.203313325, lng: 27.906876629 },
                hours: 'To be announced',
                image: 'images/varna/coffee-tea-house.jpg'
            },
            {
                id: 61,
                name: 'The Bookstore',
                address: 'ul. "Preslav" 12',
                coords: { lat: 43.199212600, lng: 27.915229500 },
                hours: 'To be announced',
                image: 'images/varna/43-12-preslav.jpg'
            },
            {
                id: 62,
                name: 'Stories. Coffee & More',
                address: 'ul. "Sofia" 1',
                coords: { lat: 43.199070866, lng: 27.914602815 },
                hours: 'To be announced',
                image: 'images/varna/stories-coffee-more.jpg'
            }
        ]
    },

    // Burgas - Coastal city
    burgas: {
        name: 'Burgas',
        coords: { lat: 42.5048, lng: 27.4626 },
        cafes: [
            {
                id: 63,
                name: 'YOUTOPIA by New Coffee World',
                address: 'ul. "Slivnitsa" 3',
                coords: { lat: 42.496258285, lng: 27.470384811 },
                hours: 'To be announced',
                image: 'images/burgas/youtopia-new-coffee-world.jpg'
            },
            {
                id: 64,
                name: 'New Coffee World',
                address: 'ul. "Tsar Kaloyan" 39',
                coords: { lat: 42.495037322, lng: 27.463488969 },
                hours: 'To be announced',
                image: 'images/burgas/new-coffee-world-tsar-kaloyan.jpg'
            },
            {
                id: 65,
                name: 'New Coffee World',
                address: 'ul. "Strandzha Planina" 36',
                coords: { lat: 42.503714854, lng: 27.472389882 },
                hours: 'To be announced',
                image: 'images/burgas/new-coffee-world-strandzha-planina.jpg'
            },
            {
                id: 66,
                name: 'Butlers Coffee & Kitchen',
                address: 'ul. "Mihail Lermontov" 13',
                coords: { lat: 42.493299790, lng: 27.474290504 },
                hours: 'To be announced',
                image: 'images/burgas/butlers-coffee-kitchen.jpg'
            },
            {
                id: 67,
                name: 'The Coffee Room',
                address: 'ul. "Slivnitsa" 8',
                coords: { lat: 42.496020410, lng: 27.470186228 },
                hours: 'To be announced',
                image: 'images/burgas/coffee-room-slivnitsa.jpg'
            },
            {
                id: 68,
                name: 'The Coffee Room (Sarafovo)',
                address: 'ul. "Angel Dimitrov" 65',
                coords: { lat: 42.562070000, lng: 27.523802000 },
                hours: 'To be announced',
                image: 'images/burgas/coffee-room-angel-dimitrov.jpg'
            },
            {
                id: 69,
                name: 'DABOV Specialty Coffee',
                address: 'bul. "San Stefano" 97',
                coords: { lat: 42.502380309, lng: 27.467811784 },
                hours: 'To be announced',
                image: 'images/burgas/dabov-san-stefano.png'
            },
            {
                id: 70,
                name: 'DABOV Specialty Coffee Albatros',
                address: 'Burgas, Northern Beach (Albatros)',
                coords: { lat: 42.509567000, lng: 27.484451000 },
                hours: 'To be announced',
                image: 'images/burgas/dabov-albatros.png'
            },
            {
                id: 71,
                name: 'DABOV Specialty Coffee',
                address: 'ul. "Sveti Sveti Kiril i Metodiy" 55A',
                coords: { lat: 42.495000000, lng: 27.470000000 },
                hours: 'To be announced',
                image: 'images/burgas/dabov-sveti-kiril-metodiy.jpg'
            },
            {
                id: 72,
                name: 'CAFEY',
                address: 'ul. "Tsar Simeon I" 37',
                coords: { lat: 42.496100000, lng: 27.476847000 },
                hours: 'To be announced',
                image: 'images/burgas/cafey.png'
            }
        ]
    },

    // Bansko - Mountain resort town
    bansko: {
        name: 'Bansko',
        coords: { lat: 41.8358, lng: 23.4874 },
        cafes: [
            {
                id: 73,
                name: 'Black Honey Specialty Coffee Shop',
                address: 'ul. "Pirin" 73',
                coords: { lat: 41.830837580, lng: 23.481687280 },
                hours: 'To be announced',
                image: 'images/others/black-honey-bansko.jpg'
            },
            {
                id: 74,
                name: 'New Coffee World',
                address: 'ul. "Gotse Delchev" 34',
                coords: { lat: 41.831569583, lng: 23.481227065 },
                hours: 'To be announced',
                image: 'images/others/new-coffee-world-bansko.jpg'
            },
            {
                id: 75,
                name: 'DABOV Specialty Coffee',
                address: 'ul. "Pirin" 84',
                coords: { lat: 41.831071576, lng: 23.481692373 },
                hours: 'To be announced',
                image: 'images/others/dabov-bansko.jpg'
            },
            {
                id: 76,
                name: 'Skabrin RestoBar',
                address: 'ul. "Sveti Sveti Kiril I Metodiy" 2',
                coords: { lat: 41.834168, lng: 23.487351 },
                hours: 'To be announced',
                image: 'images/others/skabrin-restobar-bansko.jpg'
            }
        ]
    },

    // Stara Zagora
    starazagora: {
        name: 'Stara Zagora',
        coords: { lat: 42.4258, lng: 25.6345 },
        cafes: [
            {
                id: 77,
                name: 'New Coffee World',
                address: 'bul. "Tsar Simeon Veliki" 120',
                coords: { lat: 42.424928, lng: 25.631549 },
                hours: 'To be announced',
                image: 'images/others/new-coffee-world-stara-zagora.jpg'
            },
            {
                id: 78,
                name: 'Sunny Coffee Specialty Coffee',
                address: 'bul. "Nikola Petkov" 52',
                coords: { lat: 42.427165, lng: 25.662499 },
                hours: 'To be announced',
                image: 'images/others/sunny-coffee-stara-zagora-nikola-petkov.jpg'
            },
            {
                id: 79,
                name: 'Sunny Coffee Specialty Coffee',
                address: 'ul. "Pazarska" 13',
                coords: { lat: 42.425755, lng: 25.630218 },
                hours: 'To be announced',
                image: 'images/others/sunny-coffee-stara-zagora-pazarska.jpg'
            },
            {
                id: 80,
                name: 'Black Rabbit - Specialty Coffee',
                address: 'bul. "Tsar Simeon Veliki" 88',
                coords: { lat: 42.423508, lng: 25.623121 },
                hours: 'To be announced',
                image: 'images/others/black-rabbit-stara-zagora.jpg'
            },
            {
                id: 81,
                name: 'Element Coffee Roasters',
                address: 'ul. "Dimitar Naumov" 70А',
                coords: { lat: 42.426286, lng: 25.628601 },
                hours: 'To be announced',
                image: 'images/others/element-stara-zagora.png'
            }
        ]
    },

    // Ruse - Danube city
    ruse: {
        name: 'Ruse',
        coords: { lat: 43.8564, lng: 25.9561 },
        cafes: [
            {
                id: 82,
                name: 'DABOV Specialty Coffee',
                address: 'ul. "Tsarkovna nezavisimost" 1',
                coords: { lat: 43.849383396, lng: 25.952761996 },
                hours: 'To be announced',
                image: 'images/others/dabov-ruse.png'
            },
            {
                id: 83,
                name: 'Sapiens Specialty Coffee',
                address: 'ul. "Batak" 3',
                coords: { lat: 43.850070600, lng: 25.948531186 },
                hours: 'To be announced',
                image: 'images/others/sapiens-ruse.jpg'
            }
        ]
    },

    // Veliko Tarnovo - Historic city
    velikotarnovo: {
        name: 'Veliko Tarnovo',
        coords: { lat: 43.0757, lng: 25.6172 },
        cafes: [
            {
                id: 84,
                name: 'New Coffee World',
                address: 'bul. "Vasil Levski" 27А',
                coords: { lat: 43.079029, lng: 25.628483 },
                hours: 'To be announced',
                image: 'images/others/new-coffee-world-pleven-veliko-tarnovo.jpg'
            },
            {
                id: 85,
                name: 'Samurai Coffee Shop',
                address: 'ul. "Stefan Stambolov" 38',
                coords: { lat: 43.083944, lng: 25.639408 },
                hours: 'To be announced',
                image: 'images/others/samurai-veliko-tarnovo.jpeg'
            },
            {
                id: 86,
                name: 'Artizano Coffee',
                address: 'ul. "Dimitar Blagoev" 18',
                coords: { lat: 43.072470, lng: 25.609002 },
                hours: 'To be announced',
                image: 'images/others/artizano-veliko-tarnovo.jpg'
            }
        ]
    },

    // Pleven
    pleven: {
        name: 'Pleven',
        coords: { lat: 43.4170, lng: 24.6067 },
        cafes: [
            {
                id: 87,
                name: 'New Coffee World',
                address: 'ul. "Neofit Rilski" 3',
                coords: { lat: 43.416645, lng: 24.625112 },
                hours: 'To be announced',
                image: 'images/others/new-coffee-world-pleven.png'
            }
        ]
    },

    // Gabrovo
    gabrovo: {
        name: 'Gabrovo',
        coords: { lat: 42.8746, lng: 25.3348 },
        cafes: [
            {
                id: 88,
                name: 'New Coffee World',
                address: 'ul. "Aprilovska" 4',
                coords: { lat: 42.871219, lng: 25.318594 },
                hours: 'To be announced',
                image: 'images/others/new-coffee-world-gabrovo.jpg'
            }
        ]
    },

    // Vratza
    vratza: {
        name: 'Vratza',
        coords: { lat: 43.2100, lng: 23.5483 },
        cafes: [
            {
                id: 89,
                name: 'New Coffee World',
                address: 'ul. "Georgi Benkovski" 2',
                coords: { lat: 43.205047, lng: 23.547958 },
                hours: 'To be announced',
                image: 'images/others/new-coffee-world-vratza.jpg'
            }
        ]
    },

    // Blagoevgrad
    blagoevgrad: {
        name: 'Blagoevgrad',
        coords: { lat: 42.0116, lng: 23.0943 },
        cafes: [
            {
                id: 90,
                name: 'МЕГДАНЪ',
                address: 'ul. "Todor Alexandrov"',
                coords: { lat: 42.017455, lng: 23.095201 },
                hours: 'To be announced',
                image: 'images/others/мегданъ-blagoevgrad.jpg'
            },
            {
                id: 91,
                name: 'Espresso Cultura - Specialty Coffee',
                address: 'ul. "Mencha Karnicheva" 16',
                coords: { lat: 42.018545, lng: 23.093680 },
                hours: 'To be announced',
                image: 'images/others/espresso-cultura-blagoevgrad.jpg'
            },
            {
                id: 92,
                name: 'Vox Cafeteria & Cocktails',
                address: 'ul. "Sando I Petar Kitanovi" 8',
                coords: { lat: 42.021086, lng: 23.101182 },
                hours: 'To be announced',
                image: 'images/others/vox-cafeteria-blagoevgrad.jpg'
            }
        ]
    },

    // Gotse Delchev
    gotsedelchev: {
        name: 'Gotse Delchev',
        coords: { lat: 41.5669, lng: 23.7340 },
        cafes: [
            {
                id: 93,
                name: 'New Coffee World',
                address: 'ul. "Targovska" 32',
                coords: { lat: 41.571608, lng: 23.726260 },
                hours: 'To be announced',
                image: 'images/others/new-coffee-world-gotse-delchev.jpg'
            }
        ]
    }
};

// ========================================
// HOW TO ADD IMAGES:
// ========================================
// 1. Create an 'images' folder in your project directory (same level as index.html)
// 2. Add your cafe photos to the images folder
// 3. Name them clearly (e.g., 'cafe-name.jpg')
// 4. Reference them as: 'images/your-photo.jpg'
// 5. Supported formats: .jpg, .jpeg, .png, .webp
//
// File structure should look like:
// your-project/
// ├── index.html
// ├── style.css
// ├── app.js
// ├── data.js
// └── images/
//     ├── memento-coffee.jpg
//     ├── cafe-plus.jpg
//     └── ...

// ========================================
// HOW TO GET COORDINATES:
// ========================================
// Method 1 - OpenStreetMap (Recommended):
// 1. Go to: https://www.openstreetmap.org
// 2. Search for the cafe or address
// 3. Right-click on the exact location
// 4. Click "Show address"
// 5. Look at the URL: #map=19/42.69500/23.32000
// 6. Copy coordinates: lat: 42.69500, lng: 23.32000
//
// Method 2 - Google Maps:
// 1. Go to: https://www.google.com/maps
// 2. Search for the location
// 3. Right-click on the location
// 4. Click the coordinates at the top (they'll be copied)
// 5. Format as: lat: 42.69500, lng: 23.32000

// ========================================
// HOW TO ADD A NEW CAFÉ:
// ========================================
// 1. Copy one of the café objects above (from opening { to closing })
// 2. Paste it in the cafes array of the city you want
// 3. Update all fields: id, name, address, coords, hours, image
// 4. Make sure to add a comma after the previous café
// 5. Make sure the image file exists in your images folder
//
// Example:
// {
//     id: 9,
//     name: 'New Café Name',
//     address: 'Street Address, City',
//     coords: { lat: 42.1234, lng: 23.5678 },
//     hours: 'To be announced',
//     image: 'images/new-cafe.jpg'
// }

// ========================================
// HOW TO ADD A NEW CITY:
// ========================================
// 1. Copy an entire city object (from cityname: { to })
// 2. Paste it at the end, before the closing }
// 3. Update: city key name, name, coords, and cafes array
// 4. Make sure to add a comma after the previous city
//
// Example:
// ruse: {
//     name: 'Ruse',
//     coords: { lat: 43.8564, lng: 25.9561 },
//     cafes: [
//         {
//             id: 10,
//             name: 'Café Name',
//             address: 'Address, Ruse',
//             coords: { lat: 43.8500, lng: 25.9500 },
//             hours: 'To be announced',
//             image: 'images/cafe-ruse.jpg'
//         }
//     ]
// }

// ========================================
// IMAGE TIPS:
// ========================================
// - Use consistent naming: lowercase, hyphens instead of spaces
// - Keep file sizes reasonable: 500KB or less per image
// - Recommended dimensions: 800x600 pixels or similar ratio
// - Use descriptive names based on cafe name for easy management
