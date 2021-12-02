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
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let empates = ties;

  let resultado = vitorias + empates;

  return resultado;
  
}

footballPoints(14, 8);
footballPoints(1, 2);
footballPoints(0, 0);

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let cont = 0;
  let negativos = [];
  for(let i = 0; i < array.length; i += 1){
    if(array[i] > maior){
      maior = array[i];
    } 
  }
  for(let i = 0; i < array.length; i += 1){
    if(array[i] === maior){
      cont += 1;
    } 
  }
  return cont;
}

let x =[9, 1, 2, 3, 9, 5, 7];
let y =[0, 4, 4, 4, 9, 2, 1];
let a =[-2, -2, -1];
let z =[0, 0, 0];


highestCount(x);
highestCount(y);
highestCount(a);
highestCount(z);

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
