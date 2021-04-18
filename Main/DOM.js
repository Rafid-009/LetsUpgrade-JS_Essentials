//There 5 ways to select elements in DOM
// ById, ByClassName, ByTagName, querySelector, querySelectorAll

document.body.style.backgroundColor = "red";
document.body.style.color = "#fff";

const testId = document.getElementById('test');
console.log(testId);
testId.style.fontSize = "25px";

//getElement(s*)ByClassName
const testClass = document.getElementsByClassName('test');
console.log(testClass);
testClass[0].style.fontSize ="30px";
testClass[1].style.fontSize ="21px";testClass[1].style.fontWeight ="bold";

//getElement(s*)ByTagName
const testTag = document.getElementsByTagName('section');
console.log(testTag)

// We can select Id, Class and also Tag with query selector
const testQuery = document.querySelector('.test-query');
console.log(testQuery)

const testQueryAll = document.querySelectorAll('.test-query-all');
console.log(testQueryAll)

// Query Selector select the first element if multiple values inputs
const testMulti = document.querySelectorAll('article','h1');
console.log(testMulti)