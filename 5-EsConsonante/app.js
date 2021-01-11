//1° resolucion

const vocales = /^[aAeEiIoOuU]$/;
const esVocal = (letra) => !vocales.test(letra); 
console.log(esVocal('f'));

//2° resolucion

const vocales = /^[aeiou]$/i;
const esVocal = (letra) => !vocales.test(letra);
console.log(esVocal('p'));

//3° resolucion

const vocales = /^[aeiou]$/gi;
const esVocal = (letra) => !vocales.test(letra);
console.log(esVocal('p'));
