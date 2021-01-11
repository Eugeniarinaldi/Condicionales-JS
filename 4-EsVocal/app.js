// solucion 1
// const esVocal = letra => {
//   if(letra === 'a'|| letra === 'e'|| letra === 'i' || letra === 'o'|| letra === 'u'){
//     return false;
//   } else {
//     return true;
//   }
// };


// Opcion 2
// const esVocal = letra => {  
//   let result = false;
//   if(letra === 'a'|| letra === 'e'|| letra === 'i' || letra === 'o'|| letra === 'u'){
//     result = true;
//   } else {
//     result = false;
//   }
//   return !result;
// };
// console.log(esVocal('o'));


// solucion 3
const esVocal = letra => !(letra === 'a'|| letra === 'e'|| letra === 'i' || letra === 'o'|| letra === 'u');
  

console.log(esVocal('a'));
