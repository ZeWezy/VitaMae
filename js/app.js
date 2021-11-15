function Responsive() {
    var x = document.getElementById("myTopNav");
    var y = document.getElementById("toggleBtn");
    if(x.className === "topNav") {
        x.className += " responsive";
        y.className = "fas fa-times";
    } else {
        x.className = "topNav"
        y.className = "fas fa-bars";
    }
}