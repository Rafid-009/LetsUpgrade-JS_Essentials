

/*

 FOR USAGE IN RUN JS

*/


//Obj structure starts
var person ={
  name : "Rifat",
  age : "17",
  likesCoding: false
};
console.log(person.name)
console.log(person['name'])
// Obj stucture ends


//For getting the keys
for (var key in person){
  console.log(key)
}


// For getting the values
for (var value in person){
  console.log(person[value])
}
