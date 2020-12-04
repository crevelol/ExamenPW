const csv = require('csv-parser');
const csv2 = require('csv-parse');
const fs = require('fs');

const res = [];

const bus = () => {
    fs.createReadStream('datos.csv')
        .pipe(csv({ skipLines: 4 }))

    .on('data', (row) => {
            res.push(row)
        })
        .on('end', () => {

            console.log('CSV file successfully processed');
        });
    console.log(res.filter('ECU'));
    return res;
}

module.exports = {
    bus
}