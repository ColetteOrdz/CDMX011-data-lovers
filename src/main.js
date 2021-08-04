import dataFunciones from './data.js';

const divContenedorTarjetasPeliculas = document.getElementById("contenedorTarjetasPeliculas");

//se invoca la funcion de mostrar todo para cargar las tarjetas
const dataPeliculas = dataFunciones.mostrarTodo()
divContenedorTarjetasPeliculas.innerHTML = construirHTMLDeTarjetas(dataPeliculas);

//El evento onchange del select Año, filtrara cuando se selectione una opcion del select
document.getElementById("selectYear").addEventListener("change", function (e) {
    //el parametro "e" hace realacion al evento y en el evento nos da que elemento ejecuto el cambio
    let year = e.currentTarget.value;
    const peliculasFiltradaAño = dataFunciones.filtrarPorAño(year);
    //el innerHTML lee el strig y lo interpreta e inyecta como html
    divContenedorTarjetasPeliculas.innerHTML = construirHTMLDeTarjetas(peliculasFiltradaAño);
    //le asignamos los titulos descriptivos en le select
    document.getElementById("selectScore").value = "";
    document.getElementById("selectDirector").value = "";
    document.getElementById("selectOrdenarTitulo").value = "";
    document.getElementById("selectOrdenarYear").value = "";
})

//Evento onchange del select Año osea que se filtrara cuando se selectione una opcion
//del select
document.getElementById("selectScore").addEventListener("change", function (e) {
    let score = e.currentTarget.value;
    divContenedorTarjetasPeliculas.innerHTML = construirHTMLDeTarjetas(dataFunciones.filtrarPorScore(score));
    document.getElementById("selectYear").value = "";
    document.getElementById("selectDirector").value = "";
    document.getElementById("selectOrdenarTitulo").value = "";
    document.getElementById("selectOrdenarYear").value = "";
})

//Evento onchange del select Año osea que se filtrara cuando se selectione una opcion
//del select
document.getElementById("selectDirector").addEventListener("change", function (e) {
    let director = e.currentTarget.value;
    divContenedorTarjetasPeliculas.innerHTML = construirHTMLDeTarjetas(dataFunciones.filtrarPorDirector(director));
    document.getElementById("selectScore").value = "";
    document.getElementById("selectYear").value = "";
    document.getElementById("selectOrdenarTitulo").value = "";
    document.getElementById("selectOrdenarYear").value = "";
});

//Ordena tarjeta por titulo a-z/z-a
document.getElementById("selectOrdenarTitulo").addEventListener("change", function (e) {
    const orden = e.currentTarget.value;
    divContenedorTarjetasPeliculas.innerHTML = construirHTMLDeTarjetas(dataFunciones.ordenarPorTitulo(orden));
    
    //Esta es la manera larga de escribir la linea 47
    //const dataPeliculas = dataFunciones.ordenarPorTitulo(orden);
    //divContenedorTarjetasPeliculas.innerHTML = construirHTMLDeTarjetas(dataPeliculas);

});

//Orden asendente y descendente por año
document.getElementById("selectOrdenarYear").addEventListener("change", function (e) {
    const orden = e.currentTarget.value;
    divContenedorTarjetasPeliculas.innerHTML = construirHTMLDeTarjetas(dataFunciones.ordenarPorAño(orden));
});

//Cerrar modal
document.getElementById("modal-cerrar").addEventListener("click", function(){
    //tomamos el div de modal, mandado a llamar por la clase y le aplica los estilos.
    let modal = document.querySelectorAll(".modal")[0];
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
});

//Abrir modal cuando se da click a cualquier parte del documento pero siempre y cuando se valide si
//se le dio un click al boton de ver mas de las cartas esta validacion esta en la linea 64
document.addEventListener("click", function(e){
    if (e.target.getAttribute("id") == "btn-modal") {
        let modal = document.querySelectorAll(".modal")[0];
        modal.style.opacity = "1";
        modal.style.visibility = "visible";
        let idPelicula = e.target.getAttribute("data-id");
        let data = dataFunciones.buscarPeliculaPorId(idPelicula);
        document.getElementById("modal-titulo").innerText=data[0].title;
        document.getElementById("modal-descripcion").innerText=data[0].description;

    }
});

//Construir el HTML de las cartas, usa como parametro la data
function construirHTMLDeTarjetas(baseDatos) {
    let divContenedorTarjetasPeliculas = "";
    //iteramos cada pelicula para construir el string HTML

    baseDatos.map(pelicula => {
      divContenedorTarjetasPeliculas += `
      <div class="card">
            <img src="${pelicula.poster}" alt=${pelicula.title}>
            <h4>${pelicula.title}</h4>
            <p>${pelicula.release_date}</p>
            <p>Score ${pelicula.rt_score}%</p>
            <button id="btn-modal" data-id="${pelicula.id}">Ver mas</button>  
          </div>
      `;
    });
    return divContenedorTarjetasPeliculas;
  }

