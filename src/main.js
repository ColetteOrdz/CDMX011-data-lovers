//import ghibli from './data/ghibli/ghibli.json';
import  data  from './data/ghibli/ghibli.js';

const showTitle = document.getElementById("titulos");
const ghibliFilms = data.films;

var titulos = ghibliFilms.map( titulo => {
    return titulo.title;
})

showTitle.innerHTML = titulos;

console.log(titulos);



