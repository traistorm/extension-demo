chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.snow === "enable") {
            const storage = chrome.storage.sync;
            storage.set({ snow: true }, function () {
                console.log('Enable snow');
            });
        } else {
            const storage = chrome.storage.sync;
            storage.set({ snow: false }, function () {
                console.log('Disable snow');
            });
        }
    }
);

/* function createSnowflake() {
    const snowflakeDiv = document.createElement("div");
    snowflakeDiv.className = "snow";
    snowflakeDivContainer.appendChild(snowflakeDiv)
    setTimeout(() => {
        snowflakeDiv.remove();
    }, 50000);
}

setInterval(createSnowflake, 1000); */
function createSnowflake() {
    var style = document.createElement('style');
    var screenWidth = screen.width;
    var screenHeight = screen.height;
    style.innerHTML = `
 .snowflake {
    color: #00DEDE;
    font-size: 1em;
    font-family: Arial;
    text-shadow: 0 0 1px #000;
  }
  @-webkit-keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@-webkit-keyframes snowflakes-shake{0%{-webkit-transform:translateX(0px);transform:translateX(0px)}50%{-webkit-transform:translateX(80px);transform:translateX(80px)}100%{-webkit-transform:translateX(0px);transform:translateX(0px)}}@keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@keyframes snowflakes-shake{0%{transform:translateX(0px)}50%{transform:translateX(80px)}100%{transform:translateX(0px)}}.snowflake{position:fixed;top:-10%;z-index:9999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;-webkit-animation-name:snowflakes-fall,snowflakes-shake;-webkit-animation-duration:10s,3s;-webkit-animation-timing-function:linear,ease-in-out;-webkit-animation-iteration-count:infinite,infinite;-webkit-animation-play-state:running,running;animation-name:snowflakes-fall,snowflakes-shake;animation-duration:10s,3s;animation-timing-function:linear,ease-in-out;animation-iteration-count:infinite,infinite;animation-play-state:running,running}.snowflake:nth-of-type(0){left:1%;-webkit-animation-delay:0s,0s;animation-delay:0s,0s}.snowflake:nth-of-type(1){left:10%;-webkit-animation-delay:1s,1s;animation-delay:1s,1s}.snowflake:nth-of-type(2){left:20%;-webkit-animation-delay:6s,.5s;animation-delay:6s,.5s}.snowflake:nth-of-type(3){left:30%;-webkit-animation-delay:4s,2s;animation-delay:4s,2s}.snowflake:nth-of-type(4){left:40%;-webkit-animation-delay:2s,2s;animation-delay:2s,2s}.snowflake:nth-of-type(5){left:50%;-webkit-animation-delay:8s,3s;animation-delay:8s,3s}.snowflake:nth-of-type(6){left:60%;-webkit-animation-delay:6s,2s;animation-delay:6s,2s}.snowflake:nth-of-type(7){left:70%;-webkit-animation-delay:2.5s,1s;animation-delay:2.5s,1s}.snowflake:nth-of-type(8){left:80%;-webkit-animation-delay:1s,0s;animation-delay:1s,0s}.snowflake:nth-of-type(9){left:90%;-webkit-animation-delay:3s,1.5s;animation-delay:3s,1.5s}  
`;

    document.head.appendChild(style);
    const snowflakeDivContainer = document.createElement("div");
    snowflakeDivContainer.className = 'snowflakes';
    snowflakeDivContainer.innerHTML = `
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
`
    document.querySelector("body").appendChild(snowflakeDivContainer);
}
const storage = chrome.storage.sync;
storage.get('snow', function (data) {
    const enableStatus = data.snow;
    console.log('Snow enable is ' + enableStatus);
    if (enableStatus !== undefined || enableStatus == false) {
        createSnowflake()
    }
});