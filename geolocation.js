document.addEventListener('DOMContentLoaded',domloaded,false);
//from https://github.com/moueza/rectangles-animation-javascript/blob/main/index.js
function domloaded(){
    const vers = " v14";
    console.log("in consol+" + vers);
    // jQuery methods go here...
    document.getElementById("geoloc").innerHTML =navigator.geolocation.getCurrentPosition();

  
  
    //canevas 3 :
    var c3 = document.getElementById("myCanvas3");
    const c33 = document.getElementById("myCanvas3");

    var ctx3 = c3.getContext("2d");
    const ctx33= c33.getContext("2d");

    ctx3.moveTo(0, 0);
    ctx3.lineTo(200, 100);
    ctx3.stroke();
}
