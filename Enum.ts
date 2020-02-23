export { }

enum Color { Red, Green, Blue };
console.log(Color);// { '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }
console.log(Color[0]) // Red
console.log(Color["0"]) // Red

console.log(Color.Red) //0
console.log(Color["Red"]) //0
