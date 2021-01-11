const obtenerGeneracion = (año) => {
    if ((año >=1949) && (año <= 1968)){
        return 'Baby Boomer'
    }   if ((año >= 1969) && (año <= 1980)){
        return 'Generación X'
    }   if ((año >=1981) && (año <=1993)){
        return 'Millenials'
    }   if ((año >= 1994) && (año <= 2010)){
        return 'Generación Z'
    }
}

console.log (obtenerGeneracion (1970));