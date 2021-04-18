/*

 FOR USAGE IN RUN JS

*/


let shopping = ["badam","ilish","khejur"];
shopping[3] = "veges";
console.log(shopping);



console.log(shopping.length)


let sequence = [1,2,3,8,10];
for (let i = 0;i < sequence.length;i++) {
  console.log(sequence[i]);
}



// Spliting words inside string
let shopping2 = 'muri, jhuri, beguni, dab';
let shop2_data = shopping2.split(", ");
console.log(shop2_data)



//Convert Array to String
shopping
let convertS = shopping.toString();
console.log(convertS)


// Add element at the end of the array
let addAtEnd = shopping.push("dudh");
console.log(addAtEnd)
shopping


// remove the last element from the array
let popEnd = shopping.pop()
console.log(shopping)


// Add elements at the first of the array
let addAtFirst = shopping.unshift('dudh');
console.log(shopping)


//Remove the first element
let popFirst = shopping.shift();
shopping

// Select specific element by index

// array.splice(starting element, number of elemnts for printing to the right);

let testArray = [1,2,3,5,4,5,6]
console.log(testArray.splice(2,4))
console.log(testArray.splice(0))

// splice cut elements from the array
//======================================

// Slice keeps the array intacted
let array = [1,2,3,4,5]
// console.log(array.slice(2))
// console.log(array.slice(-2))

console.log(array.slice(2,4))
// slice doesn't include the last element


