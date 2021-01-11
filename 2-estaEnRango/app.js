const estaEnRango = (valor, minimo, maximo) => {
    if ((valor >= minimo) && (valor <= maximo)){
       return true
    }
    else {
        return false
    }
}

console.log (estaEnRango(3, 1, 10)); 
console.log (estaEnRango(1, 1, 10));   
console.log (estaEnRango(10, 1, 10));  
console.log (estaEnRango(12, 1, 10)); 
console.log (estaEnRango(-3, 1, 10));  
