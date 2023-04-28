document.addEventListener("DOMContentLoaded", function () {
    var enableSnowButton = document.getElementById("enableSnowButton");
    enableSnowButton.addEventListener("click", function () {
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            var activeTab = tabs[0];
            console.log(activeTab.url)
            chrome.tabs.sendMessage(activeTab.id, { "snow": "enable" });
        });
        return true;
    });
    var disableSnowButton = document.getElementById("disableSnowButton");
    disableSnowButton.addEventListener("click", function () {
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            var activeTab = tabs[0];
            console.log(activeTab.url)
            chrome.tabs.sendMessage(activeTab.id, { "snow": "disable" });
        });
        return true;
    });
});