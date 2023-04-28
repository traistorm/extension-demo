// function updateTime() {
//     const timeElement = document.getElementById("time");
//     const now = new Date();
//     const timeString = now.toLocaleTimeString();
//     timeElement.innerText = timeString;
//     var helloElement = document.getElementById("hello");
// }

// // Update the time every second
// setInterval(updateTime, 1000);

// document.addEventListener("DOMContentLoaded", function () {
//     // thực hiện thao tác với phần tử DOM sau khi DOM tải xong
//     var helloElement = document.getElementById("hello");
//     helloElement.innerHTML = "Hello Popup Test";

//     var changeColorButton = document.getElementById("changeColorButton");
//     changeColorButton.addEventListener("click", function () {
//         chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//             chrome.scripting.executeScript({
//                 target: { tabId: tabs[0].id },
//                 func: function () {
//                     document.body.style.backgroundColor = "red";
//                 }
//             });
//         });
//     });
// });