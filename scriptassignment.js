(function () {
var danielGreeter = {};
danielGreeter.name = " daniel";
var greeting = "Goodbye";
danielGreeter.sayGoodbye = function  () {
     console.log(greeting + danielGreeter.name);
 }

window.danielGreeter = danielGreeter;

}) (window);

(function () {
var francisGreeter = {};
francisGreeter.name = "francis";
var greeting = " is a good boy";
francisGreeter.sayisagoodboy = function  () {
     console.log(francisGreeter.name + greeting);
}

window.francisGreeter = francisGreeter

}) (window); 
   