//import ghibli from './data/ghibli/ghibli.json';
import  data  from './data/ghibli/ghibli.js';

const showTitle = document.getElementById("titulos");
const ghibliFilms = data.films;

var titleYear = ghibliFilms.map( titulo => {
    return `${titulo.title} ${titulo.release_date}`;
})

showTitle.innerHTML = titleYear;

console.log(titleYear);



