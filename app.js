

const excel = require ('exceljs');
const { crearArchivo } = require ('./helpers/multiplicar');

const argv = require ('./config/yargs'); 

console.clear();

crearArchivo( argv.m, argv.l, argv.h )
     .then( nombreArchivo => console.log(nombreArchivo, (`--- Tabla del ${argv.m}`).green))
     .catch(err => console.log (err));


