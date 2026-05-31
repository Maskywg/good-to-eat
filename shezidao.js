// --- Data: Shezidao Itinerary Spots ---
const itineraryData = [
    {
        id: "dadaocheng-start",
        title: "大稻埕碼頭五號水門 (起點)",
        time: "15:00 - 15:15",
        category: "bike",
        latlng: [25.0560, 121.5075],
        highlight: "🚲 單車之旅出發地",
        description: "穿過大稻埕五號水門即可進入寬敞舒適的淡水河濱自行車道。建議在此做足暖身，檢查車況與胎壓再行出發。",
        address: "台北市大同區民生西路底(五號水門)",
        icon: "fa-flag",
        image: "https://i0.wp.com/365hygge.com/wp-content/uploads/2021/02/24.jpg?resize=1024%2C715&ssl=1"
    },
    {
        id: "ubike-station-1",
        title: "YouBike 2.0 租借站 (民生西路423巷)",
        time: "15:00 - 15:15",
        category: "bike",
        latlng: [25.0562, 121.5085],
        highlight: "📍 最鄰近碼頭的租借站",
        description: "位於五號水門外的巷口，是離碼頭最近的YouBike站點。如果此站車量不足，可至大稻埕公園租借。",
        address: "台北市大同區民生西路423巷",
        icon: "fa-map-pin",
        image: "https://i0.wp.com/365hygge.com/wp-content/uploads/2021/02/05-2.jpg?resize=1024%2C768&ssl=1"
    },
    {
        id: "shezidao-spicy",
        title: "社子島第一辣",
        time: "15:45 - 16:15",
        category: "food",
        latlng: [25.0991, 121.4932],
        highlight: "🌶️ 50年老店台式美味",
        description: "經營50年的小攤車，大腸麵線、甜不辣、肉圓佐獨門特製麻辣醬。辣醬帶有沙沙顆粒感，麻辣夠味，是車友最愛的補給下午茶。",
        address: "台北市士林區延平北路七段150巷口",
        icon: "fa-pepper-hot",
        image: "https://i0.wp.com/365hygge.com/wp-content/uploads/2021/02/IMG_2682.jpg?resize=1024%2C768&ssl=1"
    },
    {
        id: "keelung-river-view",
        title: "基隆河沿線陸橋景觀",
        time: "16:15 - 16:30",
        category: "view",
        latlng: [25.0988, 121.4964],
        highlight: "🌁 遠眺高架陸橋與山脊",
        description: "此段基隆河岸視野無大樓阻擋，可以遠眺大屯山脊，並觀賞宏偉的社子大橋與繁忙高架陸橋所交織出的現代幾何線條。",
        address: "社子島自行車道 (基隆河側)",
        icon: "fa-bridge",
        image: "https://i0.wp.com/365hygge.com/wp-content/uploads/2021/02/12-1.jpg?resize=1024%2C768&ssl=1"
    },
    {
        id: "shezibridge-park",
        title: "社子大橋下親子公園",
        time: "16:30 - 16:45",
        category: "view",
        latlng: [25.1102, 121.4950],
        highlight: "🛝 鋪設安全防撞地板的休憩區",
        description: "位於社子大橋下的陰涼處，設有籃球場、溜滑梯、鞦韆等。路面平坦安全，非常適合親友一同停下乘涼、補水、休息。",
        address: "社子大橋下方河濱廣場",
        icon: "fa-child-reaching",
        image: "https://i0.wp.com/365hygge.com/wp-content/uploads/2021/02/1444.jpg?resize=1024%2C769&ssl=1"
    },
    {
        id: "wetland-daotou",
        title: "島頭公園 (兩河匯流點)",
        time: "16:45 - 17:15",
        category: "view",
        latlng: [25.1098, 121.4661],
        highlight: "🦅 豐富濕地生態與群鳥飛舞",
        description: "社子島最北端的岬角，在此能親眼見證淡水河與基隆河交匯的波瀾壯闊。濕地孕育了大量招潮蟹、彈塗魚及過境水鳥，是絕佳生態觀察點。",
        address: "台北市士林區延平北路九段底",
        icon: "fa-binoculars",
        image: "https://i0.wp.com/365hygge.com/wp-content/uploads/2021/02/16.jpg?resize=1024%2C768&ssl=1"
    },
    {
        id: "black-heart-cafe",
        title: "Black Heart Cafe",
        time: "17:15 - 18:00",
        category: "cafe",
        latlng: [25.1098, 121.4886],
        highlight: "☕ 網美必訪露營車復古咖啡館",
        description: "隱身於社子島廠房區的特色復古咖啡館，屋頂架著美式露營車。招牌提拉米蘇香濃微苦、口感綿密細緻，深受大眾好評。",
        address: "台北市士林區延平北路九段348號",
        icon: "fa-mug-saucer",
        image: "https://i0.wp.com/365hygge.com/wp-content/uploads/2021/02/17.jpg?resize=1024%2C768&ssl=1"
    },
    {
        id: "sunset-viewpoint",
        title: "淡水河畔金黃夕陽點",
        time: "18:00 - 18:30",
        category: "view",
        latlng: [25.0870, 121.5030],
        highlight: "🌅 絕美河景第一排落日餘暉",
        description: "返程往南沿著淡水河畔騎行。傍晚時分，紅澄澄的落日徐徐沉入觀音山與對岸高樓之間，將河面染成一片金黃，成了此行最美的記憶剪影。",
        address: "社子島自行車道 (淡水河側)",
        icon: "fa-cloud-sun",
        image: "https://i0.wp.com/365hygge.com/wp-content/uploads/2021/02/23.jpg?resize=1024%2C768&ssl=1"
    },
    {
        id: "huama-ice",
        title: "花媽古早味黑糖剉冰",
        time: "18:30 - 19:00",
        category: "food",
        latlng: [25.090628, 121.506582],
        highlight: "🍧 濃郁手工黑糖刨冰",
        description: "繞社子島一圈後，折入社正路品嚐超人氣的傳統剉冰。黑糖香氣濃郁，地瓜圓、粉圓配料豐富Q彈，是在地人最愛的消暑補給，吃完再滿足地騎回大稻埕。",
        address: "台北市士林區社正路39號",
        icon: "fa-ice-cream",
        image: "huama_shaved_ice.png"
    },
    {
        id: "dadaocheng-end",
        title: "大稻埕碼頭 (終點)",
        time: "19:00 - 19:30",
        category: "bike",
        latlng: [25.0560, 121.5075],
        highlight: "🏁 單車環島終點與晚風貨櫃市集",
        description: "騎回大稻埕水門，結束環島。可在碼頭旁的貨櫃市集點些炸物小食或飲品，享受徐徐河風與現場音樂，卸下一身疲憊。",
        address: "台北市大同區民生西路底",
        icon: "fa-circle-check",
        image: "https://i0.wp.com/365hygge.com/wp-content/uploads/2021/02/24.jpg?resize=1024%2C715&ssl=1"
    }
];

// --- Coordinates tracing the Cycling Path Loop ---
// Generated Shezidao loop coordinates using process_shezi_relations.py
const polylineRoute = [
    [25.056000, 121.507500],
    [25.056928, 121.507996],
    [25.057138, 121.508073],
    [25.057698, 121.508197],
    [25.057771, 121.508271],
    [25.058945, 121.508265],
    [25.059507, 121.508306],
    [25.060989, 121.508263],
    [25.061668, 121.508330],
    [25.062142, 121.508414],
    [25.062389, 121.508393],
    [25.063616, 121.508599],
    [25.064806, 121.508574],
    [25.067807, 121.508845],
    [25.068432, 121.508931],
    [25.068701, 121.508941],
    [25.069610, 121.509097],
    [25.070980, 121.509087],
    [25.075714, 121.508583],
    [25.075844, 121.508558],
    [25.077690, 121.507939],
    [25.078770, 121.507668],
    [25.078847, 121.507616],
    [25.080188, 121.507352],
    [25.080416, 121.507495],
    [25.080499, 121.507499],
    [25.081532, 121.507267],
    [25.084010, 121.506180],
    [25.084401, 121.505974],
    [25.085695, 121.505189],
    [25.085783, 121.505157],
    [25.087989, 121.503367],
    [25.089788, 121.501313],
    [25.089928, 121.501194],
    [25.090349, 121.500720],
    [25.091426, 121.499178],
    [25.092366, 121.498124],
    [25.092420, 121.498038],
    [25.092767, 121.497774],
    [25.093053, 121.497640],
    [25.093346, 121.497591],
    [25.093826, 121.497608],
    [25.093869, 121.497550],
    [25.093954, 121.497520],
    [25.094612, 121.497053],
    [25.094986, 121.496954],
    [25.095498, 121.496887],
    [25.095759, 121.496881],
    [25.096115, 121.496914],
    [25.096863, 121.497125],
    [25.096973, 121.497182],
    [25.096877, 121.497355],
    [25.097301, 121.496910],
    [25.097459, 121.496769],
    [25.097691, 121.496618],
    [25.097881, 121.496534],
    [25.097998, 121.496578],
    [25.098184, 121.496505],
    [25.098249, 121.496516],
    [25.098662, 121.496396],
    [25.098927, 121.496346],
    [25.099519, 121.496308],
    [25.100471, 121.496353],
    [25.101033, 121.496313],
    [25.101699, 121.496225],
    [25.103882, 121.496053],
    [25.108248, 121.495747],
    [25.109016, 121.495720],
    [25.109177, 121.495669],
    [25.109624, 121.495353],
    [25.109937, 121.495198],
    [25.110160, 121.495038],
    [25.110441, 121.494797],
    [25.110643, 121.494588],
    [25.110954, 121.494184],
    [25.112392, 121.492064],
    [25.112561, 121.491741],
    [25.112932, 121.490840],
    [25.113111, 121.490221],
    [25.113277, 121.489368],
    [25.113331, 121.488792],
    [25.113337, 121.488348],
    [25.113289, 121.487616],
    [25.113224, 121.487178],
    [25.113012, 121.486271],
    [25.111159, 121.481240],
    [25.110463, 121.479549],
    [25.109788, 121.477164],
    [25.109657, 121.474340],
    [25.109574, 121.473492],
    [25.109607, 121.473417],
    [25.109599, 121.472718],
    [25.109453, 121.470883],
    [25.109510, 121.470097],
    [25.109626, 121.469707],
    [25.109667, 121.468833],
    [25.109994, 121.466862],
    [25.109982, 121.466706],
    [25.109919, 121.466587],
    [25.109693, 121.466394],
    [25.109441, 121.466275],
    [25.109191, 121.466249],
    [25.109018, 121.466278],
    [25.108873, 121.466362],
    [25.108778, 121.466455],
    [25.108559, 121.466826],
    [25.108420, 121.467127],
    [25.108057, 121.468019],
    [25.107540, 121.469403],
    [25.106494, 121.471694],
    [25.106174, 121.472462],
    [25.105338, 121.475791],
    [25.104767, 121.477819],
    [25.104038, 121.480109],
    [25.103620, 121.481335],
    [25.103371, 121.481992],
    [25.102861, 121.483282],
    [25.102407, 121.484288],
    [25.101604, 121.485928],
    [25.100819, 121.487403],
    [25.100185, 121.488507],
    [25.100041, 121.488667],
    [25.099978, 121.488778],
    [25.099905, 121.488975],
    [25.098728, 121.490799],
    [25.097207, 121.492822],
    [25.096461, 121.493518],
    [25.095621, 121.494190],
    [25.095464, 121.494347],
    [25.094055, 121.496061],
    [25.093634, 121.496673],
    [25.092767, 121.497774],
    [25.092420, 121.498038],
    [25.091800, 121.500000],
    [25.091000, 121.502800],
    [25.090200, 121.505000],
    [25.090628, 121.506582], // 花媽古早味黑糖剉冰
    [25.089500, 121.505400],
    [25.088500, 121.504200],
    [25.087989, 121.503367],
    [25.085895, 121.505082],
    [25.084401, 121.505974],
    [25.084010, 121.506180],
    [25.081532, 121.507267],
    [25.080499, 121.507499],
    [25.080416, 121.507495],
    [25.080188, 121.507352],
    [25.078847, 121.507616],
    [25.078770, 121.507668],
    [25.077690, 121.507939],
    [25.075844, 121.508558],
    [25.075714, 121.508583],
    [25.070980, 121.509087],
    [25.069610, 121.509097],
    [25.068701, 121.508941],
    [25.068432, 121.508931],
    [25.067807, 121.508845],
    [25.064806, 121.508574],
    [25.063616, 121.508599],
    [25.062389, 121.508393],
    [25.062142, 121.508414],
    [25.061668, 121.508330],
    [25.060989, 121.508263],
    [25.059507, 121.508306],
    [25.058945, 121.508265],
    [25.057771, 121.508271],
    [25.057698, 121.508197],
    [25.057138, 121.508073],
    [25.056928, 121.507996],
    [25.056000, 121.507500],
];

// --- Global variables ---

let map;
let markers = [];
let bikePathPolyline;
let activeCategory = 'all';
let activeTrail = 'full-loop';

// --- Initialize App ---
document.addEventListener("DOMContentLoaded", () => {
    initMap();
    renderItineraryCards();
    setupEventListeners();
    applyTrailFilter('full-loop');
    setup3DCardTilt();
});

// --- Map Initialization ---
function initMap() {
    // Center map around the midpoint of the route
    map = L.map('map', {
        zoomControl: false,
        attributionControl: false
    }).setView([25.088, 121.495], 13);

    // Beautiful CartoDB Voyager tiles (clean, modern map vector style)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19
    }).addTo(map);

    // Zoom control at bottom right
    L.control.zoom({
        position: 'bottomright'
    }).addTo(map);

    // Draw the loop bike route path
    bikePathPolyline = L.polyline(polylineRoute, {
        color: '#f97316',
        weight: 5,
        opacity: 0.8,
        dashArray: '8, 8', // Dashed line for cycling track
        lineJoin: 'round'
    }).addTo(map);

    // Render Markers
    renderMapMarkers();
}

// --- Render Map Markers ---
function renderMapMarkers() {
    // Clear old markers if any
    markers.forEach(m => map.removeLayer(m.leafletMarker));
    markers = [];

    const filteredData = filterData(itineraryData, activeCategory, activeTrail, document.getElementById('search-input').value);

    filteredData.forEach((spot, index) => {
        // Create custom div icon
        const iconHtml = `
            <div class="marker-pin-wrapper marker-${spot.category}">
                <div class="marker-pin">
                    <div class="marker-pin-inner">
                        <i class="fa-solid ${getCategoryIcon(spot.category)}"></i>
                    </div>
                </div>
            </div>
        `;

        const customIcon = L.divIcon({
            html: iconHtml,
            className: 'custom-div-icon',
            iconSize: [30, 42],
            iconAnchor: [0, 0]
        });

        // Add Marker
        const marker = L.marker(spot.latlng, { icon: customIcon }).addTo(map);
        
        // Custom Popup Content
        const popupContent = `
            <div class="popup-container">
                <div class="popup-header">
                    <span class="popup-title">${spot.title}</span>
                    <span class="popup-category ${spot.category}">${getCategoryChinese(spot.category)}</span>
                </div>
                <img src="${spot.image}" class="popup-image" alt="${spot.title}">
                <span class="popup-dish">${spot.highlight}</span>
                <p class="popup-body">${spot.description}</p>
                <div class="popup-footer">
                    <span>時間：<span class="popup-time">${spot.time.split(" ")[0]}</span></span>
                    <span>${spot.address.split(" ")[0]}</span>
                </div>
            </div>
        `;

        marker.bindPopup(popupContent, {
            maxWidth: 280,
            closeButton: false
        });

        // Marker click logic
        marker.on('click', () => {
            selectCard(spot.id, false); // select corresponding list card without panning map again
        });

        markers.push({
            id: spot.id,
            leafletMarker: marker,
            spot: spot
        });
    });
}

// --- Render Sidebar Cards ---
function renderItineraryCards() {
    const listContainer = document.getElementById("itinerary-cards-list");
    listContainer.innerHTML = "";

    const searchVal = document.getElementById('search-input').value;
    const filteredData = filterData(itineraryData, activeCategory, activeTrail, searchVal);

    if (filteredData.length === 0) {
        listContainer.innerHTML = `
            <div class="no-results" style="padding: 30px; text-align: center; color: var(--text-muted);">
                <i class="fa-solid fa-face-frown" style="font-size: 32px; margin-bottom: 12px; display: block; color: var(--primary);"></i>
                <p>找不到符合的行程亮點，請更換搜尋詞。</p>
            </div>
        `;
        return;
    }

    filteredData.forEach(spot => {
        const card = document.createElement("div");
        card.className = `food-card category-${spot.category}`;
        card.id = `card-${spot.id}`;
        card.setAttribute("role", "listitem");

        card.innerHTML = `
            <div class="card-time">${spot.time}</div>
            <div class="card-header">
                <div class="card-title-group">
                    <h2 class="card-title">
                        <i class="fa-solid ${getCategoryIcon(spot.category)}" style="color: var(--color-${spot.category})"></i>
                        ${spot.title}
                    </h2>
                </div>
                <span class="badge-category ${spot.category}">${getCategoryChinese(spot.category)}</span>
            </div>
            <p class="card-desc">${spot.description}</p>
            <div class="card-highlight">
                <i class="fa-solid fa-star"></i>
                <span>${spot.highlight}</span>
            </div>
            <div class="card-footer">
                <div class="card-address">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>${spot.address}</span>
                </div>
            </div>
        `;

        card.addEventListener("click", () => {
            selectCard(spot.id, true); // Select and pan map
        });

        listContainer.appendChild(card);
    });
}

// --- Filter logic ---
function filterData(data, category, trail, search) {
    return data.filter(item => {
        // Category Filter
        const matchesCategory = (category === 'all' || item.category === category);

        // Trail Filter
        let matchesTrail = true;
        if (trail === 'food-only') {
            matchesTrail = (item.category === 'food' || item.category === 'cafe' || item.category === 'bike');
        } else if (trail === 'view-only') {
            matchesTrail = (item.category === 'view' || item.id === 'dadaocheng-start' || item.id === 'dadaocheng-end');
        }

        // Search Filter
        const searchLower = search.toLowerCase();
        const matchesSearch = (
            item.title.toLowerCase().includes(searchLower) ||
            item.description.toLowerCase().includes(searchLower) ||
            item.highlight.toLowerCase().includes(searchLower) ||
            item.address.toLowerCase().includes(searchLower)
        );

        return matchesCategory && matchesTrail && matchesSearch;
    });
}

// --- Card Selection Sync ---
function selectCard(spotId, panToMarker = true) {
    // De-select all cards
    document.querySelectorAll(".food-card").forEach(c => c.classList.remove("selected"));

    // Select the card
    const targetCard = document.getElementById(`card-${spotId}`);
    if (targetCard) {
        targetCard.classList.add("selected");
        // Scroll card into sidebar view smoothly
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Find and trigger map marker
    const markerObj = markers.find(m => m.id === spotId);
    if (markerObj) {
        const marker = markerObj.leafletMarker;
        marker.openPopup();
        if (panToMarker) {
            map.panTo(marker.getLatLng(), { animate: true, duration: 0.6 });
        }
    }
}

// --- Event Listeners Setup ---
function setupEventListeners() {
    // Search input
    document.getElementById("search-input").addEventListener("input", () => {
        renderItineraryCards();
        renderMapMarkers();
    });

    // Category Filter Buttons
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            const target = e.currentTarget;
            target.classList.add("active");
            activeCategory = target.getAttribute("data-category");
            
            renderItineraryCards();
            renderMapMarkers();
        });
    });

    // Trail Route Buttons
    document.querySelectorAll(".trail-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".trail-btn").forEach(b => b.classList.remove("active"));
            const target = e.currentTarget;
            target.classList.add("active");
            activeTrail = target.getAttribute("data-trail");
            
            applyTrailFilter(activeTrail);
            renderItineraryCards();
            renderMapMarkers();
        });
    });

    // Accessibility Controls: Theme Toggle
    const themeBtn = document.getElementById("btn-toggle-theme");
    const themeIcon = document.getElementById("theme-icon");
    themeBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", nextTheme);
        
        // Update icon
        if (nextTheme === "dark") {
            themeIcon.className = "fa-solid fa-sun";
        } else {
            themeIcon.className = "fa-solid fa-moon";
        }
    });

    // Accessibility Controls: Font Resizer
    document.getElementById("btn-font-decrease").addEventListener("click", () => {
        document.documentElement.className = "font-size-small";
        updateFontActiveBtn("btn-font-decrease");
    });
    document.getElementById("btn-font-normal").addEventListener("click", () => {
        document.documentElement.className = "";
        updateFontActiveBtn("btn-font-normal");
    });
    document.getElementById("btn-font-increase").addEventListener("click", () => {
        document.documentElement.className = "font-size-large";
        updateFontActiveBtn("btn-font-increase");
    });

    // Mobile View Toggle
    const btnShowList = document.getElementById("btn-show-list");
    const btnShowMap = document.getElementById("btn-show-map");

    btnShowList.addEventListener("click", () => {
        btnShowList.classList.add("active");
        btnShowMap.classList.remove("active");
        document.body.classList.remove("show-map-view");
    });

    btnShowMap.addEventListener("click", () => {
        btnShowMap.classList.add("active");
        btnShowList.classList.remove("active");
        document.body.classList.add("show-map-view");
        // Invalidate map size so Leaflet updates correctly after being displayed
        setTimeout(() => {
            map.invalidateSize();
        }, 100);
    });
}

// --- Apply Trail Highlight ---
function applyTrailFilter(trailType) {
    const infoCard = document.getElementById("trail-info-card");
    const nameDisplay = document.getElementById("trail-name-display");
    const descDisplay = document.getElementById("trail-desc-display");
    const stepsDisplay = document.getElementById("trail-steps-display");

    let name = "";
    let desc = "";
    let spots = [];

    if (trailType === 'full-loop') {
        name = "逆時針追日線";
        desc = "從大稻埕租車，沿基隆河畔北上，吃小吃看濕地，再訪咖啡廳，傍晚迎著淡水河夕陽南下歸還。";
        spots = itineraryData;
        // Restore polyline style
        if (bikePathPolyline) {
            bikePathPolyline.setStyle({ color: '#f97316', dashArray: '8, 8' });
        }
    } else if (trailType === 'food-only') {
        name = "美食補給線";
        desc = "鎖定大稻埕、社子島第一辣的台式點心，與 Black Heart Cafe 的人氣提拉米蘇甜點補給。";
        spots = itineraryData.filter(i => i.category === 'food' || i.category === 'cafe' || i.id.includes('start') || i.id.includes('end'));
        if (bikePathPolyline) {
            bikePathPolyline.setStyle({ color: '#ef4444', dashArray: 'none' });
        }
    } else if (trailType === 'view-only') {
        name = "純景風光線";
        desc = "聚焦在基隆河畔橋景、社子大橋下親子公園、島頭兩河匯流點，以及最美淡水河畔落日。";
        spots = itineraryData.filter(i => i.category === 'view' || i.id === 'dadaocheng-start' || i.id === 'dadaocheng-end');
        if (bikePathPolyline) {
            bikePathPolyline.setStyle({ color: '#0ea5e9', dashArray: '4, 4' });
        }
    }

    nameDisplay.textContent = name;
    descDisplay.textContent = desc;

    // Render trail steps in the info card
    stepsDisplay.innerHTML = "";
    spots.forEach((spot, idx) => {
        const step = document.createElement("div");
        step.className = "trail-step";
        step.innerHTML = `<span class="step-idx">${idx + 1}</span> ${spot.title.split(" (")[0]}`;
        step.addEventListener("click", (e) => {
            e.stopPropagation();
            selectCard(spot.id, true);
        });
        stepsDisplay.appendChild(step);
    });
}

// --- UI Helpers ---
function updateFontActiveBtn(activeId) {
    document.querySelectorAll(".text-sizer .size-btn").forEach(btn => {
        if (btn.id === activeId) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}

function getCategoryIcon(cat) {
    switch (cat) {
        case 'bike': return 'fa-bicycle';
        case 'food': return 'fa-pepper-hot';
        case 'view': return 'fa-camera';
        case 'cafe': return 'fa-coffee';
        default: return 'fa-map-pin';
    }
}

function getCategoryChinese(cat) {
    switch (cat) {
        case 'bike': return '租還車點';
        case 'food': return '小吃美食';
        case 'view': return '河岸美景';
        case 'cafe': return '咖啡甜點';
        default: return '景點';
    }
}

// --- 3D Hero Card Mouse Tilt Effect ---
function setup3DCardTilt() {
    const card = document.getElementById("hero-3d-card");
    if (!card) return;

    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top;  // y position within the element
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate tilt angles (max 15 degrees)
        const tiltX = ((centerY - y) / centerY) * 15;
        const tiltY = ((x - centerX) / centerX) * 15;
        
        card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        // Reset tilt smoothly
        card.style.transform = `rotateX(0deg) rotateY(0deg)`;
        card.style.transition = "transform 0.5s ease";
    });

    card.addEventListener("mouseenter", () => {
        card.style.transition = "transform 0.1s ease";
    });
}
