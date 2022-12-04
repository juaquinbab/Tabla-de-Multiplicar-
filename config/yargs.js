const yargs = require('yargs');
const { demandOption, option, describe } = require('yargs');

const argv = require('yargs')

.option('m',{ 
    alias: 'Multi',
    type: 'number',
    demandOption: true,
    describe: 'Es el multiplicador de la tabla'

})
.option('l',{ 
    alias: 'listar',
    type: 'boolean',
    default : false,
    describe: 'Muestra la tabla en consola'
})
.option('h',{ 
    alias: 'hasta',
    type: 'number',
    default : 10,
    describe: 'Muestra hasta donde quieres la tabla'

})


.check( (argv, option) => {
    if (isNaN ( argv.m)){
    throw 'El Multiplicador debe ser un Numero' 
      }
    
      return true;
})

      .argv;

module.exports = argv;