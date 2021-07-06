const ModuloPelis = require("./pelis.js");

function parseArgv() {
  const obj = {};
  const argv = process.argv.slice(2);
  argv.forEach(function (item, index) {
    if (item.startsWith("--")) {
      const nombreFuncion = item.slice(2);
      obj[nombreFuncion] = argv[index + 1];
    }
  });
  return obj;
}

function main() {
  const llamadaFuncion = parseArgv();

  console.table(ModuloPelis.searchCriteria(llamadaFuncion));
}

main();
