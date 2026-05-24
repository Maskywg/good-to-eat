// --- Dadaocheng and Taipei City Center Food Map Core Data ---

const shopsData = [
    {
        id: "aka-cafe",
        name: "AKA café",
        alias: "郭烏隆私宅下午茶",
        category: "dessert",
        categoryName: "老宅茶點",
        tag: "百年首富私宅中庭",
        signature: "糕點、肉乾與梅子",
        desc: "隱身於迪化街民樂街巷弄、日治時期富商郭烏隆之百年私宅。在中庭的巴洛克老洋樓與優雅小水池旁，享用結合大稻埕南北貨特色的點心（包含經典糕點、香Q肉乾與梅子），感受大稻埕歷史底蘊的獨特魅力。",
        videoTime: "00:00 - 02:00",
        address: "台北市大同區民樂街66號後棟",
        lat: 25.0566,
        lng: 121.5085
    },
    {
        id: "yuyubiao",
        name: "慈聖宮「魷魚標」",
        alias: "祖傳清燙發泡魷魚",
        category: "snack",
        categoryName: "廟口小吃",
        tag: "手工堅持親自發泡",
        signature: "清燙魷魚",
        desc: "大稻埕慈聖宮前的元老級攤位。老闆堅持親自動手長時間發泡乾魷魚，拒絕使用工廠批量貨，因此保留了厚實肉質、濃郁香氣與無比彈牙的Q彈口感。沾醬由桔醬、醋、蒜與醬油膏特調，搭配香菜更對味。",
        videoTime: "02:00 - 04:10",
        address: "台北市大同區保安街49巷17號",
        lat: 25.0602,
        lng: 121.5121
    },
    {
        id: "lai-jijuan",
        name: "慈聖宮雞捲",
        alias: "大稻埕保安街雞捲",
        category: "snack",
        categoryName: "廟口小吃",
        tag: "包有海鰻的鮮美古早味",
        signature: "古早味雞捲",
        desc: "慈聖宮前知名的「賴記雞捲」。有別於傳統全豬肉內餡，這家雞捲包入了大塊肥美卻不油不膩的海鰻，口感層次極其豐富。外皮使用腐皮炸至黃金酥脆，是廟口人氣最高的老味道之一。",
        videoTime: "04:10 - 04:30",
        address: "台北市大同區保安街49巷17號",
        lat: 25.0603,
        lng: 121.5124
    },
    {
        id: "tongzai-rice",
        name: "大橋頭筒仔米糕",
        alias: "老牌筒仔米糕",
        category: "staple",
        categoryName: "經典主食",
        tag: "米其林必比登推薦",
        signature: "筒仔米糕、滷蛋",
        desc: "延三夜市一帶的50年老店。主打與南部加肉燥不同的「台北口味」，直接將瘦肉或肥肉鋪在糯米上方蒸熟。米粒軟糯入味，推薦搭配特製蘿蔔乾辣椒醬、滷蛋，口感更加升級。",
        videoTime: "04:30 - 05:00",
        address: "台北市大同區延平北路三段41號",
        lat: 25.0648,
        lng: 121.5112
    },
    {
        id: "hailu-soup",
        name: "大橋頭海陸湯",
        alias: "元氣滿滿海陸湯",
        category: "hidden", // We map 'hidden' category to '鮮美湯品'
        categoryName: "鮮美湯品",
        tag: "做苦力工人的精力泉源",
        signature: "豬肝蚵仔海陸湯",
        desc: "早年為了給辛勤做苦力的勞工補充精力而誕生。湯頭以大骨熬製，用料極度實在。湯裡盛裝厚切軟嫩的豬肝以及數量極多、大顆飽滿的鮮美蚵仔，是搭配筒仔米糕的老饕黃金拍檔。",
        videoTime: "05:00 - 05:20",
        address: "台北市大同區延平北路三段41號",
        lat: 25.0649,
        lng: 121.5110
    },
    {
        id: "lin-noodles",
        name: "林家乾麵",
        alias: "建中後門福州乾麵",
        category: "staple",
        categoryName: "經典主食",
        tag: "老闆15年尋麵結晶",
        signature: "福州乾麵 (傻瓜麵)",
        desc: "位於台北城南建中側門旁的傳奇乾麵老店。老闆花費15年才尋找到完美契合的麵條比例，久拌不乾黏、不黏糊。吃的時候一定要趁熱淋上「烏醋」提香。另可切豆干、海帶、豬頭皮等美味小菜搭餐。",
        videoTime: "05:20 - 06:10",
        address: "台北市中正區泉州街11號",
        lat: 25.0315,
        lng: 121.5164
    },
    {
        id: "lin-soup",
        name: "林家乾麵「蛋包魚丸湯」",
        alias: "糖心蛋包魚丸湯",
        category: "hidden", // We map 'hidden' category to '鮮美湯品'
        categoryName: "鮮美湯品",
        tag: "手工鯊魚肉魚丸 + 糖心蛋",
        signature: "蛋包魚丸湯",
        desc: "林家乾麵的頂級配湯。魚丸使用鮮美鯊魚肉純手工製作，口感超級Q彈有勁；蛋包則精準煮出極致誘人的「糖心」蛋黃狀態。咬開蛋包後，讓濃郁的蛋黃流出與湯頭融合，非常推薦！",
        videoTime: "06:10 - 07:00",
        address: "台北市中正區泉州街11號",
        lat: 25.0316,
        lng: 121.5166
    }
];

const trailsData = {
    "trail-classic": {
        name: "大稻埕廟口老街線",
        desc: "深入感受老台北的大稻埕氛圍！先造訪富商百年老宅 AKA café 品茶吃茶點，隨後漫步至慈聖宮廟埕，來盤Q彈有嚼勁的清燙發泡魷魚，再配上一口包入大塊海鰻的賴記雞捲，悠閒又愜意。",
        shops: ["aka-cafe", "yuyubiao", "lai-jijuan"]
    },
    "trail-takeaway": {
        name: "大橋頭大飽口福線",
        desc: "美食與能量一次補滿！前往大橋頭品嚐米其林必比登推薦的筒仔米糕，再搭配一碗滿載鮮蚵與厚切豬肝的靈魂海陸湯，這款為苦力工人打造的精力餐能帶給您滿滿的活力！",
        shops: ["tongzai-rice", "hailu-soup"]
    },
    "trail-hidden": {
        name: "台北城南懷舊乾麵線",
        desc: "尋找青春與回憶的美味！前往城中建中後門，享用精選麵條、配上烏醋提香的經典福州乾麵與豐富小菜，最後以純手工Q彈魚丸和金黃糖心蛋包湯做為完美的句點。",
        shops: ["lin-noodles", "lin-soup"]
    }
};


// --- App State ---
let map;
let activeCategory = "all";
let searchQuery = "";
let selectedShopId = null;
let activeTrail = null;
let markersMap = {};
let routePolyline = null;

// --- Helper Functions ---
function getCategoryIcon(category) {
    switch (category) {
        case "staple": return "fa-solid fa-bowl-rice";
        case "snack": return "fa-solid fa-fish";
        case "dessert": return "fa-solid fa-cookie-bite";
        case "hidden": return "fa-solid fa-bowl-food";
        default: return "fa-solid fa-utensils";
    }
}

// --- Initialize Theme & Font Size Controls ---
function initTheme() {
    const themeBtn = document.getElementById("btn-toggle-theme");
    const themeIcon = document.getElementById("theme-icon");
    
    // Check local storage or media query
    const savedTheme = localStorage.getItem("gourmet-theme") || 
                       (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeUI(savedTheme);

    themeBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("gourmet-theme", newTheme);
        updateThemeUI(newTheme);
        
        // Leaflet layer switch (CartoDB Positron vs CartoDB Dark Matter)
        if (map) {
            updateMapTiles(newTheme);
        }
    });
}

function updateThemeUI(theme) {
    const themeIcon = document.getElementById("theme-icon");
    if (theme === "dark") {
        themeIcon.className = "fa-solid fa-sun";
    } else {
        themeIcon.className = "fa-solid fa-moon";
    }
}

let mapTileLayer = null;
function updateMapTiles(theme) {
    if (mapTileLayer) {
        map.removeLayer(mapTileLayer);
    }
    
    let tileUrl;
    let attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
    
    if (theme === "dark") {
        tileUrl = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
    } else {
        tileUrl = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
    }
    
    mapTileLayer = L.tileLayer(tileUrl, {
        attribution: attribution,
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);
}

function initFontResizer() {
    const btnDec = document.getElementById("btn-font-decrease");
    const btnNor = document.getElementById("btn-font-normal");
    const btnInc = document.getElementById("btn-font-increase");
    const root = document.documentElement;

    btnDec.addEventListener("click", () => {
        root.className = "font-size-small";
        updateFontResizerUI(btnDec);
    });

    btnNor.addEventListener("click", () => {
        root.className = "";
        updateFontResizerUI(btnNor);
    });

    btnInc.addEventListener("click", () => {
        root.className = "font-size-large";
        updateFontResizerUI(btnInc);
    });
}

function updateFontResizerUI(activeBtn) {
    const btns = [
        document.getElementById("btn-font-decrease"),
        document.getElementById("btn-font-normal"),
        document.getElementById("btn-font-increase")
    ];
    btns.forEach(btn => btn.classList.remove("active"));
    activeBtn.classList.add("active");
}

// --- Leaflet Map Setup ---
function initMap() {
    // Center map to cover Dadaocheng down to Taipei City South Gate area
    map = L.map('map', {
        zoomControl: false,
        attributionControl: false
    }).setView([25.048, 121.512], 14);
    
    // Add default zoom control at bottom right
    L.control.zoom({
        position: 'bottomright'
    }).addTo(map);
    
    // Scale control
    L.control.scale({
        imperial: false,
        position: 'bottomleft'
    }).addTo(map);

    const theme = document.documentElement.getAttribute("data-theme");
    updateMapTiles(theme);
}

// --- Render Left-side Shop Cards ---
function renderCards(filteredShops) {
    const container = document.getElementById("food-cards-list");
    container.innerHTML = "";
    
    if (filteredShops.length === 0) {
        container.innerHTML = `
            <div style="padding: 40px 0; text-align: center; color: var(--text-muted);">
                <i class="fa-solid fa-utensils" style="font-size: 32px; margin-bottom: 12px; opacity: 0.5;"></i>
                <p>找不到符合條件的店家</p>
                <p style="font-size: 12px; margin-top: 4px;">請換個關鍵字或分類試試</p>
            </div>
        `;
        return;
    }

    filteredShops.forEach(shop => {
        const isSelected = selectedShopId === shop.id;
        const card = document.createElement("div");
        card.className = `food-card category-${shop.category} ${isSelected ? 'selected' : ''}`;
        card.id = `card-${shop.id}`;
        card.setAttribute("role", "listitem");
        card.setAttribute("tabindex", "0");
        
        card.innerHTML = `
            <div class="card-header">
                <div class="card-title-group">
                    <h2 class="card-title">
                        ${shop.name}
                        <span class="badge-tag">${shop.tag}</span>
                    </h2>
                    <span class="card-alias">${shop.alias}</span>
                </div>
                <span class="badge-category ${shop.category}">${shop.categoryName}</span>
            </div>
            
            <p class="card-desc">${shop.desc}</p>
            
            <div class="card-highlight">
                <i class="fa-solid fa-heart"></i>
                <span>招牌美食：${shop.signature}</span>
            </div>
            
            <div class="card-footer">
                <span class="card-address">
                    <i class="fa-solid fa-location-dot"></i>
                    ${shop.address}
                </span>
                <span class="card-video-time">
                    <i class="fa-solid fa-circle-play"></i>
                    影片 ${shop.videoTime}
                </span>
            </div>
        `;
        
        // Listeners for Card Click
        card.addEventListener("click", () => {
            selectShop(shop.id, true);
        });
        
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                selectShop(shop.id, true);
            }
        });
        
        container.appendChild(card);
    });
}

// --- Draw Markers on the Map ---
function placeMarkers() {
    // Clear old markers if any
    Object.values(markersMap).forEach(marker => map.removeLayer(marker));
    markersMap = {};

    shopsData.forEach(shop => {
        // Create custom div icon
        const iconHtml = `
            <div class="marker-pin-wrapper" id="marker-wrapper-${shop.id}">
                <div class="marker-pin">
                    <div class="marker-pin-inner">
                        <i class="${getCategoryIcon(shop.category)}"></i>
                    </div>
                </div>
            </div>
        `;
        
        const customIcon = L.divIcon({
            className: `custom-div-icon marker-${shop.category}`,
            html: iconHtml,
            iconSize: [30, 42],
            iconAnchor: [15, 42],
            popupAnchor: [0, -36]
        });

        const popupHtml = `
            <div class="popup-container">
                <div class="popup-header">
                    <h4 class="popup-title">${shop.name}</h4>
                    <span class="popup-category ${shop.category}">${shop.categoryName}</span>
                </div>
                <div class="popup-dish">
                    <i class="fa-solid fa-star"></i> ${shop.signature.split('、')[0]}
                </div>
                <p class="popup-body">${shop.desc.substring(0, 48)}...</p>
                <div class="popup-footer">
                    <span>${shop.address.split(' ')[0]}</span>
                    <span class="popup-time"><i class="fa-solid fa-play"></i> ${shop.videoTime.split(' ')[0]}</span>
                </div>
            </div>
        `;

        const marker = L.marker([shop.lat, shop.lng], { icon: customIcon })
            .bindPopup(popupHtml, { closeButton: false })
            .addTo(map);

        markersMap[shop.id] = marker;

        // Sync map marker click back to list
        marker.on("click", () => {
            selectShop(shop.id, false);
        });
    });
}

// --- Core Shop Selection logic (Sync List & Map) ---
function selectShop(shopId, panTo = true) {
    if (selectedShopId === shopId && panTo) {
        // If already selected, just center it
        const shop = shopsData.find(s => s.id === shopId);
        if (shop) map.setView([shop.lat, shop.lng], 18);
        return;
    }
    
    // Remove active state from previous selection
    if (selectedShopId) {
        const prevCard = document.getElementById(`card-${selectedShopId}`);
        if (prevCard) prevCard.classList.remove("selected");
        
        const prevWrapper = document.getElementById(`marker-wrapper-${selectedShopId}`);
        if (prevWrapper) prevWrapper.classList.remove("active");
    }

    selectedShopId = shopId;
    const shop = shopsData.find(s => s.id === shopId);
    
    if (!shop) return;

    // Highlight card
    const card = document.getElementById(`card-${shopId}`);
    if (card) {
        card.classList.add("selected");
        // Scroll card into view inside the container
        card.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    // Highlight map marker pin
    const wrapper = document.getElementById(`marker-wrapper-${shopId}`);
    if (wrapper) wrapper.classList.add("active");

    const marker = markersMap[shopId];
    if (marker) {
        if (panTo) {
            map.setView([shop.lat, shop.lng], 18);
            // Wait for map pan animation to finish before opening popup
            setTimeout(() => {
                marker.openPopup();
            }, 300);
        } else {
            marker.openPopup();
        }
    }

    // Switch tabs on Mobile automatically when selecting from list
    const isMobile = window.innerWidth <= 768;
    if (isMobile && panTo) {
        showMobileView("map");
    }
}

// --- Filter & Search Operations ---
function applyFilters() {
    let filtered = shopsData;

    // 1. Category Filter
    if (activeCategory !== "all") {
        filtered = filtered.filter(s => s.category === activeCategory);
    }

    // 2. Search Keyword
    if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(s => 
            s.name.toLowerCase().includes(query) ||
            s.desc.toLowerCase().includes(query) ||
            s.signature.toLowerCase().includes(query) ||
            s.alias.toLowerCase().includes(query) ||
            s.address.toLowerCase().includes(query)
        );
    }

    // Update Shop Count
    document.getElementById("shop-count").innerText = `顯示 ${filtered.length} 家店`;
    
    // Show/Hide Reset Button
    const showReset = activeCategory !== "all" || searchQuery.trim() !== "";
    document.getElementById("btn-reset-filters").style.display = showReset ? "block" : "none";

    // Re-render
    renderCards(filtered);
    updateVisibleMapMarkers(filtered);
    
    // Clear route if active filters filter out route shops
    if (activeTrail) {
        clearActiveTrail();
    }
}

// Dynamically filter map markers based on active sidebar selections
function updateVisibleMapMarkers(visibleShops) {
    const visibleIds = visibleShops.map(s => s.id);
    
    shopsData.forEach(shop => {
        const marker = markersMap[shop.id];
        if (marker) {
            if (visibleIds.includes(shop.id)) {
                if (!map.hasLayer(marker)) {
                    marker.addTo(map);
                }
            } else {
                if (map.hasLayer(marker)) {
                    map.removeLayer(marker);
                }
            }
        }
    });
}

function initSearchAndFilters() {
    const searchInput = document.getElementById("search-input");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const btnReset = document.getElementById("btn-reset-filters");

    // Input Search Event
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        applyFilters();
    });

    // Category Button Clicks
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeCategory = btn.getAttribute("data-category");
            applyFilters();
        });
    });

    // Reset Filters button
    btnReset.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        activeCategory = "all";
        
        filterButtons.forEach(b => b.classList.remove("active"));
        document.getElementById("filter-all").classList.add("active");
        
        applyFilters();
    });
}

// --- Gourmet Trail Routing Logic ---
function initGourmetTrails() {
    const trailButtons = document.querySelectorAll(".trail-btn");
    
    trailButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const trailId = btn.getAttribute("data-trail");
            
            if (activeTrail === trailId) {
                // Click same trail to toggle off
                clearActiveTrail();
            } else {
                // Highlight trail button
                trailButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                
                // Draw route on map
                drawTrailRoute(trailId);
            }
        });
    });

    document.getElementById("btn-clear-trail").addEventListener("click", () => {
        clearActiveTrail();
    });
}

function drawTrailRoute(trailId) {
    // 1. Remove previous route
    if (routePolyline) {
        map.removeLayer(routePolyline);
        routePolyline = null;
    }

    activeTrail = trailId;
    const trail = trailsData[trailId];
    if (!trail) return;

    // Reset standard filters so all route shops are guaranteed to be shown
    document.getElementById("search-input").value = "";
    searchQuery = "";
    activeCategory = "all";
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    document.getElementById("filter-all").classList.add("active");
    applyFilters();

    // 2. Fetch coordinates of shops in sequence
    const routeCoords = [];
    const trailStepsContainer = document.getElementById("trail-steps-display");
    trailStepsContainer.innerHTML = "";

    trail.shops.forEach((shopId, index) => {
        const shop = shopsData.find(s => s.id === shopId);
        if (shop) {
            routeCoords.push([shop.lat, shop.lng]);
            
            // Build sidebar routing instructions
            const step = document.createElement("div");
            step.className = "trail-step";
            step.innerHTML = `<span class="step-idx">${index + 1}</span> ${shop.name}`;
            
            step.addEventListener("click", () => {
                selectShop(shop.id, true);
            });
            trailStepsContainer.appendChild(step);
        }
    });

    // 3. Draw dashed Polyline
    routePolyline = L.polyline(routeCoords, {
        color: 'var(--primary)',
        weight: 4,
        opacity: 0.8,
        dashArray: '8, 8',
        lineCap: 'round',
        lineJoin: 'round'
    }).addTo(map);

    // 4. Zoom to fit the entire route bounds
    map.fitBounds(routePolyline.getBounds(), { padding: [50, 50] });

    // 5. Update sidebar trail info card
    document.getElementById("trail-name-display").innerText = trail.name;
    document.getElementById("trail-desc-display").innerText = trail.desc;
    document.getElementById("trail-info-card").style.display = "block";
}

function clearActiveTrail() {
    if (routePolyline) {
        map.removeLayer(routePolyline);
        routePolyline = null;
    }
    
    activeTrail = null;
    document.querySelectorAll(".trail-btn").forEach(b => b.classList.remove("active"));
    document.getElementById("trail-info-card").style.display = "none";
    
    // Zoom map out to encompass all markers (Dadaocheng down to South Gate)
    map.setView([25.048, 121.512], 14);
}

// --- Mobile Navigation Responsive Layout ---
function showMobileView(view) {
    const sidebar = document.getElementById("sidebar-panel");
    const btnList = document.getElementById("btn-show-list");
    const btnMap = document.getElementById("btn-show-map");

    if (view === "list") {
        sidebar.classList.remove("hide-mobile");
        btnList.classList.add("active");
        btnMap.classList.remove("active");
    } else {
        sidebar.classList.add("hide-mobile");
        btnList.classList.remove("active");
        btnMap.classList.add("active");
        
        // In Leaflet, if container changes visibility/size, we must invalidateSize
        setTimeout(() => {
            map.invalidateSize();
        }, 100);
    }
}

function initMobileNav() {
    const btnList = document.getElementById("btn-show-list");
    const btnMap = document.getElementById("btn-show-map");

    btnList.addEventListener("click", () => showMobileView("list"));
    btnMap.addEventListener("click", () => showMobileView("map"));
    
    // Default to show list first on mobile
    if (window.innerWidth <= 768) {
        showMobileView("list");
    }
}

// --- Main Entrance ---
window.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initFontResizer();
    initMap();
    placeMarkers();
    
    // Default Cards & Map Bindings
    renderCards(shopsData);
    initSearchAndFilters();
    initGourmetTrails();
    initMobileNav();
    
    // Let Leaflet check container dimensions
    setTimeout(() => {
        map.invalidateSize();
    }, 200);
});
