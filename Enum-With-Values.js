"use strict";
exports.__esModule = true;
var Color;
(function (Color) {
    Color["RED"] = "#f00";
    Color["GREEN"] = "#0f0";
    Color["BLUE"] = "#00f";
})(Color || (Color = {}));
;
console.log("Color", Color); // { RED: '#f00', GREEN: '#0f0', BLUE: '#00f' }
var favColor = Color.BLUE;
console.log("favColor", favColor); // #00f
console.log("typeof favColor", typeof favColor); //string
favColor = "RED"; // Type '"RED"' is not assignable to type 'Color' but js code still runs
console.log("favColor", favColor); // RED
