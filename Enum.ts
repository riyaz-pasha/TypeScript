export { }

enum Color { Red, Green, Blue };
console.log(Color);// { '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }
console.log(Color[0]) // Red
console.log(Color["0"]) // Red

console.log(Color.Red) //0
console.log(Color["Red"]) //0

enum Color1 { Red = 5, Green, Blue };
console.log(Color1);// { '5': 'Red', '6': 'Green', '7': 'Blue', Red: 5, Green: 6, Blue: 7 }

enum EmptyEnum { };
console.log("EmptyEnum", EmptyEnum); // {}