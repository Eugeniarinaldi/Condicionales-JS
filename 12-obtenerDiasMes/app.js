const obtenerDiasMes = (mes) => {
    if (mes === 'enero' || mes === 'marzo' || mes === 'mayo' || mes === 'julio' || mes===' agosto' || mes === 'octubre' || mes === 'diciembre') {
        return 31;
    } else if (mes === 'abril' || mes === 'junio' || mes === 'septiembre' || mes === 'noviembre'){
        return 30
    } else if (mes === 'febrero'){
        return 29
    }
}

console.log (obtenerDiasMes("diciembre")) // 31
console.log (obtenerDiasMes("febrero"))   // 29