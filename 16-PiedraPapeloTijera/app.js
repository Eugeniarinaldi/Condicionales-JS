const jugarPiedraPapelTijera = (a , b) =>{
    if ((a === 'piedra' || a === 'tijera' || a === 'papel') && (b === 'piedra' || b === 'tijera' || b === 'papel')){
        if (a === 'piedra' && b === 'papel' || a === 'papel' && b === 'piedra'){
        return '¡Ganó papel!'
        } else if (a === 'tijera' && b === 'papel' || a === 'papel' && b === 'tijera') {
            return '¡Ganó tijera!'
        } else if (a === 'piedra' && b === 'tijera' || a === 'tijera' && b === 'piedra'){
            return '¡Ganó piedra!'
        } else {
            return '¡Esto es un empate!'
    }
    } else {     
        return 'No sabe jugar'
    }
};



console.log(jugarPiedraPapelTijera('papel', 'piedra'));
console.log(jugarPiedraPapelTijera('tijera', 'piedra'));
console.log(jugarPiedraPapelTijera('tijera', 'papel'));
console.log(jugarPiedraPapelTijera('papel', 'loro'));
