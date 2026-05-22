// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. 團隊數據 Chart.js 繪製
    // ==========================================
    const ctx = document.getElementById("teamStatsChart").getContext("2d");
    
    // 設定 Chart.js 全域字體為 Outfit
    Chart.defaults.font.family = "'Outfit', sans-serif";
    Chart.defaults.font.size = 13;
    Chart.defaults.color = "#9ca3af";

    const teamChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['進攻效率', '防守效率', '三分外線', '禁區阻攻', '板凳深度', '失誤控制'],
            datasets: [
                {
                    label: '聖安東尼奧馬刺 (SAS)',
                    data: [75, 88, 70, 98, 72, 60],
                    backgroundColor: 'rgba(0, 229, 255, 0.15)',
                    borderColor: '#00e5ff',
                    borderWidth: 2,
                    pointBackgroundColor: '#00e5ff',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#00e5ff'
                },
                {
                    label: '奧克拉荷馬雷霆 (OKC)',
                    data: [95, 87, 92, 80, 88, 90],
                    backgroundColor: 'rgba(255, 109, 0, 0.15)',
                    borderColor: '#ff6d00',
                    borderWidth: 2,
                    pointBackgroundColor: '#ff6d00',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#ff6d00'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#f3f4f6',
                        font: {
                            weight: '600'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(7, 8, 13, 0.95)',
                    titleColor: '#fff',
                    bodyColor: '#e5e7eb',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1
                }
            },
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(255, 255, 255, 0.08)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.08)'
                    },
                    pointLabels: {
                        color: '#f3f4f6',
                        font: {
                            size: 13,
                            weight: '600'
                        }
                    },
                    ticks: {
                        backdropColor: 'transparent',
                        color: '#6b7280',
                        beginAtZero: true,
                        max: 100,
                        stepSize: 20
                    }
                }
            }
        }
    });

    // ==========================================
    // 2. 球星 H2H 對決切換
    // ==========================================
    const playerData = {
        "wemby-chet": {
            left: {
                name: "維克托·溫班亞馬",
                no: "#1",
                pos: "中鋒 (C) / 前鋒 (F)",
                imgText: "WEMBY",
                gradient: "linear-gradient(135deg, #1f2124, #00e5ff)"
            },
            right: {
                name: "切特·霍姆葛倫",
                no: "#7",
                pos: "中鋒 (C) / 前鋒 (F)",
                imgText: "CHET",
                gradient: "linear-gradient(135deg, #002244, #ff6d00)"
            },
            stats: [
                { label: "得分 (PTS)", leftVal: "25.0", rightVal: "17.1", leftPct: 59, rightPct: 41 },
                { label: "籃板 (REB)", leftVal: "11.5", rightVal: "8.9", leftPct: 56, rightPct: 44 },
                { label: "助攻 (AST)", leftVal: "3.1", rightVal: "1.7", leftPct: 65, rightPct: 35 },
                { label: "阻攻 (BLK)", leftVal: "3.8", rightVal: "1.9", leftPct: 67, rightPct: 33 },
                { label: "投籃命中率 (FG%)", leftVal: "48.0%", rightVal: "55.8%", leftPct: 46, rightPct: 54 }
            ]
        },
        "fox-sga": {
            left: {
                name: "達龍·福克斯",
                no: "#5",
                pos: "控球後衛 (PG)",
                imgText: "FOX",
                gradient: "linear-gradient(135deg, #1f2124, #00e5ff)"
            },
            right: {
                name: "謝伊·吉爾傑斯-亞歷山大",
                no: "#2",
                pos: "控球後衛 (PG)",
                imgText: "SGA",
                gradient: "linear-gradient(135deg, #002244, #ff6d00)"
            },
            stats: [
                { label: "得分 (PTS)", leftVal: "18.6", rightVal: "31.1", leftPct: 37, rightPct: 63 },
                { label: "籃板 (REB)", leftVal: "3.8", rightVal: "4.3", leftPct: 47, rightPct: 53 },
                { label: "助攻 (AST)", leftVal: "6.2", rightVal: "6.6", leftPct: 48, rightPct: 52 },
                { label: "抄截 (STL)", leftVal: "1.8", rightVal: "1.4", leftPct: 56, rightPct: 44 },
                { label: "投籃命中率 (FG%)", leftVal: "48.6%", rightVal: "55.3%", leftPct: 47, rightPct: 53 }
            ]
        },
        "vassell-jDub": {
            left: {
                name: "德文·瓦塞爾",
                no: "#24",
                pos: "得分後衛 (SG)",
                imgText: "VASSELL",
                gradient: "linear-gradient(135deg, #1f2124, #00e5ff)"
            },
            right: {
                name: "傑倫·威廉斯",
                no: "#8",
                pos: "小前鋒 (SF) / 後衛 (G)",
                imgText: "J-DUB",
                gradient: "linear-gradient(135deg, #002244, #ff6d00)"
            },
            stats: [
                { label: "得分 (PTS)", leftVal: "13.9", rightVal: "17.1", leftPct: 45, rightPct: 55 },
                { label: "籃板 (REB)", leftVal: "3.8", rightVal: "4.6", leftPct: 45, rightPct: 55 },
                { label: "助攻 (AST)", leftVal: "3.5", rightVal: "5.5", leftPct: 39, rightPct: 61 },
                { label: "三分命中率 (3P%)", leftVal: "38.4%", rightVal: "41.5%", leftPct: 48, rightPct: 52 },
                { label: "抄截 (STL)", leftVal: "1.1", rightVal: "1.1", leftPct: 50, rightPct: 50 }
            ]
        }
    };

    const h2hTabs = document.querySelectorAll(".h2h-tab");
    
    h2hTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // 移除其他 tab 的 active class
            h2hTabs.forEach(t => t.classList.remove("active"));
            // 新增當前 tab 的 active class
            tab.classList.add("active");
            
            const matchupKey = tab.getAttribute("data-matchup");
            updateH2HPanel(matchupKey);
        });
    });

    function updateH2HPanel(key) {
        const data = playerData[key];
        if (!data) return;

        // 更新左球星 (馬刺)
        const leftImg = document.getElementById("left-player-img");
        leftImg.innerText = data.left.imgText;
        leftImg.style.background = data.left.gradient;
        document.getElementById("left-player-no").innerText = data.left.no;
        document.getElementById("left-player-name").innerText = data.left.name;
        document.getElementById("left-player-pos").innerText = data.left.pos;

        // 更新右球星 (雷霆)
        const rightImg = document.getElementById("right-player-img");
        rightImg.innerText = data.right.imgText;
        rightImg.style.background = data.right.gradient;
        document.getElementById("right-player-no").innerText = data.right.no;
        document.getElementById("right-player-name").innerText = data.right.name;
        document.getElementById("right-player-pos").innerText = data.right.pos;

        // 更新 5 個數據比較條
        for (let i = 0; i < 5; i++) {
            const stat = data.stats[i];
            const index = i + 1;
            
            document.getElementById(`val-left-${index}`).innerText = stat.leftVal;
            document.getElementById(`bar-lbl-${index}`).innerText = stat.label;
            document.getElementById(`val-right-${index}`).innerText = stat.rightVal;
            
            const leftFill = document.getElementById(`fill-left-${index}`);
            const rightFill = document.getElementById(`fill-right-${index}`);
            
            // 使用 setTimeout 讓數據條變更時能產生平滑的伸縮動畫
            leftFill.style.width = '0%';
            rightFill.style.width = '0%';
            
            setTimeout(() => {
                leftFill.style.width = `${stat.leftPct}%`;
                rightFill.style.width = `${stat.rightPct}%`;
            }, 50);
        }
    }


    // ==========================================
    // 3. 戰力模擬器邏輯
    // ==========================================
    const sliders = {
        spursOff: document.getElementById("slider-spurs-off"),
        spursDef: document.getElementById("slider-spurs-def"),
        spursStar: document.getElementById("slider-spurs-star"),
        spursBench: document.getElementById("slider-spurs-bench"),
        
        thunderOff: document.getElementById("slider-thunder-off"),
        thunderDef: document.getElementById("slider-thunder-def"),
        thunderStar: document.getElementById("slider-thunder-star"),
        thunderBench: document.getElementById("slider-thunder-bench")
    };

    const sliderLabels = {
        spursOff: document.getElementById("spurs-off-val"),
        spursDef: document.getElementById("spurs-def-val"),
        spursStar: document.getElementById("spurs-star-val"),
        spursBench: document.getElementById("spurs-bench-val"),
        
        thunderOff: document.getElementById("thunder-off-val"),
        thunderDef: document.getElementById("thunder-def-val"),
        thunderStar: document.getElementById("thunder-star-val"),
        thunderBench: document.getElementById("thunder-bench-val")
    };

    // 綁定滑桿數值即時更新
    Object.keys(sliders).forEach(key => {
        if (sliders[key] && sliderLabels[key]) {
            sliders[key].addEventListener("input", (e) => {
                sliderLabels[key].innerText = e.target.value;
                
                // 動態連動團隊數據圖表 (Radar Chart) 的數據變化
                updateChartFromSliders();
            });
        }
    });

    function updateChartFromSliders() {
        // 將滑桿數據同步到雷達圖中
        // 馬刺：進攻效率, 防守效率, 三分外線, 禁區阻攻, 板凳深度, 失誤控制
        // 使用滑桿值做映射：
        const sOff = parseInt(sliders.spursOff.value);
        const sDef = parseInt(sliders.spursDef.value);
        const sStar = parseInt(sliders.spursStar.value);
        const sBench = parseInt(sliders.spursBench.value);
        
        const tOff = parseInt(sliders.thunderOff.value);
        const tDef = parseInt(sliders.thunderDef.value);
        const tStar = parseInt(sliders.thunderStar.value);
        const tBench = parseInt(sliders.thunderBench.value);

        // 馬刺數據映射
        teamChart.data.datasets[0].data[0] = Math.round(sOff); // 進攻
        teamChart.data.datasets[0].data[1] = Math.round(sDef); // 防守
        teamChart.data.datasets[0].data[2] = Math.round((sOff * 0.7 + sBench * 0.3)); // 三分
        teamChart.data.datasets[0].data[3] = Math.round(sStar); // 阻攻
        teamChart.data.datasets[0].data[4] = Math.round(sBench); // 板凳
        teamChart.data.datasets[0].data[5] = Math.round((sDef * 0.4 + sBench * 0.6)); // 失誤

        // 雷霆數據映射
        teamChart.data.datasets[1].data[0] = Math.round(tOff);
        teamChart.data.datasets[1].data[1] = Math.round(tDef);
        teamChart.data.datasets[1].data[2] = Math.round((tOff * 0.8 + tStar * 0.2));
        teamChart.data.datasets[1].data[3] = Math.round(tDef * 0.9);
        teamChart.data.datasets[1].data[4] = Math.round(tBench);
        teamChart.data.datasets[1].data[5] = Math.round((tOff * 0.5 + tBench * 0.5));

        teamChart.update();
    }

    const simBtn = document.getElementById("run-simulation-btn");
    const spursScoreEl = document.getElementById("score-spurs");
    const thunderScoreEl = document.getElementById("score-thunder");
    const resultTextEl = document.getElementById("sim-result-text");
    const gameLogEl = document.getElementById("sim-game-log-text");
    const statusTitleEl = document.getElementById("sim-status-title");
    const startScoreSelect = document.getElementById("sim-start-score");

    // 監聽起點比分下拉選單，改變時即時更新畫面上計分板
    if (startScoreSelect) {
        startScoreSelect.addEventListener("change", () => {
            const [initSpurs, initThunder] = startScoreSelect.value.split("-").map(Number);
            spursScoreEl.innerText = initSpurs;
            thunderScoreEl.innerText = initThunder;
            statusTitleEl.innerText = `設定起點為 ${initSpurs} : ${initThunder}，準備開始模擬`;
            resultTextEl.classList.remove("visible");
            gameLogEl.innerHTML = "";
        });
    }

    simBtn.addEventListener("click", () => {
        runPlayoffSimulation();
    });

    function runPlayoffSimulation() {
        // 按鈕禁用防連點
        simBtn.disabled = true;
        simBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin" style="margin-right: 8px;"></i>正在分析戰術與模擬比賽...`;
        
        resultTextEl.classList.remove("visible");
        gameLogEl.innerHTML = "";
        
        // 讀取系列賽起點比分
        let initialSpurs = 1;
        let initialThunder = 1;
        if (startScoreSelect) {
            const parts = startScoreSelect.value.split("-").map(Number);
            initialSpurs = parts[0];
            initialThunder = parts[1];
        }

        // 取得兩隊戰力平均值
        const sOff = parseInt(sliders.spursOff.value);
        const sDef = parseInt(sliders.spursDef.value);
        const sStar = parseInt(sliders.spursStar.value);
        const sBench = parseInt(sliders.spursBench.value);
        
        const tOff = parseInt(sliders.thunderOff.value);
        const tDef = parseInt(sliders.thunderDef.value);
        const tStar = parseInt(sliders.thunderStar.value);
        const tBench = parseInt(sliders.thunderBench.value);

        const spursOverall = (sOff + sDef + sStar + sBench) / 4;
        const thunderOverall = (tOff + tDef + tStar + tBench) / 4;

        // 計算單場勝率 (雷霆有常規賽霸主與季後賽主場優勢，基礎高於馬刺一些)
        // 基礎：雷霆 56% 勝率，馬刺 44% 勝率。戰力差影響勝率，每 1 點差距影響 0.8%
        const spursWinProb = 0.44 + (spursOverall - thunderOverall) * 0.008;
        const clampedSpursProb = Math.min(Math.max(spursWinProb, 0.12), 0.88);

        let spursWins = initialSpurs;
        let thunderWins = initialThunder;
        let gameResults = [];
        let curGame = (initialSpurs + initialThunder) + 1; // 從下一場開始算起，例如 1-1 時從 Game 3 開始

        // 模擬七戰四勝制
        while (spursWins < 4 && thunderWins < 4) {
            // 計算隨機分
            const spursBaseScore = 102 + (sOff - 75) * 0.4 + (Math.random() * 15 - 7.5);
            const thunderBaseScore = 108 + (tOff - 75) * 0.4 + (Math.random() * 15 - 7.5);
            
            // 防守扣減分
            const spursFinalScore = Math.round(spursBaseScore - (tDef - 75) * 0.25);
            const thunderFinalScore = Math.round(thunderBaseScore - (sDef - 75) * 0.25);
            
            let spursWin = false;
            if (Math.random() < clampedSpursProb) {
                // 馬刺贏球
                spursWin = true;
                spursWins++;
            } else {
                thunderWins++;
            }

            // 確保勝敗分數逻辑合理
            let finalSpurs = spursFinalScore;
            let finalThunder = thunderFinalScore;
            if (spursWin && finalSpurs <= finalThunder) {
                finalSpurs = finalThunder + Math.round(Math.random() * 8 + 1);
            } else if (!spursWin && finalThunder <= finalSpurs) {
                finalThunder = finalSpurs + Math.round(Math.random() * 8 + 1);
            }

            // 隨機關鍵球員與攻守高光描述
            const scorers = spursWin 
                ? [`Wembanyama 砍下 ${Math.round(25 + Math.random() * 15)} 分`, `De'Aaron Fox 帶傷復出轟下關鍵球`, `Vassell 關鍵三分點火`] 
                : [`SGA 狂轟 ${Math.round(30 + Math.random() * 12)} 分`, `J-Dub 快攻扣籃引爆全場`];

            gameResults.push({
                gameNum: curGame,
                spursScore: finalSpurs,
                thunderScore: finalThunder,
                winner: spursWin ? "SAS" : "OKC",
                highlight: scorers[Math.round(Math.random() * (scorers.length - 1))]
            });

            curGame++;
        }

        // 開始計分板動畫
        animateScoreboard(initialSpurs, initialThunder, spursWins, thunderWins, gameResults);
    }

    function animateScoreboard(initialSpurs, initialThunder, targetSpurs, targetThunder, gameResults) {
        let currentSpurs = initialSpurs;
        let currentThunder = initialThunder;
        let step = 0;
        statusTitleEl.innerText = "季後賽激戰！後半程模擬進行中...";

        spursScoreEl.innerText = currentSpurs;
        thunderScoreEl.innerText = currentThunder;

        if (gameResults.length === 0) {
            showFinalSimulationResult(targetSpurs, targetThunder, gameResults);
            return;
        }

        const interval = setInterval(() => {
            if (step < gameResults.length) {
                const game = gameResults[step];
                if (game.winner === "SAS") {
                    currentSpurs++;
                    spursScoreEl.innerText = currentSpurs;
                    spursScoreEl.style.transform = "scale(1.2)";
                } else {
                    currentThunder++;
                    thunderScoreEl.innerText = currentThunder;
                    thunderScoreEl.style.transform = "scale(1.2)";
                }

                // 移除縮放效果
                setTimeout(() => {
                    spursScoreEl.style.transform = "scale(1)";
                    thunderScoreEl.style.transform = "scale(1)";
                }, 200);

                // 印出每場小簡報
                const logItem = document.createElement("div");
                logItem.style.marginBottom = "6px";
                logItem.style.animation = "fadeIn 0.3s forwards";
                logItem.innerHTML = `Game ${game.gameNum}: <span style="color: ${game.winner === 'SAS' ? 'var(--spurs-teal)' : 'var(--thunder-orange)'}; font-weight:700;">${game.winner === 'SAS' ? '馬刺' : '雷霆'}</span> 勝 (${game.spursScore} : ${game.thunderScore}) - <span style="color:var(--text-secondary);">${game.highlight}</span>`;
                gameLogEl.appendChild(logItem);

                step++;
            } else {
                clearInterval(interval);
                showFinalSimulationResult(targetSpurs, targetThunder, gameResults);
            }
        }, 800); // 每 0.8 秒跑完一場比賽
    }

    function showFinalSimulationResult(spursWins, thunderWins, gameResults) {
        simBtn.disabled = false;
        simBtn.innerHTML = `<i class="fa-solid fa-gamepad" style="margin-right: 8px;"></i>重新模擬系列賽`;
        
        const sOff = parseInt(sliders.spursOff.value);
        const sDef = parseInt(sliders.spursDef.value);
        const sStar = parseInt(sliders.spursStar.value);
        const sBench = parseInt(sliders.spursBench.value);
        
        const tOff = parseInt(sliders.thunderOff.value);
        const tDef = parseInt(sliders.thunderDef.value);
        const tStar = parseInt(sliders.thunderStar.value);
        const tBench = parseInt(sliders.thunderBench.value);

        let summaryText = "";
        
        if (spursWins === 4) {
            statusTitleEl.innerHTML = `<span style="color: var(--spurs-teal);">聖安東尼奧馬刺</span> 贏得系列賽！`;
            
            if (thunderWins === 0 || thunderWins === 1) {
                summaryText = `【黑八狂潮！馬刺實現歷史級爆冷】<br>
                馬刺以 ${spursWins} 比 ${thunderWins} 輕鬆跨越西區榜首雷霆！Wembanyama 在防守端發揮了統治級影響力（滑桿防守值高達 ${sDef}），場均送出近 5 次阻攻，徹底摧毀了 SGA 和雷霆的切入體系。Mitch Johnson 的戰術防守變陣成功限制了雷霆的外線發揮，馬刺的年輕射手群在 Vassell 的帶領下投籃爆發，這場對決將載入史冊！`;
            } else {
                summaryText = `【鏖戰七局！馬刺青年軍涉險過關】<br>
                馬刺以 ${spursWins} 比 ${thunderWins} 艱難擊退雷霆！這是一場令人窒息的防守消耗戰。雷霆 SGA 的單兵殺傷力雖然造成了極大威脅，但馬刺在關鍵的搶七大戰中，依靠 De'Aaron Fox 決勝期的關鍵單打以及 Wembanyama 終場前 10 秒的再見火鍋封鎖禁區，馬刺頂住壓力，成功戰勝雷霆！`;
            }
        } else {
            statusTitleEl.innerHTML = `<span style="color: var(--thunder-orange);">奧克拉荷馬雷霆</span> 贏得系列賽！`;
            
            if (spursWins === 0 || spursWins === 1) {
                summaryText = `【霸主風範！雷霆秋風掃落葉晉級】<br>
                雷霆以 ${thunderWins} 比 ${spursWins} 壓倒性勝出！雷霆的進攻端完美運轉（進攻滑桿值為 ${tOff}），SGA 的切入分球配合全隊 40% 以上的瘋狂三分雨，讓 Wembanyama 的防守疲於奔命。馬刺年輕陣容被雷霆高壓防守逼出大量失誤，板凳深度（滑桿值 ${tBench}）的巨大優勢讓雷霆始終掌握主動權，輕鬆挺進次輪！`;
            } else {
                summaryText = `【驚險守衛主場！雷霆險勝馬刺青年軍】<br>
                雷霆以 ${thunderWins} 比 ${spursWins} 守下勝利！馬刺的 Wembanyama （明星值為 ${sStar}）在系列賽中展現了怪獸般的攻防數據，給雷霆內線造成極大威脅。然而，雷霆勝在整體性與巨星關鍵球，SGA 在決勝期連續中距離得手穩定軍心，加上 Jalen Williams 與 Holmgren 的外圍冷箭，雷霆頂住馬刺的反撲，驚險晉級！`;
            }
        }

        resultTextEl.innerHTML = summaryText;
        resultTextEl.classList.add("visible");
    }


    // ==========================================
    // 4. 戰術關鍵 Tab 切換
    // ==========================================
    const tacTabs = document.querySelectorAll(".tactical-tab");
    const spursTacContent = document.getElementById("tac-content-spurs");
    const thunderTacContent = document.getElementById("tac-content-thunder");

    tacTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tacTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const team = tab.getAttribute("data-team");
            if (team === "spurs") {
                spursTacContent.classList.add("active");
                thunderTacContent.classList.remove("active");
            } else {
                spursTacContent.classList.remove("active");
                thunderTacContent.classList.add("active");
            }
        });
    });

    // ==========================================
    // 5. 初始化與細節拋光
    // ==========================================
    // 預設載入 Wemby vs Chet 的 H2H 數據
    updateH2HPanel("wemby-chet");
});
