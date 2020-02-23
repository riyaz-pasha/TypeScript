export { }

enum Color {
    RED = "#f00",
    GREEN = "#0f0",
    BLUE = "#00f",
};
console.log("Color", Color); // { RED: '#f00', GREEN: '#0f0', BLUE: '#00f' }

let favColor: Color = Color.BLUE;
console.log("favColor", favColor); // #00f
console.log("typeof favColor", typeof favColor); //string

favColor = "RED" // Type '"RED"' is not assignable to type 'Color' but js code still runs
console.log("favColor", favColor); // RED
