//import  data  from './data/ghibli/ghibli.js'; 
import  studioGhibli  from './data.js'; 

const showFilms = document.getElementById("titulos"); 

showFilms.innerHTML = builtCards(studioGhibli.showingFilms());

//Filtros por categorías//
document.getElementById("selectYear").addEventListener("change", function (e) {
  let year =  e.currentTarget.value;
  showFilms.innerHTML = builtCards(studioGhibli.filterByYear(year));
  document.getElementById("selectScore").value = "";
  document.getElementById("selectDirector").value = "";
  document.getElementById("selectProducer").value = "";
  document.getElementById("selectSortTitle").value = "";
  document.getElementById("selectSortYear").value = "";
});

document.getElementById("selectScore").addEventListener("change", function (e){
  let score = e.currentTarget.value;
  showFilms.innerHTML = builtCards(studioGhibli.filterByScore(score));
  document.getElementById("selectYear").value = "";
  document.getElementById("selectDirector").value = "";
  document.getElementById("selectProducer").value = "";
  document.getElementById("selectSortTitle").value = "";
  document.getElementById("selectSortYear").value = "";
});

document.getElementById("selectDirector").addEventListener("change", function (e){
  let director = e.currentTarget.value;
  showFilms.innerHTML = builtCards(studioGhibli.filterByDirector(director));
  document.getElementById("selectYear").value = "";
  document.getElementById("selectScore").value = "";
  document.getElementById("selectProducer").value = "";
  document.getElementById("selectSortTitle").value = "";
  document.getElementById("selectSortYear").value = "";
});

document.getElementById("selectProducer").addEventListener("change", function (e){
  let productor = e.currentTarget.value;
  showFilms.innerHTML = builtCards(studioGhibli.filterByProducer(productor));
  document.getElementById("selectYear").value = "";
  document.getElementById("selectScore").value = "";
  document.getElementById("selectDirector").value = "";
  document.getElementById("selectSortTitle").value = "";
  document.getElementById("selectSortYear").value = "";
});

//Orden por año y título//
document.getElementById("selectSortTitle").addEventListener("change", function (e){
  let order = e.currentTarget.value;
  showFilms.innerHTML = builtCards(studioGhibli.sortByTitle(order));
});

document.getElementById("selectSortYear").addEventListener("change", function (e){
  let order = e.currentTarget.value;
  showFilms.innerHTML = builtCards(studioGhibli.sortByYear(order));
  //console.log(typeof order);
});


//Información de las tajetas (frente/atrás)//
function builtCards(studioGhibli) {
  let showFilms = "";
  studioGhibli.map( film => { 
    showFilms += `
    <div class="tarjeta">
     <div class="tarjeta__inner">
      <div class="card frontCard">
          <img src="${film.poster}" alt=${film.title}>
          <h4>${film.title}</h4>
          <p>${film.release_date}</p>
          <p>Score: ${film.rt_score}%</p>          
      </div>
      <div class="card backCard">
          <p>Director: ${film.director}</p>
          <p>Producer: ${film.producer}</p>
          <p>Description: ${film.description}</p>
      </div>
     </div> 
    </div>
    `;
  });
  return showFilms;
}

//Descripción de las películas (modal/atrás)//
/*
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
*/


/*
 <div class="card backCard active"
        <p> Director: <b>${titulo.director}</b></p>
        <p> Productor: <b>${titulo.producer}</b></p>
        <p> Description: <br> ${titulo.description}</p>
        </div>
// Const donde se aplica el método .map() para imprimir la información con una función, en las tarjetas
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


