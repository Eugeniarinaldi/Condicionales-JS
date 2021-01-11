const esHoraValida = (hora) => {
    const horario = hora.split (':');
    if (horario [0] >= 00 && horario [0] <= 24 && horario [1] <=59){
        return true
    }   else{

    } return false
}

console.log (esHoraValida('12:23')) // true
console.log (esHoraValida('12:65')) // false
console.log (esHoraValida('28:05')) // false
console.log (esHoraValida('00:00')) // true