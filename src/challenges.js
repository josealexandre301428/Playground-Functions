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
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = cat1 - mouse;
  let gato2 = cat2 - mouse;

  if(mouse > cat1){
    gato1 = mouse - cat1;
  }
  if(mouse > cat2){
    gato2 = mouse - cat2;
  }


  if(gato1 > gato2){
    return "cat2";
  }else if (gato1 < gato2){
    return "cat1"
  }else if (gato1 === gato2){
    return "os gatos trombam e o rato foge";
  }
}

catAndMouse(0, 3, 2);
catAndMouse(0, 6, 12);
catAndMouse(0, 3, 3);

// Desafio 8
function fizzBuzz(array) {
  let x = array;
  for(let i = 0; i < array.length; i += 1){
    
    if(array[i] % 3 === 0 && array[i] % 5 === 0){
      
      array[i] = "fizzBuzz";

      } else if(array[i] % 3 === 0){
        
        array[i] = "fizz";

      } else if(array[i] % 5 === 0){
        
        array[i] = "buzz";

      } else if (array[i] % 3 !== 0 || array[i] % 5 !==0){
      
        array[i] = "bug!";
    }
  }
    return x;
}


// Desafio 9 João Paulo e Daniel Saraiva da tribo B auxiliaram a encontrar o metodo split e join.
function encode(string) {
  let resultado = [];
  resultado = string.split("");
  
  for(let i = 0; i < resultado.length; i += 1){
    if(resultado[i] == 'a'){
      resultado[i] = '1';
    }
    if(resultado[i] === 'e'){
      resultado[i] = '2';
    }
    if(resultado[i] === 'i'){
      resultado[i] = '3';
    }
    if(resultado[i] === 'o'){
      resultado[i] = '4';
    }
    if(resultado[i] === 'u'){
      resultado[i] = '5';
    }
  }
  
  let encodeFrase = resultado.join('');
  return encodeFrase;
}

console.log(encode("hi there!"));

  
  

function decode(string) {
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
