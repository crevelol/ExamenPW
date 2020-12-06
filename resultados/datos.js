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

module.exports = {
    reco
}