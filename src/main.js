//import  data  from './data/ghibli/ghibli.js'; 
import  studioGhibli  from './data.js'; 

const showFilms = document.getElementById("titulos"); 

showFilms.innerHTML = builtCards(studioGhibli.mostrarPelis());

//Filtros por categorías//
document.getElementsById("selectYear").addEventListener("change", function (e) {
  let year =  e.currentTarget.value;
  showFilms.innerHTML = builtCards(studioGhibli.filterByYear(year));
  document.getElementsById("selectScore").value = "";
  document.getElementsById("selectDirector").value = "";
  document.getElementsById("selectProducer").value = "";
  document.getElementsById("selectOrdenarTitulo").value = "";
  document.getElementsById("selectOrdenarYear").value = "";
});

document.getElementsById("selectScore").addEventListener("change", function (e){
  let score = e.currentTarget.value;
  showFilms.innerHTML = builtCards(studioGhibli.filterByScore(score));
  document.getElementsById("selectYear").value = "";
  document.getElementsById("selectDirector").value = "";
  document.getElementsById("selectProducer").value = "";
  document.getElementsById("selectOrdenarTitulo").value = "";
  document.getElementsById("selectOrdenarYear").value = "";
});

document.getElementsById("selectDirector").addEventListener("change", function (e){
  let director = e.currentTarget.value;
  showFilms.innerHTML = builtCards(studioGhibli.filterByDirector(director));
  document.getElementsById("selectYear").value = "";
  document.getElementsById("selectScore").value = "";
  document.getElementsById("selectProducer").value = "";
  document.getElementsById("selectOrdenarTitulo").value = "";
  document.getElementsById("selectOrdenarYear").value = "";
});

document.getElementsById("selectProducer").addEventListener("change", function (e){
  let productor = e.currentTarget.value;
  showFilms.innerHTML = builtCards(studioGhibli.filterByProducer(productor));
  document.getElementsById("selectYear").value = "";
  document.getElementsById("selectScore").value = "";
  document.getElementsById("selectDirector").value = "";
  document.getElementsById("selectOrdenarTitulo").value = "";
  document.getElementsById("selectOrdenarYear").value = "";
});

//Orden por año y título//
document.getElementsById("selectOrdenarTitulo").addEventListener("change", function (e){
  let orden = e.currentTarget.value;
  showFilms.innerHTML = builtCards(studioGhibli.ordenTitulo(orden));
});

document.getElementsById("selectoOrdenarYear").addEventListener("change", function (e){
  let orden = e.currentTarget.value;
  showFilms.innerHTML = builtCards(studioGhibli.ordenYear(orden));
});

//Información de las tajetas (frente)//
function builtCards(studioGhibli) {
  let showFilms = "";
  studioGhibli.map( titulo => { 
    showFilms += `
    <div class="card">
          <img src="${titulo.poster}" alt=${titulo.title}>
          <h4>${titulo.title}</h4>
          <p>${titulo.release_date}</p>
          <p>Score: ${titulo.rt_score}%</p>
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


