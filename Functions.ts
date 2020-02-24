export { }
function add(num1, num2) {
    return num1 + num2;
}
add("hello", "World") //it doesn't throw any error
add(1, 2)

function addFn(num1: number, num2: number) {
    return num1 + num2;
}

addFn(1, 2)
addFn("Hello", "World") // it'll warn

