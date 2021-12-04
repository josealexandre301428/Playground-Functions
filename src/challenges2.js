// Desafio 10
function techList(array, nome) {
  let lista;
    lista = array;
    array.sort();
  let resultado = [];
  let object = {};
  if(lista.length == 0){
    return 'Vazio!'}

  for(let i = 0; i < lista.length; i += 1){
    
      object['name'] = nome;
      object['tech'] = lista[i];

      resultado.push(object);
      object = {};
      
    }
    
  
  return resultado;
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'));
    
 
   


// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
