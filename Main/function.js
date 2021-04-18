

/*

 FOR USAGE IN RUN JS

*/


// Understanding argument vs parameter

function sq(number){
           /* ↑ This(number) is a paramtre  */
  console.log(number * number);
}

sq(3);
/* ↑ This(3) is an arguement  */

// using const as function
const square = function(number){
  return(number * number);
}

var x = square(5);
console.log(x);



// Greet
var greet = function(fname){
  console.log("Hello, " + fname);
}

greet("Rafid");


// Advance Greet
var greet = function(){
  console.log("Hello, " + arguments[0] +" "+ arguments[1] + " from " + arguments[2]);
}

greet("Rafid", "Ahmed", "Bangladesh")



// Print arguments without parametre
function dekhao(){
  for (i=0;i<arguments.length;i++){
    console.log(arguments[i]);
  }
}

dekhao("kjsak", "Hello", 1, 2, true);

