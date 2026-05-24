// --- Dongmen Market Food Map Core Data ---

const shopsData = [
    {
        id: "red-pork-soup",
        name: "東門赤肉羹",
        alias: "影片音譯：吃肉根",
        category: "staple",
        categoryName: "經典主食",
        tag: "在地經營超過30年",
        signature: "赤肉羹、滷肉飯",
        desc: "招牌赤肉羹使用整塊厚實的豬大腿肉手工製作，口感極具咬勁與彈性。柴魚提味的湯頭甘甜鮮美；此外，淋上濃郁手切滷汁的古早味滷肉飯也深受在地居民喜愛。",
        videoTime: "01:05 - 02:10",
        address: "台北市中正區臨沂街56-2號",
        lat: 25.03463,
        lng: 121.52862
    },
    {
        id: "lilong-bakery",
        name: "利隆餅店",
        alias: "影片音譯：利容餅店",
        category: "snack",
        categoryName: "點心餅類",
        tag: "傳承三代排隊名店",
        signature: "蘿蔔絲餅、豬肉餡餅、高麗菜餅",
        desc: "傳承至第三代、經營30多年的中正老字號。現場手工擀皮烤製，皮薄內餡爆汁。高麗菜餅做法類似韭菜盒且包入大量冬粉，豬肉與牛肉餅香濃多汁，是下午茶點心首選。",
        videoTime: "02:15 - 03:15",
        address: "台北市中正區信義路二段81號 (巷內)",
        lat: 25.03433,
        lng: 121.52885
    },
    {
        id: "luomama-noodles",
        name: "羅媽媽米粉湯",
        alias: "影片音譯：羅媽媽米粉湯",
        category: "staple",
        categoryName: "經典主食",
        tag: "營業50多年客家老店",
        signature: "客家米粉湯、黑白切生腸、大腸",
        desc: "經營逾半世紀的傳統客家味。粗米粉久煮不爛，大骨湯頭熬煮得極為濃郁且甜腴。裴社長與老闆強烈推薦搭配大腸沾醋薑絲，或是口感爽脆乾淨的生腸。",
        videoTime: "03:20 - 04:10",
        address: "台北市中正區信義路二段81號 (東門市場18號攤位)",
        lat: 25.03444,
        lng: 121.52899
    },
    {
        id: "dongmen-rice",
        name: "東門城滷肉飯",
        alias: "影片音譯：東門城滷肉飯",
        category: "staple",
        categoryName: "經典主食",
        tag: "一甲子三代傳承老店",
        signature: "老滷滷肉飯、Q彈豬皮",
        desc: "傳承三代超過60年的市場代表店。其滷肉飯堅持使用老滷熬煮，純手工切肉，完全不加五香粉或中藥包，醬香深郁且入味。富含膠質、Q彈有嚼勁的滷豬皮是老饕必點。",
        videoTime: "04:15 - 05:05",
        address: "台北市中正區信義路二段87-1號 (東門市場內)",
        lat: 25.03452,
        lng: 121.52908
    },
    {
        id: "jiang-tofu",
        name: "江記東門豆花",
        alias: "影片音譯：江東門豆花",
        category: "dessert",
        categoryName: "甜品湯圓",
        tag: "傳承五十年古早風味",
        signature: "手作花生豆花、薑糖糖水",
        desc: "極受歡迎的傳統點心，特色是冰豆花搭配手工慢火熬煮的鬆軟飽滿大花生。搭配帶有古法黑糖與微辣薑糖香氣的獨門糖水，口感綿密細緻，入口即化。",
        videoTime: "05:10 - 06:05",
        address: "台北市中正區金山南路一段142巷5號",
        lat: 25.03498,
        lng: 121.52950
    },
    {
        id: "xingji-dumpling",
        name: "東門興記",
        alias: "影片音譯：東門星際",
        category: "snack",
        categoryName: "點心餅類",
        tag: "影星林青霞最愛水餃",
        signature: "手工高麗菜水餃、菜肉包、春捲",
        desc: "原為港式點心起家，現以手工冷凍水餃及熟食包子聞名全台。林青霞回台必打包。菜肉包料多扎實，即使放涼後肥肉丁依然晶瑩如白玉；素高麗菜水餃爽脆甜美，亦是極品。",
        videoTime: "06:10 - 07:05",
        address: "台北市中正區金山南路一段120號",
        lat: 25.03464,
        lng: 121.52959
    },
    {
        id: "fujiu-tangyuan",
        name: "富久湯圓大王",
        alias: "影片音譯：副酒湯圓",
        category: "dessert",
        categoryName: "甜品湯圓",
        tag: "爆汁鮮肉湯圓",
        signature: "鮮肉湯圓、海鮮小菜、椒麻麵",
        desc: "招牌為外皮如白玉般滑嫩、咬下會爆出香濃肉汁的鮮肉湯圓。由於第一代老闆是基隆人，結合海鮮絕活，店內同步販售生魚片等級的限量海鮮小菜與特製香辣椒麻麵。",
        videoTime: "07:10 - 08:05",
        address: "台北市中正區臨沂街84巷7號",
        lat: 25.03362,
        lng: 121.52800
    },
    {
        id: "mashu-pastry",
        name: "清真馬叔餅舖",
        alias: "影片音譯：馬薯餅布",
        category: "snack",
        categoryName: "點心餅類",
        tag: "幾十年堅持清晨手工現做",
        signature: "芝麻醬燒餅夾牛肉、桂花酸梅湯",
        desc: "老字號清真館。每天凌晨四點手工製作千層芝麻醬燒餅，餅皮外脆內軟、夾入冷醬牛肉，層次感極豐富。配上一碗店內特熬帶有淡淡花香的桂花酸梅湯，極為享受。",
        videoTime: "08:10 - 09:05",
        address: "台北市中正區臨沂街67-2號",
        lat: 25.03459,
        lng: 121.52843
    },
    {
        id: "secret-roast",
        name: "東門御園坊",
        alias: "影片未公開店名，實為東門御園坊",
        category: "hidden",
        categoryName: "隱藏燒臘",
        tag: "排隊名店 / 蘋果日報評比冠軍",
        signature: "廣式油蔥配燒鴨、脆皮燒肉、手工水餃",
        desc: "曾獲選蘋果日報年菜評比冠軍的手工水餃名店。其熟食部特製的廣式油蔥醬搭配鮮嫩多汁的燒鴨是裴社長極力推薦的私房美味，連台北市長也是這家脆皮燒肉的忠實常客。",
        videoTime: "09:08 - 09:28",
        address: "台北市中正區信義路二段79巷13號",
        lat: 25.03471,
        lng: 121.52887
    },
    {
        id: "secret-crispy",
        name: "隱藏版脆皮燒肉小店",
        alias: "每日限量秒殺傳奇",
        category: "hidden",
        categoryName: "隱藏燒臘",
        tag: "凌晨4點起火烤製4小時",
        signature: "限量脆皮燒肉 (9:30出爐)",
        desc: "東門市場內的秒殺級熟食攤。老闆每天清晨四點開爐烤製，堅持四個小時的慢火細烤，只為了烤出肥瘦黃金比例、金黃酥脆的皮與軟嫩肉質。早上09:30準時出爐，通常半小時內即被搶購一空。",
        videoTime: "09:30 - 10:00",
        address: "台北市中正區信義路二段 (東門市場內排隊熟食攤)",
        lat: 25.03473,
        lng: 121.52912
    },
    {
        id: "xinyuan-halal",
        name: "信遠齋",
        alias: "影片音譯：信遠災",
        category: "hidden",
        categoryName: "隱藏燒臘",
        tag: "外省風味老字號滷味",
        signature: "煙燻雞腿、鴨蛋、素雞、里肌肉",
        desc: "雖與市場主核心區有段小距離，但仍屬東門商圈。承襲老北京滷味手藝，其滷汁中藥香回甘。煙燻雞腿香氣入鼻、鴨蛋與素雞滷至骨子裡，完全不需搭配任何沾醬便已極具風味。",
        videoTime: "10:05 - 11:00",
        address: "台北市大安區新生南路一段165巷18號",
        lat: 25.03328,
        lng: 121.53325
    }
];

const trailsData = {
    "trail-classic": {
        name: "經典老饕必吃路線",
        desc: "最在地的東門市場老派風味組合！先以扎實有嚼勁的赤肉羹開胃，再品嚐客家風味米粉湯與古法滷肉飯，最後來碗手作花生豆花，甜鹹完美收尾。",
        shops: ["red-pork-soup", "luomama-noodles", "dongmen-rice", "jiang-tofu"]
    },
    "trail-takeaway": {
        name: "排隊必買伴手禮線",
        desc: "買好買滿！外帶現烤金黃多汁的利隆餡餅，以及芝麻醬燒餅，再打包林青霞最愛的興記水餃與信遠齋煙燻滷味帶回家，與家人一同享用最地道的美味。",
        shops: ["lilong-bakery", "mashu-pastry", "xingji-dumpling", "xinyuan-halal"]
    },
    "trail-hidden": {
        name: "市場隱藏美食線",
        desc: "老饕專屬的隱藏玩法！早上9:30準時搶購限量脆皮燒肉，配上「東門御園坊」特製的油蔥燒鴨，最後品嚐外皮Q彈爆漿的鮮肉湯圓與椒麻麵，滿足感爆棚！",
        shops: ["secret-crispy", "secret-roast", "fujiu-tangyuan"]
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
        case "snack": return "fa-solid fa-cookie";
        case "dessert": return "fa-solid fa-ice-cream";
        case "hidden": return "fa-solid fa-user-secret";
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
    // Center map around Dongmen Market
    map = L.map('map', {
        zoomControl: false,
        attributionControl: false
    }).setView([25.0345, 121.5293], 17);
    
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
    
    // Zoom map out to encompass all markers
    map.setView([25.0345, 121.5293], 17);
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
