(function () {
var estherGreeter = {};
estherGreeter.name = " esther";
var greeting = "Hello";
estherGreeter.sayHello = function () {
  console.log(greeting + estherGreeter.name);
}

window.estherGreeter = estherGreeter;

}) (window);