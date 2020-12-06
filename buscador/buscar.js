const csv = require('csv-parser');
const fs = require('fs');
const datos = require('../resultados/datos');

let vec = [];

const bus = (ani, pai) => {

    const res = [];
    fs.createReadStream('datos.csv')
        .pipe(csv({ skipLines: 4 }))
        .on('data', (row) => {
            res.push(row)
        })
        .on('end', () => {

            datos.reco(res, ani, pai)
        });
}

module.exports = {
    bus
}