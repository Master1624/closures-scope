// variables

var a; // declarando
var b = "b"; // declaramos o asignamos
b = "bb";
var a = "aa"; // redeclaracion de variables

// Global scope

var fruit = "apple"; // global
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = "Colombia"; // global
  console.log(country);
}

countries();
console.log(country);
