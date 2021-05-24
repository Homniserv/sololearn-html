


//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}










document.addEventListener('DOMContentLoaded',domloaded,false);
//from https://github.com/moueza/rectangles-animation-javascript/blob/main/index.js
function domloaded(){
    const vers = " v";
    console.log("in consol+" + vers);
    // jQuery methods go here...
    document.getElementById("geoloc").innerHTML =navigator.geolocation.getCurrentPosition(success, error, options);

  
  
    //canevas 3 :
    var c3 = document.getElementById("myCanvas3");
    const c33 = document.getElementById("myCanvas3");

    var ctx3 = c3.getContext("2d");
    const ctx33= c33.getContext("2d");

    ctx3.moveTo(0, 0);
    ctx3.lineTo(200, 100);
    ctx3.stroke();
}

