

/*

 FOR USAGE IN RUN JS

*/


// When we pass something by value we are creating a deep copy
//In primitive data type JS alwys create Deep Copy.


// When we pass something by reference we are creating a shallow copy
//


let originalVariable1 = 'I am located in memeory';

originalVariable1 = "Now, I am changed";

let originalVariable2 = "I am second variable allocated in memory";
//=======================================
//----------Deep  Copy Starts-------------//
let originalVariable = "I am allocated in memory";

// we can't use const instead of let

let deepCopy = originalVariable;

// originalVariable is allocated in memory
console.log(originalVariable);
// deepCopy is a also allocated in memory
console.log(deepCopy);

// Update
originalVariable = "Update in the Original";
console.log(originalVariable);
console.log(deepCopy);
//----------- Deep Copy Ends--------------//

//----------- Shallow Copy Starts---------//

let originalObj = {
	title:"Kisu akta",
  author:"RD",
  date:"01 Jan, 1009",
}

let shallowCopy = originalObj;
console.log(originalObj);

console.log(shallowCopy);

// Update shallowCopy
shallowCopy.title = "Perahin";
shallowCopy.author = "Antik Mahmud";
shallowCopy.date = "04 August, 2021";

// The Original Object is also updated
console.log(originalObj)

// With Array
let originalArray = ["start", 1,2,3];
let myShallowCopy = originalArray;

originalArray[4] = "Breakup";
originalArray.push(false);

console.log(originalArray);

console.log(myShallowCopy);

// Update shallow copy
myShallowCopy.pop();
myShallowCopy.push("End");

console.log(originalArray);

//----------- Shallow Copy Ends---------//
//===========================================================
//         TASK 1

const array1 = [1,2,3,4];
const array2 = ["five","six"];

const mergeArray = [...array1, ...array2];
console.log(mergeArray)

//===========================================================
//          TASK 2

const obj1 = {
  name:"Rafid",
  age:10
}
const obj2 = {
  address:'Urotpur',
  city:"Ulala",
}

const mergeObj = {...obj1,...obj2};
console.log(mergeObj)
