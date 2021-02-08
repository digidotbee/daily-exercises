function objectsAreEqual(object1, object2) {
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)
    if (keys1.length !== keys2.length) {
        return false
    }
    for (let key of keys1) {
        if (object1[key] !== object2[key]) {
            return false
        }
    }
    return true
}

const person = {
    firstName: 'john',
    lastName: 'smith',
    age: 42
}
// using object destructuring below
// set these variables to be the following



console.assert(firstName === 'john')
console.assert(lastName === 'smith')
console.assert(age === 42)
const arr = [3434,34343,112]
// using array destructuring below
// set these variables to be the following
console.assert(one === 3434)
console.assert(two === 34343)
console.assert(three === 112)
// using the spread operator
// make a copy of the object above (person)
// also add hairColor blue
const copyWithHair = null
console.assert(
    objectsAreEqual(
        copyWithHair, 
        {
            firstName: 'john',
            lastName: 'smith',
            age: 42,
            hairColor: 'blue'
        }
    )
)
// factorial
// make a function factorial
// that takes a number and returns the factorial of it
// IE: 5 factorial is 5 * 4 * 3 * 2 * 1
// 3 factorial: 3 * 2 * 1
// 0 factorial is 1
// etc...
function factorial(number) {
}
console.assert(factorial(5) === 120)
console.assert(factorial(4) === 24)
console.assert(factorial(3) === 6)
// make a function grabKey
// that takes an object and a string and grabs the key of the object
function grabKey(obj, key) {
}
console.assert(grabKey({name: 'susan'}, 'name') === 'susan')
console.assert(grabKey({age: 33}, 'age') === 33)
// make a function addUpTo
// takes a number and adds up to it
// IE input 4: 1 + 2 + 3 + 4
// addUp(4) ➞ 10
// addUp(13) ➞ 91
// addUp(600) ➞ 180300
// make a function minutesToSeconds
// takes a number
function minutesToSeconds(number) {
}
console.assert(minutesToSeconds(3) === 180)
console.assert(minutesToSeconds(2) === 120)
// collect letters
// make a function that makes an object of letters and their count in the string...
function collectLetters(str) {
}
const letterMap = collectLetters('aaba')
console.assert(objectsAreEqual(letterMap, {a: 3, b: 1}))