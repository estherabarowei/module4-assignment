(function () {
var estherGreeter = {};
estherGreeter.name = " esther";
var greeting = "Hello";
estherGreeter.sayHello = function () {
  console.log(greeting + estherGreeter.name);
}

window.estherGreeter = estherGreeter;

}) (window);


(function () {
var oyinGreeter = {};
oyinGreeter.name = " oyin";
var greeting = "Hello";
oyinGreeter.sayHello = function () {
  console.log(greeting + oyinGreeter.name);
}

window.oyinGreeter = oyinGreeter;

}) (window);
