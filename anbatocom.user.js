// ==UserScript==
// @name         Bypass Ez
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bypass so cool
// @author       UwU
// @match        *://trigonevo.fun/*
// @match        *://discord.com/channels/*
// @match        *://linkvertise.com/*
// @match        https://loot-link.com/*
// @match        https://loot-links.com/*
// @match        https://lootdest.org/*
// @match        https://lootdest.com/*
// @match        https://socialwolvez.com/*
// @match        https://key.fluxteam.org/*
// @match        https://getzorara.online:2053/*
// @match        https://key.getwave.gg/*
// @match        https://pandadevelopment.net/*
// @match        https://flux.li/*
// @match        https://spdmteam.com/*
// @match        https://keyguardian.org/*
// @match        https://getswift.xyz/real/*
// @match        https://mobile.codex.lol/*
// @match        https://ads.luarmor.net/*
// @match        https://keyrblx.com/*
// @match        https://rekonise.com/*
// @match        https://1shortlink.com/*
// @match        *://getkey.farrghii.com/*
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_notification
// @run-at       document-start
// @icon         https://cdn.discordapp.com/avatars/1248562467240542208/a15472d7a7c67389033a031fc62e98a2.png?size=4096
// ==/UserScript==

(function() {
    'use strict';
        function createLogContainer() {
            const logContainer = document.createElement('div');
            logContainer.style.position = 'fixed';
            logContainer.style.top = '10px';
            logContainer.style.right = '10px';
            logContainer.style.maxWidth = '300px';
            logContainer.style.maxHeight = '300px';
            logContainer.style.overflowY = 'auto';
            logContainer.style.backgroundColor = '#333';
            logContainer.style.color = 'white';
            logContainer.style.padding = '10px';
            logContainer.style.fontFamily = 'monospace';
            logContainer.style.fontSize = '12px';
            logContainer.style.borderRadius = '5px';
            logContainer.style.zIndex = 1000;

            if (document.body) {
                document.body.appendChild(logContainer);
            }

            return logContainer;
        }

        function logToContainer(message) {
            const logContainer = createLogContainer();
            const logMessage = document.createElement('div');
            logMessage.textContent = message;
            logContainer.appendChild(logMessage);
        }
    function showCopyConfirmation(value) {
        alert('Đã sao chép giá trị: ' + value);
    }


    window.addEventListener('load', function() {
        const currentUrl = window.location.href;
    if (window.location.href === "https://key.getwave.gg/") {
        window.location.href = "https://key.getwave.gg/freemium-tasks";
        logToContainer('Đang chuyển hướng đến https://key.getwave.gg/freemium-tasks');
    }
    else {
        function clickStep1() {
            const step1Element = document.querySelector('h1.cursor-pointer.text-3xl.max-w-3xl.mx-auto.text-center.font-semibold');
            if (step1Element) {
                step1Element.click();
                logToContainer('Bypass Step');
                clearInterval(step1ClickInterval);
            }
        }
        const step1ClickInterval = setInterval(clickStep1, 2000);
    }
     if (currentUrl.includes("https://ads.luarmor.net/")) {
     logToContainer('Đang Bypass');

    setTimeout(() => {
        var nextButton = document.querySelector("#nextbtn");
        document.querySelectorAll('button[onclick]').forEach(button => {
            let onclickAttr = button.getAttribute('onclick');
            console.log("Button onclick attribute:", onclickAttr);

            if (onclickAttr.includes("https://ads.luarmor.net/")) {
                console.log("Onclick contains 'https://ads.luarmor.net/'");

                let matches = onclickAttr.match(/'([^']+)'/g);
                console.log("Matches found in onclick:", matches);

                if (matches && matches.length >= 3) {
                    let thirdLink = matches[2].replace(/'/g, '');
                    console.log("Third link extracted:", thirdLink);

                    if (thirdLink) {
                        const bypassUrl = `https://api.solar-x.top/api/v3/premium/bypass?url=${encodeURIComponent(thirdLink)}&apikey=SLR-05C917294314C6F08A176D714842E6FE6E5E6013AB4073C4DFB125949A339B7C198741AF3F7D9B06039D66D18250681F03C282F6668F656F2E69B55A94744784-khoanontop`;
                    
                        // Now, fetch the result from the API (bypassUrl)
                        fetch(bypassUrl)
                            .then(response => response.json())  // Assuming the response is JSON
                            .then(data => {
                                // If the API returns a URL or a specific result, open it
                                if (data.result) {
                                    window.location.href = data.result;  
                                } else {
                                    console.log("No result URL found in API response.");
                                }
                            })
                            .catch(error => {
                                console.error("Error fetching the API result:", error);
                            });
                    } else {
                        console.log("No third link found, skipping API request.");
                    }
                }
            }
        });
    }, 2000);
}

 if (currentUrl.includes('https://discord.com/')) {

         let originalMessages = {};
    let boxVisible = true;
    let clickToCopyEnabled = false;
    let helpBox;

    const ANIMATION_DURATION = 500;

    function startLoading() {
        let loadingBox = document.createElement('div');
        loadingBox.id = 'loadingBox';
        loadingBox.style.position = 'fixed';
        loadingBox.style.top = '50%';
        loadingBox.style.left = '50%';
        loadingBox.style.transform = 'translate(-50%, -50%) translateY(-20px)';
        loadingBox.style.opacity = '0';
        loadingBox.style.background = 'linear-gradient(135deg, #7289da, #2c2f33)';
        loadingBox.style.color = 'white';
        loadingBox.style.padding = '30px';
        loadingBox.style.borderRadius = '10px';
        loadingBox.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        loadingBox.style.textAlign = 'center';
        loadingBox.style.zIndex = '9999';
        loadingBox.style.minWidth = '350px';
        loadingBox.style.fontFamily = `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`;
        loadingBox.style.transition = `opacity ${ANIMATION_DURATION}ms ease, transform ${ANIMATION_DURATION}ms ease`;

        let loadingText = document.createElement('div');
        loadingText.innerText = 'Loading Userscript';
        loadingText.style.fontSize = '20px';
        loadingText.style.marginBottom = '20px';
        loadingBox.appendChild(loadingText);

        let barContainer = document.createElement('div');
        barContainer.id = 'loadingBarContainer';
        barContainer.style.width = '100%';
        barContainer.style.height = '12px';
        barContainer.style.background = 'rgba(0, 0, 0, 0.2)';
        barContainer.style.borderRadius = '6px';
        barContainer.style.overflow = 'hidden';
        barContainer.style.marginTop = '10px';
        loadingBox.appendChild(barContainer);

        let loadingBar = document.createElement('div');
        loadingBar.id = 'loadingBar';
        loadingBar.style.height = '100%';
        loadingBar.style.width = '100%';
        loadingBar.style.background = 'linear-gradient(90deg, #99aab5, #7289da)';
        loadingBar.style.transformOrigin = 'right';
        loadingBar.style.transition = 'transform 10s linear';
        barContainer.appendChild(loadingBar);

        document.body.appendChild(loadingBox);

        requestAnimationFrame(() => {
            loadingBox.style.opacity = '1';
            loadingBox.style.transform = 'translate(-50%, -50%) translateY(0)';
        });

        requestAnimationFrame(() => {
            loadingBar.style.transform = 'scaleX(0)';
        });

        setTimeout(() => {
            loadingBox.style.opacity = '0';
            loadingBox.style.transform = 'translate(-50%, -50%) translateY(20px)';
            setTimeout(() => {
                if (loadingBox.parentNode) {
                    loadingBox.parentNode.removeChild(loadingBox);
                }
                createControlBox();
            }, ANIMATION_DURATION);
        }, 1000);
    }

    function createControlBox() {
        let box = document.createElement("div");
        box.id = "fakeMessageBox";
        box.style.position = "fixed";
        box.style.bottom = "20px";
        box.style.right = "20px";
        box.style.background = "linear-gradient(135deg, #2c2f33, #7289da)";
        box.style.color = "white";
        box.style.padding = "20px";
        box.style.borderRadius = "10px";
        box.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
        box.style.zIndex = "9999";
        box.style.width = "280px";
        box.style.display = "flex";
        box.style.flexDirection = "column";
        box.style.gap = "10px";
        box.style.fontFamily = `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`;
        box.style.opacity = "0";
        box.style.transform = "translateX(50px)";
        box.style.transition = `opacity ${ANIMATION_DURATION}ms ease, transform ${ANIMATION_DURATION}ms ease`;

        box.innerHTML = `
            <div>
                <label style="display: block; margin-bottom: 4px;">Message ID:</label>
                <input type="text" id="fakeMsgId" style="width: 100%; padding: 6px; border-radius: 4px; border: none; box-sizing: border-box;">
            </div>

            <div style="display: flex; flex-direction: column; gap: 5px;">
                <button id="clearMsgId" style="padding: 6px; border: none; border-radius: 4px; background: #99aab5; color: white; cursor: pointer;">Clear</button>
                <button id="toggleCopy" style="padding: 6px; border: none; border-radius: 4px; background: #99aab5; color: white; cursor: pointer;">Copy</button>
            </div>

            <div>
                <label style="display: block; margin-bottom: 4px;">New Message:</label>
                <textarea id="fakeMsgHtml" style="width: 100%; padding: 6px; border-radius: 4px; border: none; box-sizing: border-box; resize: vertical;" rows="3"></textarea>
            </div>

            <div>
                <label style="display: block; margin-bottom: 4px;">Image URL (optional):</label>
                <input type="text" id="fakeMsgImage" style="width: 100%; padding: 6px; border-radius: 4px; border: none; box-sizing: border-box;">
            </div>

            <div style="display: flex; gap: 5px;">
                <button id="applyFakeChange" style="flex: 1; padding: 6px; border: none; border-radius: 4px; background: #7289da; color: white; cursor: pointer;">Apply</button>
                <button id="resetFakeChange" style="flex: 1; padding: 6px; border: none; border-radius: 4px; background: #7289da; color: white; cursor: pointer;">Reset</button>
                <button id="hideBox" style="flex: 1; padding: 6px; border: none; border-radius: 4px; background: #7289da; color: white; cursor: pointer;">Hide</button>
                <button id="helpBtn" style="flex: 1; padding: 6px; border: none; border-radius: 4px; background: #7289da; color: white; cursor: pointer;">Help</button>
            </div>

            <div id="notification" style="display: none; color: lime; text-align: center;">Message updated!</div>
            <small style="display: block; text-align: center; margin-top: 5px;">By Khoa Saddoi ( Skid )</small>
        `;
        document.body.appendChild(box);

        requestAnimationFrame(() => {
            box.style.opacity = "1";
            box.style.transform = "translateX(0)";
        });

        let toggleButton = document.createElement("button");
        toggleButton.id = "toggleBoxButton";
        toggleButton.innerText = "Show";
        toggleButton.style.position = "fixed";
        toggleButton.style.bottom = "20px";
        toggleButton.style.right = "20px";
        toggleButton.style.background = "#7289da";
        toggleButton.style.color = "white";
        toggleButton.style.padding = "8px 12px";
        toggleButton.style.border = "none";
        toggleButton.style.borderRadius = "4px";
        toggleButton.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
        toggleButton.style.zIndex = "9998";
        toggleButton.style.display = "none";
        toggleButton.style.cursor = "pointer";
        document.body.appendChild(toggleButton);

        helpBox = createHelpBox();

        document.getElementById("applyFakeChange").addEventListener("click", () => {
            let msgId = document.getElementById("fakeMsgId").value.trim();
            let newHtml = document.getElementById("fakeMsgHtml").value;
            let imageUrl = document.getElementById("fakeMsgImage").value.trim();
            if (msgId && (newHtml !== "" || imageUrl !== "")) {
                fakeEditMessage(msgId, newHtml, imageUrl);
                showNotification("Message updated!");
            }
        });

        document.getElementById("resetFakeChange").addEventListener("click", () => {
            let msgId = document.getElementById("fakeMsgId").value.trim();
            if (msgId) {
                resetMessage(msgId);
            }
        });

        document.getElementById("toggleCopy").addEventListener("click", () => {
            clickToCopyEnabled = !clickToCopyEnabled;
            alert(`Copy Mode: ${clickToCopyEnabled ? 'ON' : 'OFF'}`);
        });

        document.getElementById("hideBox").addEventListener("click", () => {
            toggleControlBox();
        });

        document.getElementById("clearMsgId").addEventListener("click", () => {
            document.getElementById("fakeMsgId").value = "";
        });

        document.getElementById("helpBtn").addEventListener("click", () => {
            if (helpBox.style.display === "none") {
                helpBox.style.display = "block";
            } else {
                helpBox.style.display = "none";
            }
        });

        toggleButton.addEventListener("click", () => {
            toggleControlBox();
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "F2") {
                toggleControlBox();
            }
        });

        document.addEventListener("click", (event) => {
            if (!clickToCopyEnabled) return;
            let messageElement = event.target.closest("[id^='message-content-']");
            if (messageElement) {
                let messageId = messageElement.id.replace("message-content-", "");
                document.getElementById("fakeMsgId").value = messageId;
                showNotification("Message ID copied!");
            }
        });
    }

    function createHelpBox() {
        let box = document.createElement("div");
        box.id = "fakeMessageHelpBox";
        box.style.position = "fixed";
        box.style.bottom = "20px";
        box.style.right = "320px";
        box.style.background = "#2c2f33";
        box.style.color = "white";
        box.style.padding = "15px";
        box.style.borderRadius = "10px";
        box.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
        box.style.zIndex = "9999";
        box.style.width = "250px";
        box.style.fontFamily = `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`;
        box.style.display = "none";

        box.innerHTML = `
            <h3 style="margin-top: 0;">Help</h3>
            <p style="font-size: 14px; line-height: 1.4;">
                This script lets you locally modify the appearance of a Discord message.<br><br>
                <strong>Message ID</strong>: Enable "Copy" mode and click a message to grab its ID.<br>
                <strong>New Message</strong>: Enter your custom text, links, or mentions in the format
                <code>&lt;@123456789|DisplayName&gt;</code>.<br>
                <strong>Image URL</strong>: An optional link to an image below your custom text.
            </p>
            <p style="font-size: 14px; line-height: 1.4;">
                <strong>Example:</strong><br>
                <code>&lt;@123456789|User&gt; Check out https://google.com</code>
            </p>
        `;

        document.body.appendChild(box);
        return box;
    }

    function toggleControlBox() {
        let box = document.getElementById("fakeMessageBox");
        let toggleButton = document.getElementById("toggleBoxButton");
        if (!box) return;

        if (boxVisible) {
            box.style.transition = `opacity ${ANIMATION_DURATION}ms ease, transform ${ANIMATION_DURATION}ms ease`;
            box.style.opacity = "0";
            box.style.transform = "translateX(50px)";
            setTimeout(() => {
                box.style.display = "none";
                toggleButton.style.display = "block";
                boxVisible = false;
            }, ANIMATION_DURATION);
        } else {
            box.style.display = "flex";
            box.style.opacity = "0";
            box.style.transform = "translateX(50px)";
            void box.offsetWidth;
            box.style.transition = `opacity ${ANIMATION_DURATION}ms ease, transform ${ANIMATION_DURATION}ms ease`;
            box.style.opacity = "1";
            box.style.transform = "translateX(0)";
            toggleButton.style.display = "none";
            boxVisible = true;
        }
    }

    function fakeEditMessage(messageId, newHtml, imageUrl) {
        let messageElement = document.querySelector(`#message-content-${messageId}`);
        if (messageElement) {
            if (!originalMessages[messageId]) {
                originalMessages[messageId] = messageElement.innerHTML;
            }
            let processedHtml = processContent(newHtml);
            let finalContent = "";
            if (processedHtml) {
                finalContent = `<div>${processedHtml}</div>`;
            }
            if (imageUrl) {
                finalContent += `<div style="margin-top: 5px;"><img src="${imageUrl}" style="max-width: 200px; border-radius: 5px;"></div>`;
            }
            messageElement.innerHTML = finalContent;
        } else {
            alert("Message not found. Make sure it's visible on screen.");
        }
    }

    function resetMessage(messageId) {
        let messageElement = document.querySelector(`#message-content-${messageId}`);
        if (messageElement && originalMessages[messageId]) {
            messageElement.innerHTML = originalMessages[messageId];
            delete originalMessages[messageId];
        } else {
            alert("Original message not stored or message not found.");
        }
    }

    function processLinks(text) {
        if (!text) return "";
        return text.replace(/(https:\/\/[^\s]+)/g, function(match) {
            return `<a href="${match}" target="_blank" style="color: #00b0f4; text-decoration: none;">${match}</a>`;
        });
    }

    function processMentions(text) {
        if (!text) return "";
        return text.replace(/<@([^>|]+)(?:\|([^>]+))?>/g, function(match, id, displayName) {
            if (!displayName) displayName = id;
            return `<span class="mention" style="color: #7289da; font-weight: bold;">@${displayName}</span>`;
        });
    }

    function processContent(text) {
        return processMentions(processLinks(text));
    }

    function showNotification(text) {
        let notif = document.getElementById("notification");
        notif.innerText = text;
        notif.style.display = "block";
        setTimeout(() => notif.style.display = "none", 2000);
    }
        startLoading();
    }



       if (currentUrl.includes('trigonevo.fun/whitelist/?HWID=')) {
    // Try to find the specific div element by its class names
    const divElement = document.querySelector('div.glass-light.bg-blue-600.bg-opacity-20.hover-glow.cursor-pointer.rounded-lg.p-4.border-l-4.border-blue-400.shadow-md.relative.overflow-hidden');

    if (divElement) {
        // Check if the div has the 'onclick' attribute that contains 'window.location.href'
        const onclickAttribute = divElement.getAttribute('onclick');

        if (onclickAttribute && onclickAttribute.includes('window.location.href')) {
            // Extract the URL from the 'onclick' attribute
            const urlMatch = onclickAttribute.match(/window\.location\.href=['"](.*?)['"]/);

            if (urlMatch && urlMatch[1]) {
                console.log('URL from onclick:', urlMatch[1]);

                // If the URL is found, create a bypass URL for the API
                const bypassUrl = `https://api.solar-x.top/api/v3/premium/bypass?url=${encodeURIComponent(urlMatch[1])}&apikey=SLR-05C917294314C6F08A176D714842E6FE6E5E6013AB4073C4DFB125949A339B7C198741AF3F7D9B06039D66D18250681F03C282F6668F656F2E69B55A94744784-khoanontop`;

                // Fetch the result from the API using the bypass URL
                fetch(bypassUrl)
                    .then(response => response.json())  // Assuming the response is JSON
                    .then(data => {
                        if (data.result) {
                            window.location.href = data.result;
                        }
                    })
                    .catch(error => {
                        console.error("Error fetching the API result:");
                    });
            }
        }
        logToContainer('Đang Bypass');
    } else {
        logToContainer('Whitelist');
    }
} else {
    console.log("Current URL does not contain the expected part for whitelist.");
}


if (currentUrl.startsWith('https://flux.li/android/external/start.php?HWID=')) {

    // Tìm phần tử <p> có class 'aos-init' hoặc 'aos-animate'
    const paragraph = document.querySelector('p[data-aos="fade-left"]');

    // Nếu tìm thấy phần tử <p> thì tiếp tục thêm nút
    if (paragraph) {
        const button = document.createElement('button');
        button.textContent = 'Bypass';
        paragraph.style.position = 'relative';
        button.style.position = 'absolute';
        button.style.top = '0';
        button.style.left = '10';
        button.style.width = '100%';
        button.style.height = '100%';
        button.style.backgroundColor = '#4CAF50';
        button.style.color = 'white';  // Màu chữ nút
        button.style.border = 'none';
        button.style.fontSize = '18px';
        button.style.cursor = 'pointer';
        button.style.borderRadius = '10px';
        button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        button.style.display = 'flex';
        button.style.alignItems = 'center';
        button.style.justifyContent = 'center';
        button.style.transition = 'background-color 0.3s';
        button.addEventListener('click', function() {
            window.location.href = `https://linkvertise.com/580726/fluxus1`;
        });
        paragraph.appendChild(button);
    }
}



    if (currentUrl.startsWith('https://linkvertise.com/580726/fluxus1')) {
       window.location.href = 'https://flux.li/android/external/check1.php?hash={hash}';
   }

    else if (currentUrl.startsWith('https://flux.li/android/external/check1.php?hash={hash}')) {
       window.location.href = 'https://linkvertise.com/580726/fluxus';
   }

    else if (currentUrl.startsWith('https://linkvertise.com/580726/fluxus')) {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';

    const countdownText = document.createElement('div');
    countdownText.style.fontSize = '30px';
    countdownText.style.marginBottom = '20px';
    countdownText.style.fontWeight = 'bold';
    countdownText.textContent = 'Time : 3s';

    const button = document.createElement('button');
    button.textContent = 'Bypass';
    button.style.padding = '20px 40px';
    button.style.fontSize = '18px';
    button.style.border = 'none';
    button.style.backgroundColor = '#4CAF50';
    button.style.color = 'white';
    button.style.cursor = 'pointer';
    button.style.borderRadius = '10px';
    button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    button.style.transition = 'background-color 0.3s';
    button.style.display = 'none';

    button.addEventListener('click', function() {
        window.location.href = `https://flux.li/android/external/main.php?hash={hash}`;
    });

    overlay.appendChild(countdownText);
    overlay.appendChild(button);
    document.body.appendChild(overlay);

    let timeLeft = 3;
    const countdownInterval = setInterval(function() {
        timeLeft--;
        countdownText.textContent = `Time : ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            countdownText.textContent = 'Click Bypass';
            button.style.display = 'block';
        }
    }, 1000);
}



        if (currentUrl === "https://getzorara.online:2053/") {
            setTimeout(function() {
                const button = document.getElementById('generate-btn');
                if (button) {
                    button.click();
                    logToContainer('Clicked Generate Button');
                }
            });
        }

        if (currentUrl.includes('key.fluxteam.org')) {
            handleGenerateButton();
        }

        if (currentUrl.includes('loot-link.com') || currentUrl.includes('lootdest.org') || currentUrl.includes('linkvertise.com')) {
            handleSpecialUrls();
        }

        if (currentUrl.includes('pandadevelopment.net/getkey?service=beeconhub')) {
            clickButton();
        }

        if (window.location.href.includes('https://pandadevelopment.net/getkey?service=cryptic')) {
            logToContainer('wait 5 second');
    setTimeout(() => {
        const button = document.querySelector('.button-simple.w-inline-block');
        if (button) {
            button.click();
        }
    }, 5000);
}

        if (currentUrl.startsWith('https://loot-links.com/s?mK6Z')) {
            logToContainer('wait 5 second');
    setTimeout(function() {
        window.location.href = 'https://mobile.codex.lol/?page=tasks';
    }, 5000);
}

        if (currentUrl.startsWith('https://linkvertise.com/654032/codex-gateway-2')) {
            logToContainer('wait 5 second');
    setTimeout(function() {
        window.location.href = 'https://mobile.codex.lol/?page=tasks';
    }, 5000);
}

        if (currentUrl.startsWith('https://loot-link.com/s?oiQO')) {
            logToContainer('wait 5 second');
    setTimeout(function() {
        window.location.href = 'https://mobile.codex.lol/?page=tasks';
    }, 5000);
}

        if (currentUrl.includes("https://spdmteam.com/key-system-3?hwid=")) {
            const targetUrl = "https://loot-link.com/s?qlbU";
            window.location.href = targetUrl;
        } else if (currentUrl.includes("https://spdmteam.com/key-system-2?hwid=")) {
            const targetUrl = "https://loot-link.com/s?mYit";
            window.location.href = targetUrl;
        } else if (currentUrl.includes("https://spdmteam.com/key-system-1?hwid=")) {
            logToContainer('Vui lòng xác minh capcha');
        }
          else if (currentUrl.includes('https://linkvertise.com/376138/arceus-x-neo-key-system-1?o=sharing')) {
       window.location.href = 'https://lootdest.com/s?qljL';
   }
        else if (currentUrl.includes('https://lootdest.com/s?qljL')) {
       window.location.href = 'https://spdmteam.com/api/keysystem?step=1&advertiser=linkvertise&OS=ios';
   }
       else if (currentUrl.includes('https://loot-link.com/s?mYit')) {
       window.location.href = 'https://spdmteam.com/api/keysystem?step=2&advertiser=linkvertise&OS=ios';
   }
       else if (currentUrl.includes('https://loot-link.com/s?qlbU')) {
       window.location.href = 'https://spdmteam.com/api/keysystem?step=3&advertiser=linkvertise&OS=ios';
   }
          if (currentUrl.startsWith("https://getswift.xyz/real/0/") ||
            currentUrl.startsWith("https://getswift.xyz/real/1/") ||
            currentUrl.startsWith("https://getswift.xyz/real/2/")) {
            setInterval(function() {
                const button = document.querySelector("body > div > form > div.flex.flex-col.w-full.mb-\\[2rem\\].items-center > button");
                if (button) {
                    button.click();
                    logToContainer('Bypass Click button');
                }
            }, 1000);
        }

          if (currentUrl.startsWith("https://getswift.xyz/real/3/")) {
            logToContainer("Vui lòng nhấn 'Get Key'");
        }

        if (window.location.href.includes('https://mobile.codex.lol/')) {
    setTimeout(() => {

        const targetElement = document.querySelector('.absolute.-inset-0\\.5.bg-red-500\\/30.opacity-20.rounded-lg.blur.group-hover\\:opacity-60.transition.duration-1000.group-hover\\:duration-200');

        if (targetElement) {
            targetElement.click();
            console.log('Phần tử đã được click!');
        } else {
            console.log('Không tìm thấy phần tử cần click.');
        }
    },1000);
}


if (window.location.href.includes('https://keyrblx.com/')) {
    // Select the continue button using query selector
    const continueButton = document.querySelector('button.mantine-Button-root span.mantine-Button-label');

    if (continueButton) {
        // Click the closest button that contains the continueButton
        continueButton.closest('button').click();

        // Stop the page from continuing to load (useful in cases like navigation).
        window.stop(); // This will stop the loading of the page after the button click

        // Optionally, you can retrieve the next link or do something else.
        // For example, grabbing the next URL from the page:
        const nextLink = document.querySelector('a.nextLinkSelector'); // Adjust the selector to match your page
        if (nextLink) {
            const nextUrl = nextLink.href;
            console.log("Next URL: ", nextUrl);
        }
    }
}



    if (window.location.href.includes('rekonise.com/')) {
        let sPathname = window.location.pathname;

        let apiUrl = `https://api.rekonise.com/social-unlocks${sPathname}/unlock`;

        GM_xmlhttpRequest({
            method: 'GET',
            url: apiUrl,
            onload: function(response) {
                try {
                    let jsonResponse = JSON.parse(response.responseText);
                    if (jsonResponse.url) {
                        window.location.href = jsonResponse.url;
                    } else {
                        console.error('No URL found in the API response');
                    }
                } catch (e) {
                    console.error('Failed to parse API response', e);
                }
            },
            onerror: function() {
                console.error('Failed to fetch the API URL');
            }
        });
    }

if (currentUrl.includes('https://socialwolvez.com/')) {
   const currentUrl = window.location.href;
   const apiUrl = `https://duckapifree.vercel.app/bypass?url=${currentUrl}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Assuming the API returns a URL in the response, open it
      if (data && data.result) {
        window.open(data.result, '_blank');
      } else {
        console.error('No valid result returned from API.');
      }
    })
    .catch(error => {
      console.error('Error fetching data from API:', error);
    });
}
if (window.location.href.includes('https://1shortlink.com/')) {
    setTimeout(() => {
        const redirectButton = document.getElementById('redirect-link');

        if (redirectButton) {
            logToContainer('Đang Bypass tutu');
            const link = redirectButton.getAttribute('data-href');

            if (link) {
                console.log('Đang chuyển hướng đến:', link);
                window.location.href = link;
            }
        }
    }, 2000);
}
if (currentUrl.startsWith('https://getkey.farrghii.com/check1.php')) {
    setTimeout(function() {
        window.location.href = 'https://getkey.farrghii.com/check2.php';
    });
}

        if (currentUrl.startsWith('https://getkey.farrghii.com/check2.php')) {
    setTimeout(function() {
        window.location.href = 'https://getkey.farrghii.com/check3.php';
    });
}

       if (currentUrl.startsWith('https://getkey.farrghii.com/check3.php')) {
    setTimeout(function() {
        window.location.href = 'https://getkey.farrghii.com/finished.php';
    });
}

    });

    function handleSpecialUrls(logContainer) {
    logToContainer(logContainer, 'Vui lòng chờ để bypass');

    setTimeout(function() {
        const currentUrl = window.location.href;

        // Check if the current URL matches any of the predefined links that don't require bypass
        if (
            currentUrl.includes("https://linkvertise.com/580726/fluxus1") ||
            currentUrl.includes("https://linkvertise.com/580726/fluxus") ||
            currentUrl.includes("https://linkvertise.com/376138/arceus-x-neo-key-system-1?o=sharing") ||
            currentUrl.includes("https://loot-link.com/s?mYit") ||
            currentUrl.includes("https://loot-link.com/s?qlbU") ||
            currentUrl.includes("https://loot-links.com/s?mK6Z") ||
            currentUrl.includes("https://linkvertise.com/654032/codex-gateway-2") ||
            currentUrl.includes("https://loot-link.com/s?oiQO")
        ) {
            logToContainer(logContainer, 'URL là link không cần bypass');
            return;
        }

        // If it's not one of the special URLs, create a bypass URL
        const bypassUrl = `https://api.solar-x.top/api/v3/premium/bypass?url=${encodeURIComponent(currentUrl)}&apikey=SLR-05C917294314C6F08A176D714842E6FE6E5E6013AB4073C4DFB125949A339B7C198741AF3F7D9B06039D66D18250681F03C282F6668F656F2E69B55A94744784-khoanontop`;

        console.log("Bypass URL generated:", bypassUrl);

        // Fetch the result from the API
        fetch(bypassUrl)
            .then(response => response.json())  // Assuming the response is JSON
            .then(data => {
                console.log("API result:", data);
                // If the API returns a URL or a specific result, open it
                if (data.result) {
                    window.location.href = data.result;  // Redirect to the result URL
                } else {
                    console.log("No result URL found in API response.");
                }
            })
            .catch(error => {
                console.error("Error fetching the API result:", error);
            });

    }, 2000); // Timeout delay for bypassing (2 seconds)
}


    function handleGenerateButton() {
        const generateButton = document.querySelector('button.generate-button');
        if (generateButton) {
            logToContainer('Clicking generate button...');
            generateButton.click();

            setTimeout(() => {
                const finalUrlElement = document.querySelector('.key-display');
                if (finalUrlElement) {
                    const finalUrl = finalUrlElement.textContent.trim();
                    if (finalUrl) {
                        logToContainer(`Redirecting to: ${finalUrl}`);
                        window.location.href = finalUrl;
                    } else {
                        logToContainer('No URL found after clicking generate.');
                    }
                } else {
                    logToContainer('Key display not found.');
                }
            }, 5000);
        } else {
            logToContainer('Use key');
        }
    }

    function clickButton() {
        const button1 = document.querySelector('a.button-simple[href*="getkey?service=beeconhub"][href*="checkpoints=48"]');
        if (button1) {
            button1.click();
            logToContainer('Bypass Button clicked');
            return;
        }

        if (window.location.href.includes('checkpoints=48')) {
            const button2 = document.querySelector('button.button-simple.w-inline-block');
            if (button2) {
                button2.click();
                logToContainer('Click button continue');
                setTimeout(() => {
                window.location.reload();
            }, 5000);
            return;
        }
  }

    }
    function keyguardian_Cubix(logContainer) {
        const button1 = document.querySelector('div.flex.items-center.p-6.pt-0.relative a.w-full.group');
        if (button1) {
            button1.click();
            logToContainer(logContainer, 'Bypass Button clicked');
            return;
    }
        if (window.location.href.includes('&providerId=')) {
            const button2 = document.querySelector("body > main > div > div > div.items-center.p-6.pt-0.flex.justify-between > button");
            if (button2) {
                button2.click();
                logToContainer(logContainer, 'Click button continue');
                setTimeout(() => {
                    window.location.reload();
                }, 5000);
            }
        }
    }

})();
