const esPositivoONegativo = (numero) => {
    if (numero >= 0){
        return 'es positivo'
    } if (numero <= 0){
        return 'es negativo'
    }
}

console.log (esPositivoONegativo (3));
console.log (esPositivoONegativo (-5));