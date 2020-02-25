export { }
type Directions = "up" | "down" | "left" | "right"

const goto: Directions = "down"
const goto2: Directions = "riyaz" // this will warn

type Date = string

let date: Date = "25 Jan 2020"
console.log("typeof date", typeof date)

//

type keyValue = {
    [key: string]: number
};

let contacts: keyValue = {
    "riyaz": 1,
    112: 23, // this will not throw an error it'll consider as string
    true: 23, // this will not throw an error it'll consider as string
    "abcd": "asdf", // ERROR! Type 'string' is not assignable to type 'number'.
}

console.log(Object.keys(contacts))

interface AgeMap {
    [name: string]: number
}

const friendsAges: AgeMap = {
    "Sandy": 34,
    "Joe": 28,
    "Sarah": 30,
    "Michelle": "fifty", // ERROR! Type 'string' is not assignable to type 'number'.
    23: 234, // this will not throw an error
};

console.log(Object.keys(friendsAges))