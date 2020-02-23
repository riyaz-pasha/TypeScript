"use strict";
exports.__esModule = true;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
console.log(Color); // { '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }
console.log(Color[0]); // Red
console.log(Color["0"]); // Red
console.log(Color.Red); //0
console.log(Color["Red"]); //0
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 5] = "Red";
    Color1[Color1["Green"] = 6] = "Green";
    Color1[Color1["Blue"] = 7] = "Blue";
})(Color1 || (Color1 = {}));
;
console.log(Color1); // { '5': 'Red', '6': 'Green', '7': 'Blue', Red: 5, Green: 6, Blue: 7 }
