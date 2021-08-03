//import { example, anotherExample } from '../src/data.js';
import  studioGhibli  from '../src/data.js'; 

describe('studioGhibli', () => {
  it('should be an object', () => {
    expect(typeof studioGhibli).toBe('object');
  })
});

describe('filterByYear', () => {
  it('is a function', () => {
    expect(typeof studioGhibli.filterByYear).toBe('function');
  });

  it('should return "Castle in the sky"', () => {
    let castleSky = [{
      "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
      "title": "Castle in the Sky",
      "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      "director": "Hayao Miyazaki",
      "producer": "Isao Takahata",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
      "release_date": "1986",
      "rt_score": "95",
      "people": [
        {
          "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
          "name": "Pazu",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
          "gender": "Male",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
          "name": "Lusheeta Toel Ul Laputa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
          "gender": "Female",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "3bc0b41e-3569-4d20-ae73-2da329bf0786",
          "name": "Dola",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b3/Dola.png",
          "gender": "Female",
          "age": "60",
          "eye_color": "Black",
          "hair_color": "Peach",
          "specie": "Human"
        },
        {
          "id": "abe886e7-30c8-4c19-aaa5-d666e60d14de",
          "name": "Romska Palo Ul Laputa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d5/Muska.jpg",
          "gender": "Male",
          "age": "33",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "e08880d0-6938-44f3-b179-81947e7873fc",
          "name": "Uncle Pom",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/de/Uncle_Pom.png",
          "gender": "Male",
          "age": "Unspecified/Elderly",
          "eye_color": "Black",
          "hair_color": "White",
          "specie": "Human"
        },
        {
          "id": "5c83c12a-62d5-4e92-8672-33ac76ae1fa0",
          "name": "General Muoro",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/12/Muoro.jpg",
          "gender": "Male",
          "age": "Unspecified/Adult",
          "eye_color": "Black",
          "hair_color": "None",
          "specie": "Human"
        },
        {
          "id": "3f4c408b-0bcc-45a0-bc8b-20ffc67a2ede",
          "name": "Duffi",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0a/Duffi.png",
          "gender": "Male",
          "age": "Unspecified/Adult",
          "eye_color": "Dark brown",
          "hair_color": "Dark brown",
          "specie": "Human"
        },
        {
          "id": "fcb4a2ac-5e41-4d54-9bba-33068db083ca",
          "name": "Louis",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/80/Louis.jpg",
          "gender": "Male",
          "age": "30",
          "eye_color": "Dark brown",
          "hair_color": "Dark brown",
          "specie": "Human"
        },
        {
          "id": "2cb76c15-772a-4cb3-9919-3652f56611d0",
          "name": "Charles",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/28/Charlies.jpg",
          "gender": "Male",
          "age": "Unspecified/Adult",
          "eye_color": "Dark brown",
          "hair_color": "Light brown",
          "specie": "Human"
        },
        {
          "id": "f6f2c477-98aa-4796-b9aa-8209fdeed6b9",
          "name": "Henri",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/15/Henri.jpg",
          "gender": "Male",
          "age": "Unspecified/Adult",
          "eye_color": "Dark brown",
          "hair_color": "Reddish brown",
          "specie": "Human"
        },
        {
          "id": "05d8d01b-0c2f-450e-9c55-aa0daa34838e",
          "name": "Motro",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/17/Eggman_laputa.jpg",
          "gender": "Male",
          "age": "Unspecified/Adult",
          "eye_color": "Dark brown",
          "hair_color": "None",
          "specie": "Human"
        },
        {
          "id": "b22a684f-1819-40c8-94a6-d40c3b5e18eb",
          "name": "Okami",
          "img": "http://static.wikia.nocookie.net/studio-ghibli/images/6/65/Okami.jpg",
          "gender": "Female",
          "age": "50",
          "eye_color": "Dark brown",
          "hair_color": "Orange",
          "specie": "Human"
        },
        {
          "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
          "name": "Colonel Muska",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d3/Colonelmuska2bodyguards.JPG",
          "gender": "Male",
          "age": "33",
          "eye_color": "Grey",
          "hair_color": "Brown",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "6ba60a86-7c74-4ec4-a6f4-7112b5705a2f",
          "name": "Gondoa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/25/Thumbnail-8.jpeg",
          "climate": "TODO",
          "terrain": "TODO",
          "surface_water": "40",
          "residents": [
            "TODO"
          ]
        },
        {
          "id": "26361a2c-32c6-4bd5-ae9c-8e40e17ae28d",
          "name": "Pazu's Mines",
          "img": "",
          "climate": "Dry",
          "terrain": "Hill",
          "surface_water": "0",
          "residents": [
            "TODO"
          ]
        },
        {
          "id": "0fafa7a3-64c1-43fe-881b-ecb605c01e09",
          "name": "Laputa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e7/Laputa.png",
          "climate": "Continental",
          "terrain": "City",
          "surface_water": "40",
          "residents": [
            "TODO"
          ]
        },
        {
          "id": "0132f7f6-fd52-4ac3-b5df-c96b609f77b6",
          "name": "Tedis",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/13/Tedis.jpg",
          "climate": "Continental",
          "terrain": "Hill",
          "surface_water": "30",
          "residents": [
            "TODO"
          ]
        }
      ],
      "vehicles": [
        {
          "id": "4e09b023-f650-4747-9ab9-eacf14540cfb",
          "name": "Air Destroyer Goliath",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e5/Goliath.png",
          "description": "A military airship utilized by the government to access Laputa",
          "vehicle_class": "Airship",
          "length": "1,000",
          "pilot": {
            "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
            "name": "Colonel Muska"
          }
        }
      ]
    }];
    expect(studioGhibli.filterByYear('1986')).toEqual(castleSky);
  });
});

describe('filterByScore', () => {
  it('is a function', () => {
    expect(typeof studioGhibli.filterByScore).toBe('function');
  });

  it('should return "Only Yesterday" and "The tale of Princess Kaguya"', () => {
    let bestScoredFilms = [{
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
    }, {
      "id": "578ae244-7750-4d9f-867b-f3cd3d6fecf4",
      "title": "The Tale of the Princess Kaguya",
      "description": "A bamboo cutter named Sanuki no Miyatsuko discovers a miniature girl inside a glowing bamboo shoot. Believing her to be a divine presence, he and his wife decide to raise her as their own, calling her 'Princess'.",
      "director": "Isao Takahata",
      "producer": "Yoshiaki Nishimura",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/8/87/The_Tale_of_the_Princess_Kaguya.jpg",
      "release_date": "2013",
      "rt_score": "100",
      "people": [
        {
          "id": "a8b338c0-e586-4c1c-8857-f33540d0d4d7",
          "name": "Kaguya",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d4/Kaguya_shows_off_her_teeth.jpg",
          "gender": "Female",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Navy blue",
          "specie": "Human"
        },
        {
          "id": "a21fbdd5-16bc-4931-80d0-3ce89ffce778",
          "name": "Sutemaru",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/37/Sutemaru.PNG",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "4c697b7d-4f64-4ac9-ae29-e155eb1693f3",
          "name": "Ishitsukuri",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5c/Ghibli-kaguya-ishitsukuri.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "fe1e5acf-e5e4-4769-9755-989cf7a2e961",
          "name": "Miyatsuko",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/4a/Sanuki_no_Miyatsuko.jpeg",
          "gender": "Male",
          "age": "Elder",
          "eye_color": "Grey",
          "hair_color": "White",
          "specie": "Human"
        },
        {
          "id": "839ff5b9-69ba-4d55-ab77-de939b46b18a",
          "name": "Menowarawa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/22/Menowarawa.jpg",
          "gender": "Female",
          "age": "17",
          "eye_color": "Black",
          "hair_color": "Navy blue",
          "specie": "Human"
        },
        {
          "id": "1752fc88-c6b7-4fef-8b64-51451d808033",
          "name": "Lady Sagami",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/28/Sagami.png",
          "gender": "Female",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "942fb1029-b51f-4100-8bee-86547c09b0ff",
          "name": "Inbe no Akita",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/1c/Ghibli-kaguya-akita.jpg",
          "gender": "Male",
          "age": "Elder",
          "eye_color": "Black",
          "hair_color": "White",
          "specie": "Human"
        },
        {
          "id": "be634b4e-c333-4225-a5f0-2a0aa33d6453",
          "name": "Ōna",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/cb/Ouna.jpg",
          "gender": "Female",
          "age": "Elder",
          "eye_color": "Black",
          "hair_color": "Grey",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "682df5c3-b09e-46af-94d1-ae0d17f9b4b6",
          "name": "Bamboo Forest",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/ec/Ghibli-kaguya-bamboo-forest.jpg",
          "climate": "Tropical",
          "terrain": "Forest",
          "surface_water": "10",
          "residents": [
            "TODO"
          ]
        }
      ],
      "vehicles": []
    }];
    expect(studioGhibli.filterByScore('100')).toEqual(bestScoredFilms);
  });
});

describe('filterByDirector', () => {
  it('is a function', () => {
    expect(typeof studioGhibli.filterByDirector).toBe('function');
  });

  it('should return "The secret world of Arriety" and "When Marnie was here"', () => {
    let hiroFilms = [{
      "id": "2de9426b-914a-4a06-a3a0-5e6d9d3886f6",
      "title": "The Secret World of Arrietty",
      "description": "14-year-old Arrietty and the rest of the Clock family live in peaceful anonymity as they make their own home from items 'borrowed' from the house's human inhabitants. However, life changes for the Clocks when a human boy discovers Arrietty.",
      "director": "Hiromasa Yonebayashi",
      "producer": "Toshio Suzuki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/4/46/The_Borrower_Arrietty.jpg",
      "release_date": "2010",
      "rt_score": "95",
      "people": [
        {
          "id": "89026b3a-abc4-4053-ab1a-c6d2eea68faa",
          "name": "Karigurashi/Arrietty",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/6f/Arrietty.png",
          "gender": "Female",
          "age": "14",
          "eye_color": "Black",
          "hair_color": "Auburn",
          "specie": "Borrower"
        },
        {
          "id": "496031cc-f6af-4f48-b9d1-27f34cb18e10",
          "name": "Sho (Shawn)",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/04/Sho.jpg",
          "gender": "Male",
          "age": "12-14",
          "eye_color": "Brown",
          "hair_color": "Navy blue/black",
          "specie": "Human"
        },
        {
          "id": "ef5ee7c5-ae68-418d-a319-f3e79262cd87",
          "name": "Homily Clock",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/28/Homily_Clock.jpg",
          "gender": "Female",
          "age": "52",
          "eye_color": "Brown",
          "hair_color": "Navy black",
          "specie": "Borrower"
        },
        {
          "id": "3a83aa65-d134-4e58-85b2-e9f6523b047d",
          "name": "Sadako Maki/Jessica",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/1b/Jessica.jpg",
          "gender": "Female",
          "age": "Elder",
          "eye_color": "Black",
          "hair_color": "Grey",
          "specie": "Human"
        },
        {
          "id": "9c687441-3eb3-4c4b-8752-55774953aa3f",
          "name": "Haru",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/3d/Haru_%28dam%29.jpg",
          "gender": "Female",
          "age": "Elder",
          "eye_color": "Brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "ce5fb645-f0bb-4c1b-829f-907989d5525f",
          "name": "Spiller",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/43/Spiller.jpg",
          "gender": "Male",
          "age": "Young",
          "eye_color": "Black",
          "hair_color": "Navy black",
          "specie": "Borrower"
        },
        {
          "id": "a27ebdcb-4d29-40ac-8da6-5fc5a7869efb",
          "name": "Pod Clock",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/7/76/Pod.png",
          "gender": "Male",
          "age": "52",
          "eye_color": "Grey",
          "hair_color": "Brown",
          "specie": "Borrower"
        },
        {
          "id": "379f1453-38ca-486f-9d8b-f4eddc1e3fd3",
          "name": "Niya",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5a/Niya.jpg",
          "gender": "Male",
          "age": "52",
          "eye_color": "White",
          "hair_color": "Beige",
          "specie": "Cat"
        }
      ],
      "locations": [
        {
          "id": "1e7ed524-4b4f-466b-978c-69dda9777396",
          "name": "Sho's house",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/86/Karigurashi002.jpg",
          "climate": "Warm",
          "terrain": "Forest",
          "surface_water": "10",
          "residents": [
            "TODO"
          ]
        },
        {
          "id": "f2148ab5-f272-4057-b05a-1321e35227b4",
          "name": "Karigurashi's house",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/cd/Karigurashi019.jpg",
          "climate": "Warm",
          "terrain": "Under the floorboards",
          "surface_water": "10",
          "residents": [
            "TODO"
          ]
        }
      ],
      "vehicles": []
    }, {
      "id": "5fdfb320-2a02-49a7-94ff-5ca418cae602",
      "title": "When Marnie Was There",
      "description": "The film follows Anna Sasaki living with her relatives in the seaside town. Anna comes across a nearby abandoned mansion, where she meets Marnie, a mysterious girl who asks her to promise to keep their secrets from everyone. As the summer progresses, Anna spends more time with Marnie, and eventually Anna learns the truth about her family and foster care.",
      "director": "Hiromasa Yonebayashi",
      "producer": "Yoshiaki Nishimura",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/7/7a/When_Marnie_Was_There.jpg",
      "release_date": "2014",
      "rt_score": "92",
      "people": [
        {
          "id": "4a6a60d1-cb07-464f-889c-fecaff19b4ef",
          "name": "Marnie",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/21/Marnie.jpg",
          "gender": "Female",
          "age": "12",
          "eye_color": "Green",
          "hair_color": "Blonde",
          "specie": "Human"
        },
        {
          "id": "28d07ace-c309-48c6-b48e-ae2ece3a238c",
          "name": "Anna Sasaki",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/ae/Anna.png",
          "gender": "Female",
          "age": "12",
          "eye_color": "Blue",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "d0a0bd7c-7521-45a2-a681-573a67f34a5b",
          "name": "Emily",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/cd/13_year_old_Emily.png",
          "gender": "Female",
          "age": "20",
          "eye_color": "Dark brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "08fdd37a-2cf0-4f91-ae1c-344ecff39753",
          "name": "Kazuhiko",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/09/Kazuhiko.jpg",
          "gender": "Male",
          "age": "Teenager",
          "eye_color": "Dark brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "66bca178-9920-4ec3-91e9-0d5b8a76dba1",
          "name": "Setsu Oiwa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/6e/Setsu.jpg",
          "gender": "Female",
          "age": "50-60",
          "eye_color": "Dark brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "5b8e4413-f943-40ba-8f9f-0ba059a401f0",
          "name": "Hisako",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/93/Hisako.png",
          "gender": "Female",
          "age": "Elder",
          "eye_color": "Dark brown",
          "hair_color": "Grey",
          "specie": "Human"
        },
        {
          "id": "c827feae-8ccf-4ced-84cb-bc3e226b1cd1",
          "name": "Yoriko Sasaki",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5d/Yoriko_Sasaki.jpg",
          "gender": "Female",
          "age": "Adult",
          "eye_color": "Dark brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "9d3730cb-ec15-4bf9-a2fb-a7772e5e1c03",
          "name": "Sayaka",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/7/79/Sayaka.jpg",
          "gender": "Female",
          "age": "11",
          "eye_color": "Teal",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "31b49ef6-ee60-4603-b983-e67fa0718aa9",
          "name": "Kiyomasa Ōiwa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d7/Kiyomasa.jpg",
          "gender": "Male",
          "age": "50-60",
          "eye_color": "Dark brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "5d52d16f-ce72-41bd-8d88-436e206d9449",
          "name": "Doctor Yamashita",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8a/Yamashita.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Navy blue",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "56e423c4-d9a1-44c4-8bdb-1cab45fbf63e",
          "name": "The Marsh House",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8c/Marsh_house.jpg",
          "climate": "Mild",
          "terrain": "Marsh",
          "surface_water": "60",
          "residents": []
        }
      ],
      "vehicles": []
    }];
    expect(studioGhibli.filterByDirector('Hiromasa Yonebayashi')).toEqual(hiroFilms);
  });
});

describe('filterByProducer', () => {
  it('is a function', () => {
    expect(typeof studioGhibli.filterByProducer).toBe('function');
  });

  it('should return "Grave of the fireflies"', () => {
    let toruFilms = [{
      "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
      "title": "Grave of the Fireflies",
      "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
      "director": "Isao Takahata",
      "producer": "Toru Hara",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a5/Grave_of_the_Fireflies_Japanese_poster.jpg",
      "release_date": "1988",
      "rt_score": "97",
      "people": [
        {
          "id": "8cb959a8-1959-42f3-bb33-07d7a2e6b830",
          "name": "Seita Yokokawa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/21/Seita_Yokokawa.jpg",
          "gender": "Male",
          "age": "14",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "c344d561-6654-4aab-b0df-a1570e7e60cb",
          "name": "Setsuko Yokokawa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a8/Setsuko_Yokokawa.jpg",
          "gender": "Female",
          "age": "4",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "227c01a6-4e29-4582-bc4b-35106a704ab0",
          "name": "Mrs. Yokokawa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/39/SeitaMother.png",
          "gender": "Female",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "023306e3-9fc6-4d1d-b681-d4649dcbfff9",
          "name": "Kiyoshi Yokokawa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f6/SeitaFather3.jpg",
          "gender": "Male",
          "age": "40",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "0e18b23d-1f21-4a83-a6de-f01147624875",
          "name": "Seita's Aunt",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/09/SeitaAunt.jpg",
          "gender": "Female",
          "age": "Elder",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        }
      ],
      "locations": [],
      "vehicles": []
    }];
    expect(studioGhibli.filterByProducer('Toru Hara')).toEqual(toruFilms);
  });
});


describe('sortByYear', () => {
  it('is a function', () => {
    expect(typeof studioGhibli.sortByYear).toBe('function');
  });
  
  it('returns an array sorted by release date in ascending order', () => {
    
    expect(studioGhibli.sortByYear('ascendente').length
    ).toEqual(20);
  });
});