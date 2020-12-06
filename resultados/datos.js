const fs = require('fs');

const reco = (res, anio, code) => {
    let anio2 = "_" + anio;
    for (var i = 0; i < res.length; i++) {
        it = res[i];
        if (code == it.Country_Code) {
            console.log("Datos: " + it.Indicator_Name);
            console.log("Pais: " + it.Country_Name);
            console.log("Año: " + anio);
            console.log("Valor: " + it[anio2]);
        }
    }
}

const guar = (res, anio, code) => {
    let anio2 = "_" + anio;
    fs.appendFile('datos.txt', 'datos', (err) => {
        if (err) throw err;

    });
    for (var i = 0; i < res.length; i++) {
        it = res[i];
        if (code == it.Country_Code) {
            fs.writeFile('datos.txt', 'Datos: ' + it.Indicator_Name + '\nPais: ' + it.Country_Name + '\nAño: ' + anio + '\nValor: ' + it[anio2], (err) => {
                if (err) throw err;
            });
            console.log('---------------------------------');
            console.log('Archivo Creado Satisfactoriamente');
            console.log('---------------------------------');
            console.log('Archivo cargados Satisfactoriamente');
        }
    }
}

module.exports = {
    reco,
    guar
}