import dataFunciones from '../src/data.js';

/*-------test Objeto  ----------*/
describe('dataFunciones', () => {

  it('es un objeto', () => {
    expect(typeof dataFunciones).toBe('object');
  });
});

/*------- test MOSTRAR   ----------*/
describe('dataFunciones.mostrarTodo', () => {
  it('dataFunciones.mostrarTodo debe ser una funcion', () => {
    expect(typeof dataFunciones.mostrarTodo).toBe('function');
  });

  it('dataFunciones.mostrarTodo debe retornar 20 peliculas', () => {
    expect(dataFunciones.mostrarTodo().length).toBe(20);
  });

});

/*------- test ORDENAR POR AÑO ----------*/
describe('dataFunciones.ordenarPorAño', () => {
  it('dataFunciones.ordenarPorAño debe ser una funcion', () => {
    expect(typeof dataFunciones.ordenarPorAño).toBe('function');
  });

  it('dataFunciones.ordenarPorAño debe retornar 20 peliculas ordenadas ascendentemente por año ', () => {
    expect(dataFunciones.ordenarPorAño("ascendente").length).toBe(20);
  });

  it('dataFunciones.ordenarPorAño debe retornar 20 peliculas ordenadas descendentemente por año ', () => {
    expect(dataFunciones.ordenarPorAño("descendente").length).toBe(20);
  });
});

/*------- test ORDENAR POR TIULO -------*/
describe('dataFunciones.ordenarPorTitulo', () => {
  it('dataFunciones.ordenarPorTitulo debe ser una funcion', () => {
    expect(typeof dataFunciones.ordenarPorTitulo).toBe('function');
  });

  it('dataFunciones.ordenarPorTitulo debe retornar 20 peliculas ordenadas de la A-Z', () => {
    expect(dataFunciones.ordenarPorTitulo("a-z").length).toBe(20);
  });

  it('dataFunciones.ordenarPorTitulo debe retornar 20 peliculas ordenadas de la Z-A', () => {
    expect(dataFunciones.ordenarPorTitulo("z-a").length).toBe(20);
  });
});

/*------- test FILTRAR POR AÑO --------*/
describe('dataFunciones.filtrarPorAño', () => {
  it('dataFunciones.filtrarPorAño debe ser una funcion', () => {
    expect(typeof dataFunciones.filtrarPorAño).toBe('function');
  });

  it('dataFunciones.filtrarPorAño debe retornar 2 peliculas cuando se filtra por 1988', () => {
    expect(dataFunciones.filtrarPorAño("1988").length).toBe(2);
  });
});

/*------- test FILTRAR POR SCORE  ----------*/
describe('dataFunciones.filtrarPorScore', () => {
  it('dataFunciones.filtrarPorScore debe ser una funcion', () => {
    expect(typeof dataFunciones.filtrarPorScore).toBe('function');
  });

  it('dataFunciones.filtrarPorScore debe retornar 3 peliculas cuando se filtra por score 92%', () => {
    expect(dataFunciones.filtrarPorScore("92").length).toBe(3);
  });
});

/*-------test FILTRAR POR DIRECTOR ----------*/
describe('dataFunciones.filtrarPorDirector', () => {
  it('dataFunciones.filtrarPorDirector debe ser una funcion', () => {
    expect(typeof dataFunciones.filtrarPorDirector).toBe('function');
  });

  it('dataFunciones.filtrarPorDirector debe retornar 5 peliculas cuadno se filtre por director: Isao Takahata', () => {
    expect(dataFunciones.filtrarPorDirector("Isao Takahata").length).toBe(5);
  });
});

/*-------- test BUSCAR PELICULA POR ID ------ */
describe('dataFunciones.buscarPeliculaPorId', () => {
  it('dataFunciones.ordenarPorTitulo debe ser una funcion', () => {
    expect(typeof dataFunciones.buscarPeliculaPorId).toBe('function');
  });

  /*array con un solo ID*/
  const peliculaDetalle = [{
    "id": "4e236f34-b981-41c3-8c65-f8c9000b94e7",
    "title": "Only Yesterday",
    "description": "It’s 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years: the first immature stirrings of romance, the onset of puberty, and the frustrations of math and boys. At the station she is met by young farmer Toshio, and the encounters with him begin to reconnect her to forgotten longings. In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self.",
    "director": "Isao Takahata",
    "producer": "Toshio Suzuki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a9/Only_Yesterday.jpg",
    "release_date": "1991",
    "rt_score": "100",
    "people": [
      {
        "id": "d0bb7b5f-3bf0-46c8-959d-0299b3252bd8",
        "name": "Taeko Okajima",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d4/Taeko_Okajima.png",
        "gender": "Female",
        "age": "27",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "3f78eba1-f9b0-489b-8686-f4508cdf049d",
        "name": "Toshio",
        "img": "http://static.wikia.nocookie.net/studio-ghibli/images/2/23/Toshio.png",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Black",
        "hair_color": "Black",
        "specie": "Human"
      },
      {
        "id": "52ed5cad-2464-481f-9786-8533b8de95ff",
        "name": "Mr. Okajima",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/58/Mr._Okajima.png",
        "gender": "Male",
        "age": "Middle age",
        "eye_color": "Black",
        "hair_color": "Black",
        "specie": "Human"
      },
      {
        "id": "87e61451-3131-4d01-a3b3-558c9ee1c451",
        "name": "Mrs. Okajima",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/18/Mrs._Okajima_%282%29.png",
        "gender": "Female",
        "age": "Middle age",
        "eye_color": "Black",
        "hair_color": "Light brown",
        "specie": "Human"
      },
      {
        "id": "0174e644-eddd-4cb7-8503-e0c21291d782",
        "name": "Grandmother Okajima",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0f/Grandmother_Okajima_%282%29.jpg",
        "gender": "Female",
        "age": "Elder",
        "eye_color": "Black",
        "hair_color": "Grey",
        "specie": "Human"
      },
      {
        "id": "a88cb7a4-fe4a-4d50-8d8b-c32449e298ba",
        "name": "Nanako Okajima",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Nanako_Okajima.png",
        "gender": "Female",
        "age": "18",
        "eye_color": "Black",
        "hair_color": "Light brown",
        "specie": "Human"
      },
      {
        "id": "c8f02850-0c1f-499c-8b5e-d8ad16f3ecc4",
        "name": "Yaeko Okajima",
        "gender": "Female",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/03/Yaeko.png",
        "age": "16",
        "eye_color": "Black",
        "hair_color": "Grey",
        "specie": "Human"
      },
      {
        "id": "6e960787-5a47-4178-a040-1ef5bf5e4a6c",
        "name": "Tani Tsuneko",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5a/Tani.jpg",
        "gender": "Female",
        "age": "10",
        "eye_color": "Black",
        "hair_color": "Black",
        "specie": "Human"
      },
      {
        "id": "cd86aeb2-4fd7-4119-8128-7060e0a68074",
        "name": "Aiko",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5d/Aiko.jpg",
        "gender": "Female",
        "age": "10",
        "eye_color": "Black",
        "hair_color": "Grey brown",
        "specie": "Human"
      },
      {
        "id": "3ab1e0de-4d41-4f67-b2d0-e16d0fef2e6c",
        "name": "Toko",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/af/Toko.jpg",
        "gender": "Female",
        "age": "10",
        "eye_color": "Black",
        "hair_color": "Light brown",
        "specie": "Human"
      },
      {
        "id": "f4a85428-18b7-4199-ba5a-b6bcfb478e14",
        "name": "Rie",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/00/Rie_01.png",
        "gender": "Female",
        "age": "10",
        "eye_color": "Black",
        "hair_color": "Grey",
        "specie": "Human"
      }
    ],
    "locations": [
      {
        "id": "dbeeaecb-7817-4b8b-90ca-edc432d3033e",
        "name": "Taeko's House",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/cf/Only_Yesterday_artwork_%2813%29.jpg",
        "climate": "Continental",
        "terrain": "River",
        "surface_water": "40",
        "residents": [
          "TODO"
        ]
      }
    ],
    "vehicles": []
  }];

  it('dataFunciones.buscarPeliculaPorId debe retornar un objeto', () => {
    expect(dataFunciones.buscarPeliculaPorId("4e236f34-b981-41c3-8c65-f8c9000b94e7")).toStrictEqual(expect.arrayContaining(peliculaDetalle));
  });
});


