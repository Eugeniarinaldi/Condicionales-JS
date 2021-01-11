const puedeRenovarCarnet = (pasoTest, tieneMultasImpagas, pagoImpuestos) => {
    if ((pasoTest == true) && (tieneMultasImpagas == false) && (pagoImpuestos == true)){
    return true;
    }
    else{
        return false
    }
}

console.log (puedeRenovarCarnet(true, true, true));
console.log (puedeRenovarCarnet(true, true, false));   // false
console.log (puedeRenovarCarnet(true, false, true));   // true
console.log (puedeRenovarCarnet(true, false, false));  // false
console.log (puedeRenovarCarnet(false, true, true));   // false
console.log (puedeRenovarCarnet(false, true, false));  // false
console.log (puedeRenovarCarnet(false, false, true));  // false
console.log (puedeRenovarCarnet(false, false, false)); // false



