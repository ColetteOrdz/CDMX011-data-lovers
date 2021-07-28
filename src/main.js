//import  data  from './data/ghibli/ghibli.js'; 
import  studioGhibli  from './data.js'; 

const showFilms = document.getElementById("titulos"); 

showFilms.innerHTML = builtCards(studioGhibli.mostrarPelis());

//Filtros por categorías//
document.getElementById("selectYear").addEventListener("change", function (e) {
  let year =  e.currentTarget.value;
  showFilms.innerHTML = builtCards(studioGhibli.filterByYear(year));
  document.getElementById("selectScore").value = "";
  document.getElementById("selectDirector").value = "";
  document.getElementById("selectProducer").value = "";
  document.getElementById("selectOrdenarTitulo").value = "";
  document.getElementById("selectOrdenarYear").value = "";
});

document.getElementById("selectScore").addEventListener("change", function (e){
  let score = e.currentTarget.value;
  showFilms.innerHTML = builtCards(studioGhibli.filterByScore(score));
  document.getElementById("selectYear").value = "";
  document.getElementById("selectDirector").value = "";
  document.getElementById("selectProducer").value = "";
  document.getElementById("selectOrdenarTitulo").value = "";
  document.getElementById("selectOrdenarYear").value = "";
});

document.getElementById("selectDirector").addEventListener("change", function (e){
  let director = e.currentTarget.value;
  showFilms.innerHTML = builtCards(studioGhibli.filterByDirector(director));
  document.getElementById("selectYear").value = "";
  document.getElementById("selectScore").value = "";
  document.getElementById("selectProducer").value = "";
  document.getElementById("selectOrdenarTitulo").value = "";
  document.getElementById("selectOrdenarYear").value = "";
});

document.getElementById("selectProducer").addEventListener("change", function (e){
  let productor = e.currentTarget.value;
  showFilms.innerHTML = builtCards(studioGhibli.filterByProducer(productor));
  document.getElementById("selectYear").value = "";
  document.getElementById("selectScore").value = "";
  document.getElementById("selectDirector").value = "";
  document.getElementById("selectOrdenarTitulo").value = "";
  document.getElementById("selectOrdenarYear").value = "";
});

//Orden por año y título//
document.getElementById("selectOrdenarTitulo").addEventListener("change", function (e){
  let orden = e.currentTarget.value;
  showFilms.innerHTML = builtCards(studioGhibli.ordenTitulo(orden));
});

document.getElementById("selectOrdenarYear").addEventListener("change", function (e){
  let orden = e.currentTarget.value;
  showFilms.innerHTML = builtCards(studioGhibli.ordenYear(orden));
});

//Información de las tajetas (frente)//
function builtCards(studioGhibli) {
  let showFilms = "";
  studioGhibli.map( titulo => { 
    showFilms += `
    <div class="tarjetas">
    <div class="card">
          <img src="${titulo.poster}" alt=${titulo.title}>
          <h4>${titulo.title}</h4>
          <p>${titulo.release_date}</p>
          <p>Score: ${titulo.rt_score}%</p>
    </div>
    <div class="card backCard active"
        <p> Director: <b>${titulo.director}</b></p>
        <p> Productor: <b>${titulo.producer}</b></p>
        <p> Description: <br> ${titulo.description}</p>
        </div>
        </div>
    `;
  });
  return showFilms;
}

//Descripción de las películas (modal/atrás)//
function backCards(studioGhibli) {
  let showFilms = "";
  studioGhibli.map( titulo => { 
    showFilms += `
    <div class="card backCard">
          <p>Director: ${titulo.director}</p>
          <p>Producer: ${titulo.producer}</p>
          <p>Description: ${titulo.description}%</p>
    </div>
    `;
  });
  return showFilms;
}

/*// Const donde se aplica el método .map() para imprimir la información con una función, en las tarjetas
const infoFilms = ghibliFilms.map( titulo => { 
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
//console.log(titleYear);
*/
/*var infoFilms = (films) => {
    return films.map( titulo => { 
    return `
    <div class="card">
    <img src="${titulo.poster}" alt=${titulo.title}>
    <h4>${titulo.title}</h4>
    <p>${titulo.release_date}</p>
    <p>Score ${titulo.rt_score}%</p>
    </div>
    `;
})};
*/ 


