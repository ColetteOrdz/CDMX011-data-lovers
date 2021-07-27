import  data  from './data/ghibli/ghibli.js'; 

const ghibliFilms = data.films; //constante donde se almacena toda la información de la BD

//Muestra los array de las películas de acuerdo a su puntuación
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
