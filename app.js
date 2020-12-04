const argv = require('./config/yargs').argv;
const buscar = require('./buscador/buscar');


let comando = argv._[0];

switch (comando) {
    case 'mostrar':
        let mos = buscar.bus();

        break;
    case 'guardar':
        console.log('Guardar del case');
        console.log(da.name)

        break;
    default:
        console.log('Comando no reconocido');
}