import  data  from './data/ghibli/ghibli.js'; 
import { sortFilms } from './data.js'; 

const showTitle = document.getElementById("titulos"); 
//var infoFilms = (films) => {
  //  return films.map( titulo => { 
  //  return `
  //  <div class="card">
  //  <img src="${titulo.poster}" alt=${titulo.title}>
  //  <h4>${titulo.title}</h4>
  //  <p>${titulo.release_date}</p>
  //  <p>Score ${titulo.rt_score}%</p>
  //  </div>
  //  `;
//})}; 

// Const donde se aplica el método .map() para imprimir la información con una función, en las tarjetas
const infoFilms = ghibliFilms.map( titulo => { 
    return `
    <div class="card">
          <img src="${titulo.poster}" alt=${titulo.title}>
          <h4>${titulo.title}</h4>
          <p>${titulo.release_date}</p>
          <p>Score ${titulo.rt_score}%</p>
          <p><a href="otra_pagina.html"> Ver mas</a></p>
        </div>
    `;
})
showTitle.innerHTML = infoFilms;

//Muestro los arrays de las películas de acuerdo a su puntuación
const filterHighScore = ghibliFilms.filter(film => film.rt_score == 89);
const filterMediumScore = ghibliFilms.filter(film => film.rt_score >= 80 && film.rt_score < 90);
const filterLowScore = ghibliFilms.filter(film => film.rt_score < 80);  
    console.log(filterHighScore);


//Evento onchange del select Año osea que se filtrara cuando se selectione una opcion
//del select
document.getElementById("selectYear").addEventListener("change", function(){

    const tarjetasFiltradas = ghibliFilms.filter(film => film.release_date == this.value);

    const cards = tarjetasFiltradas.map( titulo => { 
        return `
        <div class="card">
              <img src="${titulo.poster}" alt=${titulo.title}>
              <h4>${titulo.title}</h4>
              <p>${titulo.release_date}</p>
              <p>Score ${titulo.rt_score}%</p>
              <p><a href="otra_pagina.html"> Ver mas</a></p>
            </div>
        `;
    })
    showTitle.innerHTML = cards;
})  

//Evento onchange del select Año osea que se filtrara cuando se selectione una opcion
//del select
document.getElementById("selectScore").addEventListener("change", function(){

    const tarjetasFiltradas = ghibliFilms.filter(film => film.rt_score == this.value);

    const cards = tarjetasFiltradas.map( titulo => { 
        return `
        <div class="card">
              <img src="${titulo.poster}" alt=${titulo.title}>
              <h4>${titulo.title}</h4>
              <p>${titulo.release_date}</p>
              <p>Score ${titulo.rt_score}%</p>
              <p><a href="otra_pagina.html"> Ver mas</a></p>
            </div>
        `;
    })
    showTitle.innerHTML = cards;
})   

//Evento onchange del select Año osea que se filtrara cuando se selectione una opcion
//del select
document.getElementById("selectDirector").addEventListener("change", function(){

    const tarjetasFiltradas = ghibliFilms.filter(film => film.director == this.value);

    const cards = tarjetasFiltradas.map( titulo => { 
        return `
        <div class="card">
              <img src="${titulo.poster}" alt=${titulo.title}>
              <h4>${titulo.title}</h4>
              <p>${titulo.release_date}</p>
              <p>Score ${titulo.rt_score}%</p>
              <p><a href="otra_pagina.html"> Ver mas</a></p>
            </div>
        `;
    })
    showTitle.innerHTML = cards;
})   
//console.log(titleYear);



