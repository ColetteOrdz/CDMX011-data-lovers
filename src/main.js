import  data  from './data/ghibli/ghibli.js'; 

const showTitle = document.getElementById("titulos"); 
const ghibliFilms = data.films; //constante donde se almacena toda la información de la BD

// Const donde se aplica el método .map() para imprimir la información con una función, en las tarjetas
const infoFilms = ghibliFilms.map( titulo => { 
    return `
    <div class="card">
          <img src="${titulo.poster}">
          <h4>${titulo.title}</h4>
          <p>${titulo.release_date}</p>
          <p href="#">Score ${titulo.rt_score}%</p>
        </div>
    `;
})

showTitle.innerHTML = infoFilms;

//console.log(infoFilms);



