

/*

 FOR USAGE IN RUN JS

*/


// Print Array with Spread Operator
const Planets = ["Sun", "Mercury", "Venus", "Earth","Mars","Jupiter","Saturn","Uranus","Neptune"];

console.log(...Planets);

// Print Array with Spread Operator
let myObj ={
  name:"Rafid",
  bio:"Bindash",
  age:19,
}
// We have to use '{}' for obj
console.log({...myObj})

//=================================  
const deepCopy = [...Planets];
console.log(deepCopy);

console.log(Planets)

Planets.pop();

console.log(Planets);
console.log(deepCopy);

console.log('=============================')

const shallowCopy = Planets;
console.log(shallowCopy);

Planets.pop();
console.log(Planets);
console.log(shallowCopy);

console.log('=============================')
//         TASK 1

const array1 = [1,2,3,4];
const array2 = ["five","six"];

const mergeArray = [...array1, ...array2];
console.log(mergeArray)

console.log('=============================')
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


