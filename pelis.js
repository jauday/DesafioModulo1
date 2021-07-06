const fs = require("fs");

function getPelis() {
  const pelis = fs.readFileSync(__dirname + "/pelis.json");
  return JSON.parse(pelis);
}

function sort(propiedad, listaPeliculas) {
  const pelisOrdenadas = listaPeliculas.sort(function (a, b) {
    if (a[propiedad] > b[propiedad]) {
      return 1;
    }
    if (a[propiedad] < b[propiedad]) {
      return -1;
    }
    return 0;
  });
  return pelisOrdenadas;
}

function search(key, listaPeliculas) {
  const busqueda = listaPeliculas.filter(function (item) {
    let tituloPelicula = item.title.toLowerCase();
    if (tituloPelicula.includes(key.toLowerCase())) return item;
  });
  return busqueda;
}

function tag(key, listaPeliculas) {
  return listaPeliculas.filter(function (item) {
    return item.tags.includes(key);
  });
}

function noFormat(listaPeliculas) {
  return JSON.stringify(listaPeliculas);
}

function searchCriteria(argumento) {
  let pelis = getPelis();
  if (argumento.sort) {
    pelis = sort(argumento.sort, pelis);
  }
  if (argumento.search) {
    pelis = search(argumento.search, pelis);
  }
  if (argumento.tag) {
    pelis = tag(argumento.tag, pelis);
  }
  if (argumento["no-format"]) {
    pelis = noFormat(pelis);
  }
  return pelis;
}

exports.searchCriteria = searchCriteria;
