// ========================================
// BULGARIAN SPECIALTY CAFÉS APP
// ========================================

// Language management
let currentLanguage = 'en';

const translations = {
    en: {
        'main-title': 'Bulgarian Specialty Cafés',
        'main-subtitle': 'Discover the finest specialty coffee spots across Bulgaria',
        'explore-by-city': 'Explore by City',
        'info-text': 'Life is too demanding for mediocre coffee.',
        'city-quote': 'Coffee is simple. Excellence is not.',
        'back-to-home': 'Back to Home',
        'specialty-cafes': 'specialty cafés',
        'specialty-cafe': 'specialty café',
        'all-cafes-in': 'All Cafés in',
        'address': 'Address',
        'hours': 'Hours',
        'close': 'Close',
        'reset-map': 'Reset Map',
        // City names
        'Sofia': 'Sofia',
        'Plovdiv': 'Plovdiv',
        'Varna': 'Varna',
        'Burgas': 'Burgas',
        'Bansko': 'Bansko',
        'Stara Zagora': 'Stara Zagora',
        'Ruse': 'Ruse',
        'Veliko Tarnovo': 'Veliko Tarnovo',
        'Pleven': 'Pleven',
        'Gabrovo': 'Gabrovo',
        'Vratza': 'Vratza',
        'Blagoevgrad': 'Blagoevgrad',
        'Gotse Delchev': 'Gotse Delchev'
    },
    bg: {
        'main-title': 'Спешълти кафета в България',
        'main-subtitle': 'Открийте най-добрите спешълти кафета в България',
        'explore-by-city': 'Разгледай по град',
        'info-text': 'Животът е твърде взискателен за посредствено кафе.',
        'city-quote': 'Кафето е просто. Съвършенството не е.',
        'back-to-home': 'Обратно към начало',
        'specialty-cafes': 'спешълти кафета',
        'specialty-cafe': 'спешълти кафе',
        'all-cafes-in': 'Всички кафета в',
        'address': 'Адрес',
        'hours': 'Работно време',
        'close': 'Затвори',
        'reset-map': 'Центрирай картата',
        // City names in Bulgarian
        'Sofia': 'София',
        'Plovdiv': 'Пловдив',
        'Varna': 'Варна',
        'Burgas': 'Бургас',
        'Bansko': 'Банско',
        'Stara Zagora': 'Стара Загора',
        'Ruse': 'Русе',
        'Veliko Tarnovo': 'Велико Търново',
        'Pleven': 'Плевен',
        'Gabrovo': 'Габрово',
        'Vratza': 'Враца',
        'Blagoevgrad': 'Благоевград',
        'Gotse Delchev': 'Гоце Делчев'
    }
};

// State management
let currentCity = null;
let mainMap = null;
let cityMap = null;
let markers = [];

// DOM elements
const mainPage = document.getElementById('mainPage');
const cityPage = document.getElementById('cityPage');
const cafeModal = document.getElementById('cafeModal');
const backButton = document.getElementById('backButton');
const closeModalBtn = document.getElementById('closeModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const langToggle = document.getElementById('langToggle');
const langText = document.getElementById('langText');

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    renderCitiesGrid();
    initMainMap();
});

// ========================================
// MAIN PAGE FUNCTIONS
// ========================================

// Map city keys to their image filenames
function getCityImagePath(cityKey) {
    const cityImageMap = {
        'sofia': 'sofia.webp',
        'plovdiv': 'plovdiv.jpg',
        'varna': 'varna.webp',
        'burgas': 'burgas.jpg',
        'bansko': 'bansko.jpg',
        'starazagora': 'stara-zagora.jpg',
        'ruse': 'ruse.png',
        'velikotarnovo': 'veliko-tarnovo.png',
        'pleven': 'pleven.jpg',
        'gabrovo': 'gabrovo.png',
        'vratza': 'vratza.jpg',
        'blagoevgrad': 'blagoevgrad.png',
        'gotsedelchev': 'gotse-delchev.jpg'
    };
    
    return cityImageMap[cityKey] ? `images/cities/${cityImageMap[cityKey]}` : '';
}

function renderCitiesGrid() {
    const citiesGrid = document.getElementById('citiesGrid');
    citiesGrid.innerHTML = '';

    Object.keys(cafesData).forEach(cityKey => {
        const city = cafesData[cityKey];
        const cityCard = createCityCard(cityKey, city);
        citiesGrid.appendChild(cityCard);
    });
}

function createCityCard(cityKey, city) {
    const card = document.createElement('div');
    card.className = 'city-card';
    card.onclick = () => showCityPage(cityKey);
    
    // Set background image for the city
    const cityImagePath = getCityImagePath(cityKey);
    if (cityImagePath) {
        card.style.backgroundImage = `url('${cityImagePath}')`;
    }

    const cafeCount = city.cafes.length;
    const cafeWord = cafeCount === 1 
        ? translations[currentLanguage]['specialty-cafe'] 
        : translations[currentLanguage]['specialty-cafes'];

    // Get translated city name
    const translatedCityName = translations[currentLanguage][city.name] || city.name;

    card.innerHTML = `
        <div class="city-card-header">
            <div class="city-card-title">
                <svg class="city-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                ${translatedCityName}
            </div>
            <svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </div>
        <p class="city-count">${cafeCount} ${cafeWord}</p>
    `;

    return card;
}

function initMainMap() {
    const mainMapEl = document.getElementById('mainMap');
    
    // Initialize map centered on Bulgaria
    mainMap = L.map(mainMapEl).setView([42.7, 25.5], 7);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(mainMap);

    // Add all cafes to the map
    const allCafes = getAllCafes();
    allCafes.forEach(cafe => {
        addMarker(mainMap, cafe);
    });
}

// ========================================
// CITY PAGE FUNCTIONS
// ========================================

function showCityPage(cityKey) {
    currentCity = cityKey;
    const city = cafesData[cityKey];

    // Update UI
    mainPage.classList.add('hidden');
    cityPage.classList.remove('hidden');

    // Get translated city name
    const translatedCityName = translations[currentLanguage][city.name] || city.name;

    // Update city name
    document.getElementById('cityName').textContent = translatedCityName;
    document.getElementById('cityListTitle').textContent = `${translations[currentLanguage]['all-cafes-in']} ${translatedCityName}`;

    // Set city image header
    const cityImageHeader = document.getElementById('cityImageHeader');
    const cityImagePath = getCityImagePath(cityKey);
    if (cityImagePath) {
        cityImageHeader.style.backgroundImage = `url('${cityImagePath}')`;
    }

    // Render cafes grid
    renderCafesGrid(city.cafes);

    // Initialize city map
    setTimeout(() => {
        initCityMap(city);
    }, 100);
}

function renderCafesGrid(cafes) {
    const cafesGrid = document.getElementById('cafesGrid');
    cafesGrid.innerHTML = '';

    cafes.forEach(cafe => {
        const cafeCard = createCafeCard(cafe);
        cafesGrid.appendChild(cafeCard);
    });
}

function createCafeCard(cafe) {
    const card = document.createElement('div');
    card.className = 'cafe-card';
    card.onclick = () => showCafeModal(cafe);

    card.innerHTML = `
        <img src="${cafe.image}" alt="${cafe.name}" class="cafe-image">
        <div class="cafe-card-body">
            <h3 class="cafe-name">${cafe.name}</h3>
            <div class="cafe-detail">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <p class="cafe-address">${cafe.address}</p>
            </div>
            <div class="cafe-detail">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <p class="cafe-hours">${cafe.hours}</p>
            </div>
        </div>
    `;

    return card;
}

function initCityMap(city) {
    const cityMapEl = document.getElementById('cityMap');

    // Remove existing map if any
    if (cityMap) {
        cityMap.remove();
    }

    // Initialize map
    cityMap = L.map(cityMapEl).setView([city.coords.lat, city.coords.lng], 13);

    // Add tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(cityMap);

    // Add cafe markers
    city.cafes.forEach(cafe => {
        addMarker(cityMap, cafe);
    });

    // Fit bounds to show all cafes
    if (city.cafes.length > 1) {
        const bounds = L.latLngBounds(city.cafes.map(cafe => [cafe.coords.lat, cafe.coords.lng]));
        cityMap.fitBounds(bounds, { padding: [50, 50] });
    }
}

// ========================================
// MAP FUNCTIONS
// ========================================

function addMarker(map, cafe) {
    const coffeeIcon = L.divIcon({
        html: `<div style="background-color: #92400e; border: 3px solid white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
            </svg>
        </div>`,
        className: 'custom-coffee-icon',
        iconSize: [24, 24],
        iconAnchor: [12, 12],
        popupAnchor: [0, -12]
    });

    const marker = L.marker([cafe.coords.lat, cafe.coords.lng], {
        icon: coffeeIcon
    }).addTo(map);

    const popupContent = `
        <div style="min-width: 220px;">
            <img src="${cafe.image}" alt="${cafe.name}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 8px;" />
            <h3 style="margin: 0 0 6px 0; color: #78350f; font-weight: bold; font-size: 16px;">${cafe.name}</h3>
            <p style="margin: 0 0 4px 0; color: #92400e; font-size: 13px; display: flex; align-items: start; gap: 4px;">
                <span style="margin-top: 2px;">📍</span>
                <span>${cafe.address}</span>
            </p>
            <p style="margin: 0; color: #b45309; font-size: 13px; display: flex; align-items: start; gap: 4px;">
                <span>🕐</span>
                <span>${cafe.hours}</span>
            </p>
        </div>
    `;

    marker.bindPopup(popupContent, {
        maxWidth: 250,
        className: 'custom-popup'
    });

    marker.on('click', () => {
        showCafeModal(cafe);
    });

    markers.push(marker);
}

// ========================================
// MODAL FUNCTIONS
// ========================================

function showCafeModal(cafe) {
    document.getElementById('modalImage').src = cafe.image;
    document.getElementById('modalImage').alt = cafe.name;
    document.getElementById('modalName').textContent = cafe.name;
    document.getElementById('modalAddress').textContent = cafe.address;
    document.getElementById('modalHours').textContent = cafe.hours;

    cafeModal.classList.remove('hidden');
}

function closeCafeModal() {
    cafeModal.classList.add('hidden');
}

// ========================================
// NAVIGATION
// ========================================

function goBackToMain() {
    cityPage.classList.add('hidden');
    mainPage.classList.remove('hidden');
    currentCity = null;

    // Clean up city map
    if (cityMap) {
        cityMap.remove();
        cityMap = null;
    }
    
    // Reset main map to initial position
    if (mainMap) {
        mainMap.setView([42.7, 25.5], 7);
    }
}

function resetMapPosition() {
    if (mainMap) {
        mainMap.setView([42.7, 25.5], 7);
    }
}

function resetCityMapPosition() {
    if (cityMap && currentCity) {
        const city = cafesData[currentCity];
        cityMap.setView([city.coords.lat, city.coords.lng], 13);
        
        // Fit bounds to show all cafes if more than one
        if (city.cafes.length > 1) {
            const bounds = L.latLngBounds(city.cafes.map(cafe => [cafe.coords.lat, cafe.coords.lng]));
            cityMap.fitBounds(bounds, { padding: [50, 50] });
        }
    }
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

function getAllCafes() {
    const allCafes = [];
    Object.values(cafesData).forEach(city => {
        allCafes.push(...city.cafes);
    });
    return allCafes;
}

// ========================================
// LANGUAGE FUNCTIONS
// ========================================

function switchLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'bg' : 'en';
    langText.textContent = currentLanguage === 'en' ? 'BG' : 'EN';
    
    // Toggle language class on body for font switching
    document.body.className = currentLanguage === 'bg' ? 'lang-bg' : 'lang-en';
    
    updateTranslations();
}

function updateTranslations() {
    // Update static text elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update back button
    backButton.innerHTML = `
        <svg class="back-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        ${translations[currentLanguage]['back-to-home']}
    `;
    
    // Update modal labels
    const addressLabel = document.querySelector('.detail-label');
    if (addressLabel) {
        addressLabel.textContent = translations[currentLanguage]['address'];
    }
    
    const hoursLabel = document.querySelectorAll('.detail-label')[1];
    if (hoursLabel) {
        hoursLabel.textContent = translations[currentLanguage]['hours'];
    }
    
    const closeButton = document.getElementById('closeModal');
    closeButton.textContent = translations[currentLanguage]['close'];
    
    // Update city list title and city name if on city page
    if (currentCity) {
        const city = cafesData[currentCity];
        const translatedCityName = translations[currentLanguage][city.name] || city.name;
        document.getElementById('cityName').textContent = translatedCityName;
        document.getElementById('cityListTitle').textContent = `${translations[currentLanguage]['all-cafes-in']} ${translatedCityName}`;
    }
    
    // Re-render city cards with updated text
    renderCitiesGrid();
}

// ========================================
// EVENT LISTENERS
// ========================================

backButton.addEventListener('click', goBackToMain);
closeModalBtn.addEventListener('click', closeCafeModal);
modalCloseBtn.addEventListener('click', closeCafeModal);
langToggle.addEventListener('click', switchLanguage);

// Add reset map button listeners
document.addEventListener('DOMContentLoaded', () => {
    const resetMapBtn = document.getElementById('resetMapBtn');
    if (resetMapBtn) {
        resetMapBtn.addEventListener('click', resetMapPosition);
    }
    
    const resetCityMapBtn = document.getElementById('resetCityMapBtn');
    if (resetCityMapBtn) {
        resetCityMapBtn.addEventListener('click', resetCityMapPosition);
    }
});

// Close modal when clicking overlay
cafeModal.querySelector('.modal-overlay').addEventListener('click', closeCafeModal);

// Prevent closing when clicking modal content
cafeModal.querySelector('.modal-content').addEventListener('click', (e) => {
    e.stopPropagation();
});
