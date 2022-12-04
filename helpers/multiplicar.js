const { execSync } = require('child_process');
const fs = require ('fs');
const colors = require ('colors');
const crearArchivo = async( Multi = 5, listar = false, hasta = 10 ) => {

  try{

    let salida = '';
    let consola = '';

    for (let i = 1; i <=hasta; i++) {
      salida +=  `${Multi}  x ${i}   =    ${ Multi * i }\n`;
      consola +=  `${colors . yellow (Multi)} ${colors . green ('x')}   ${i} = ${ colors . cyan (Multi * i) }\n`;
    }  
      
      
    if (listar){

      console.log(consola); 
    
  }
  
    fs.writeFileSync( `./Tablas/tabla ${Multi}.xls`, salida,);
         
  
    return ('Tabla creada').rainbow;
  }catch (err){
    throw err
  }
  
}
module.exports = {
  crearArchivo
}

