//importamos la 'data' en 'dataFunciones' para mantener la logica de la aplicacion en un solo js
import baseDatos from './data/ghibli/ghibli.js';

//constante donde se almacena toda la información de la BD
const ghibliFilms = baseDatos.films;

//variable global que mantiene los elementos filtrados
//que seran utilizados unica y exclusivamente para ordenar
let tarjetasFiltradas = ghibliFilms;

//objeto con las funciones para la data
const dataFunciones = {

  //funcion para cargar todas las peliculas
  "mostrarTodo": function () {
    //Iteramos cada pelicula de la base de datos con la funcion map
    return ghibliFilms;
  },

  /*------- funciones filtrar -------*/
  //funcion para realizar el filtro por año
  "filtrarPorAño": function (year) {
    tarjetasFiltradas = ghibliFilms.filter(film => film.release_date == year);
    return tarjetasFiltradas;
  },

  //funcion para realizar el filtro por score
  "filtrarPorScore": function (score) {
    tarjetasFiltradas = ghibliFilms.filter(film => film.rt_score == score);
    return tarjetasFiltradas;
  },

  //funcion para realizar el filtro por director
  "filtrarPorDirector": function (director) {
    tarjetasFiltradas = ghibliFilms.filter(film => film.director == director);
    return tarjetasFiltradas;
  },

  /*------- funciones de orden -------*/
  //funcion para ordenar por titulo a-z/z-a
  "ordenarPorTitulo": function (orden) {
    //variable para almacenar la data ordenada
    let tarjetasOrdenadas;

    //Ascendente
    if (orden == "a-z") {
      tarjetasOrdenadas = tarjetasFiltradas.sort(function (a, b) {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        // a must be equal to b
        // return 0;
      });
    }
    //Descendente
    else {
      tarjetasOrdenadas = tarjetasFiltradas.sort(function (a, b) {
        /*if (b.title > a.title) {
         // return 1;
        }*/
        if (b.title < a.title) {
          return -1;
        }
        // a must be equal to b
        //return 0;
      });
    }

    return tarjetasOrdenadas;
  },

  //funcion para ordenar por año
  "ordenarPorAño": function (orden) {
    //variable para almacenar la data ordenada
    let tarjetasOrdenadas;

    if (orden == "ascendente") {
      tarjetasOrdenadas = tarjetasFiltradas.sort(function (a, b) {
        return parseFloat(a.release_date) - parseFloat(b.release_date);
      });
    }
    else {
      tarjetasOrdenadas = tarjetasFiltradas.sort(function (a, b) {
        return parseFloat(b.release_date) - parseFloat(a.release_date);
      });
    }

    return tarjetasOrdenadas;

  },

  /*------- funcion para buscar por id de pelicula -------*/
  "buscarPeliculaPorId": function (id) {
    return tarjetasFiltradas.filter(film => film.id == id);
  }
}


export default dataFunciones;


