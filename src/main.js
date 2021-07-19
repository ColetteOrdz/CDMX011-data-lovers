//import ghibli from './data/ghibli/ghibli.json';
import  data  from './data/ghibli/ghibli.js';

const showTitle = document.getElementById("titulos");
const ghibliFilms = data.films;

var infoFilms = ghibliFilms.map( titulo => {
    return `
    <div class="card">
          <img src="${titulo.poster}">
          <h4>${titulo.title}</h4>
          <p>${titulo.release_date}</p>
          <a href="#">Leer más</a>
        </div>
    `;
})

showTitle.innerHTML = infoFilms;

//console.log(titleYear);



