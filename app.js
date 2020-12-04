const argv = require('./config/yargs').argv;

let comando = argv._[0];

switch (comando) {
    case 'mostrar':
        console.log('Mostrar del case');
        break;
    case 'guardar':
        console.log('Guardar del case');
        break;
    default:
        console.log('Comando no reconocido');
}