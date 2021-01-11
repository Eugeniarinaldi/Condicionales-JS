const edad = parseInt(prompt('Dime la edad'));
const tieneAutorizacion = prompt('Dime si tiene permiso (si/no)').toUpperCase();

const puedeVerPelicula = (edad, tieneAutorizacion) => edad >= 15 || tieneAutorizacion === 'SI';

console.log(puedeVerPelicula(edad, tieneAutorizacion));
