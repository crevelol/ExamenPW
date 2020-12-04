const mostrar = {
    demand: true,
    alias: 'm',
    desc: 'Muestra de los datos del csv'
}

const guardar = {
    default: true,
    alias: 'g',
    desc: 'Guarda los datos del csv'
}

const argv = require('yargs')
    .command('mostrar', 'Mostar los datos', {
        mostrar
    })
    .command('guardar', 'Guardar los datos', {
        guardar
    })
    .help()
    .argv;

module.exports = {
    argv
}