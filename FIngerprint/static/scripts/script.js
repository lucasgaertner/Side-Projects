
var siteTitle = 'Fingerprint';
window.addEventListener('blur', () => {
  siteTitle = document.title;
  document.title = 'Come back!';
});
window.addEventListener('focus', () => {
  document.title = siteTitle;
});


function getDevice(){
    var device = navigator.oscpu;
    var header = document.getElementById("deviceCheck");
    alert(device);
    if (typeof device !== 'undefined'){
    header.innerHTML = device;
    }
    else {
        header.innerHTML = "Browser not compatible";
    }

    return device;
}

function getRatio(){
    ratio_height = window.screen.height;
    ratio_width = window.screen.width;
    ratio = ratio_width + " x " + ratio_height;
    var header = document.getElementById("RatioCheck");
    header.innerHTML = ratio;
    return ratio;
}

function getPosition(){
    var pos = document.getElementById("position");

    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
          pos.innerHTML = "Geolocation is not supported by this browser.";
          }
      }
      function showPosition(position) {
        pos.innerHTML = "Latitude: " + position.coords.latitude + 
        "<br>Longitude: " + position.coords.longitude;
      }

    getLocation();
    return pos;
}


function getIp(){
    var url = 'https://api.ipify.org/?format=json';
    fetch(url)
    .then(res => res.json())
    .then((out) => {
        var ip = document.getElementById("ip");
        ip.innerHTML = out.ip;
    })
    .catch(err => { throw err });
    return ip.out;
}

var template_state = "location";
const arr = ["location", "cookies", "story"];
function changeTemplate(x){
    for (i=0; i < arr.length; i++){
        if (x == arr[i]){
            var old_template = document.getElementById(template_state);
            var template = document.getElementById(arr[i]);
            old_template.style.display = "none";
            template.style.display = "block";
            setHighlight(arr[i]);
            lockHighlight(template_state);
            template_state = arr[i];
        }
    }
}

function lockHighlight(header){
    var lock_header = document.getElementById(header+"Box");
    lock_header.style.backgroundColor = "transparent";
}

function setHighlight(header){
    var tmp_header = document.getElementById(header+"Box");
    tmp_header.style.backgroundColor = "#F1E4F2";
}

getDevice();
getRatio();
getPosition();
getIp();
setHighlight(template_state);
