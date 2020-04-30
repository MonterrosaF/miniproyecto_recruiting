const moment = require("moment");
const CSVToJSON = require("csvtojson");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const Request = require("request");
const fs = require("fs");

let fechas = [];
process.argv.forEach(function (val, index, array) {
  if (index > 1) {
    fechas.push(val);
  }
});

function obtenerDias(fechas) {
  let dias = [];
  let fechaInicial = moment(fechas[0]).format("YYYY-MM-DD");
  let fechaFinal = moment(fechas[1]).format("YYYY-MM-DD");

  fechaInicial = moment(fechaInicial);
  fechaFinal = moment(fechaFinal);

  while (fechaInicial.isSameOrBefore(fechaFinal)) {
    dias.push(fechaInicial.format("YYYY-MM-DD"));
    fechaInicial.add(1, "days");
  }

  return dias;
}

let dias = obtenerDias(fechas);

let total = [];
for (dia in dias) {
  Request.get(
    "https://apirecruit-gjvkhl2c6a-uc.a.run.app/compras/" + dias[dia],
    (error, response, body) => {
      if (error) {
        return console.dir(error);
      }
      total.push(JSON.parse(body));
      
      CSVToJSON()
        .fromFile(__dirname + "/base.csv")
        .then((source) => {
          source.push(JSON.stringify(total));
          const csvWriter = createCsvWriter({
            path: __dirname + "/" + 'Report' + ".csv",
            header: [
              { id: "date", title: "Fecha" },
              { id: "monto", title: "Monto" },
            ],
            fieldDelimiter: ",",
          });
          var newStr = source[0].substring(1, source[0].length-1);

          csvWriter
            .writeRecords(JSON.parse(newStr))
            .then(() => console.log("The CSV file was written successfully"));
        });
    }
  );
}
