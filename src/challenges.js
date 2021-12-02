// Desafio 1
function compareTrue(p1, p2) {
 if(p1 === true && p2 === true){
   return true;
 } else{
   return false;
 }
}


// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth)/2;
  return area;
}

calcArea(10, 50);
calcArea(5 , 2);
calcArea(51, 1);


// Desafio 3
function splitSentence(string) {
  let resultado = string.split(" ");
  return resultado;
}


splitSentence("go Trybe");

splitSentence('vamo que vamo');

splitSentence('foguete');




// Desafio 4
function concatName(array) {
  let primeiro = array[0];
  let ultimo = array[array.length - 1];

  let resultado = ultimo + ', ' + primeiro;
  
  return resultado;
}

let arr1 = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
let arr2 = ['foguete', 'não', 'tem', 'ré'];
let arr3 = ['captain', 'my', 'captain'];

concatName(arr1);
concatName(arr2);
concatName(arr3);

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
