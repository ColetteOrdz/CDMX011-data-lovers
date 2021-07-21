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

let ghibliFilms = data.films; //constante donde se almacena toda la información de la BD
//showTitle.innerHTML = infoFilms(ghibliFilms);
//infoFilms(ghibliFilms); //Le tengo que hablar a la función para darle el parámetro

let activeOpt = document.querySelector("#selectorOrden"); //Llama al botón de select por ID
activeOpt.addEventListener("click", ()=>{
    let showSort = document.querySelector(".sortSelector");
    let currentOpt = showSort.options[showSort.selectedIndex].value; //Captura/trae el valor de la option
    console.log(currentOpt);
    sortFilms(currentOpt) //Se está invocando a la función. Para que la función trabaje, necesita su respectivo valor del selector
    let sortData = sortFilms(currentOpt) //Se está guardando el valor de retorno de la función
    ghibliFilms = sortData;
    var infoFilms = ghibliFilms.map( titulo => { 
        return `
        <div class="card">
        <img src="${titulo.poster}" alt=${titulo.title}>
        <h4>${titulo.title}</h4>
        <p>${titulo.release_date}</p>
        <p>Score ${titulo.rt_score}%</p>
        </div>
        `;
    })
    showTitle.innerHTML = infoFilms;
});
 

// Const donde se aplica el método .map() para imprimir la información con una función, en las tarjetas



