// Q1
// Use Map to increment all numbers in the array (arr) by 1
let arr = [1, 2, 3, 4, 5, 6];

let newArr =
arr.map(function (x) {
  return x + 1
})

console.log(newArr)

console.assert(JSON.stringify(newArr) == JSON.stringify([2, 3, 4, 5, 6, 7]));

// Q2
// Use Filter to find all even numbers in an array

// Im trying to use the modulus here but Im not sure how.

let arr2 = [1, 2, 3, 4, 5, 6];

let evenNums =
arr2.filter (function (num) {
  return num % 2 === 0
})

// figured it out!

console.log(evenNums)

console.assert(JSON.stringify(evenNums) == JSON.stringify([2, 4, 6]));

// Q3
// Use Filter to find strings that are longer than 3 letter in the array (animals)

let animals = ["cow", "rabbit", "dog", "cat"];

let longerThanThree = 

animals.filter (function (cow) {
  return cow.length > 3
})

console.log (longerThanThree)
console.assert(JSON.stringify(longerThanThree) == JSON.stringify(["rabbit"]));

// Q4
// Use Filter to remove "cherry" from the  array (fruits)
let fruits = [
  { name: "orange", color: "orange" },
  { name: "cherry", color: "red" },
  { name: "grape", color: "purple" },
  { name: "watermelon", color: "green" },
];

const notCherry =

fruits.filter (function (x) {
  return x.name !== "cherry"
})

console.log (notCherry)

console.assert(
  JSON.stringify(filtered) ==
    JSON.stringify([
      { name: "orange", color: "orange" },
      { name: "grape", color: "purple" },
      { name: "watermelon", color: "green" },
    ])
);
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
