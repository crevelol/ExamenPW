const argv = require('./config/yargs').argv;
const buscar = require('./buscador/buscar');


let comando = argv._[0]
let comando2 = process.argv[4];
let comando3 = process.argv[5];


switch (comando) {
    case 'mostrar':
        buscar.bus(comando2, comando3);
        break;
    case 'guardar':
        buscar.gua(comando2, comando3);
        break;
    default:
        console.log('Comando no reconocido');
}