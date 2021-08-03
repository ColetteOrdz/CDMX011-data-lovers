//import { parse } from '@babel/core'; //
import  data  from './data/ghibli/ghibli.js'; 

const ghibliFilms = data.films; //constante donde se almacena toda la información de la BD
let cardFilt = ghibliFilms;

const studioGhibli = {

  "showingFilms": function () {
    return ghibliFilms
  },

  // Funciones para filtrar por categorías //

  "filterByYear": function (year) {
    cardFilt = ghibliFilms.filter(film => film.release_date == year)
    return cardFilt;
  },

  "filterByScore": function (score) {
    cardFilt = ghibliFilms.filter(film => film.rt_score == score)
    return cardFilt;
  },

  "filterByDirector": function (director) {
    cardFilt = ghibliFilms.filter (film => film.director == director)
    return cardFilt;
  },

  "filterByProducer": function (productor) {
    cardFilt = ghibliFilms.filter (film => film.producer == productor)
    return cardFilt;
  },

  // Función para ordenar por a-z y z-a //

  "sortByTitle": function (order) {
    let sortCard;
    if (order == "a-z") {
      sortCard = cardFilt.sort(function (a,b){
        if (a.title > b.title){
          return 1;
        }
        if (a.title < b.title){
          return -1;
        }
        return 0;
      });
    }
    else {
      sortCard = cardFilt.sort(function (a,b){
        if (b.title > a.title){
          return 1;
        }
        if (b.title < a.title){
          return -1;
        }
        return 0;
      });
    }
    return sortCard;
  },

  // Ordenar por año ascendente y descendente //

  "sortByYear": function (order) {
    let sortCard;
    if(order == "ascendente") {
      sortCard = cardFilt.sort (function(a,b) {
        return parseFloat(a.release_date) - parseFloat(b.release_date);
      });
    }
    else {
      sortCard = cardFilt.sort (function(a,b) {
        return parseFloat(b.release_date) - parseFloat(a.release_date);
      });
    }
    return sortCard;
  },
}

export default studioGhibli;

/*//Muestra los array de las películas de acuerdo a su puntuación
export const filterByScore = () => {
  const filterHighScore = ghibliFilms.filter(film => film.rt_score >= 90);
  const filterMediumScore = ghibliFilms.filter(film => film.rt_score >= 80 && film.rt_score < 90);
  const filterLowScore = ghibliFilms.filter(film => film.rt_score < 80);    
  //console.log(filterHighScore);

    return filterByScore;
};

//Ordena los array por score más alto al más bajo
export const sortFilms = (categoria) => {
  console.log(typeof categoria)
  const sortScore = ghibliFilms.sort((scr1, scr2) => {
    return scr2[categoria] - scr1[categoria]
  });
  console.log(sortScore);
    return sortScore;
};
//console.log(scoreFilms);
*/

/*"sortYearAscending": function (){ 
      let sortCard = cardFilt.sort((a,b) => {
          return parseFloat(a.release_date) - parseFloat(b.release_date)
      });
      return sortCard;
    },

    "sortYearDescending": function (){ 
      let sortCard = cardFilt.sort((a,b) => {
          return parseFloat(b.release_date) - parseFloat(a.release_date)
      });
      return sortCard;
    },*/