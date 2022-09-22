//? CONSUMIR LA POKEAPI: https://pokeapi.co/
//? ENDPOINT: https://pokeapi.co/api/v2/pokemon/


//* 1) TRAER A REQUEST & COLORS
const request = require ('request')
const colors = require ('colors');


//* 2) CREAR/DECLARAR NUESTRA URI
const URI = 'https://pokeapi.co/api/v2/pokemon/'

//* 3) CREAR UNA FUNCIÓN QUE ME PIDA EL NOMBRE DE UN POKEMON Y ME DEVUELVA SU TIPO

function getPokemon (name) {
    request( URI + name , function (error, response, body) {
        // HACEMOS UNA VALIDACIDON
        if(response.statusCode === 200){
                const dataEnFormatoJson = JSON.parse(body) // EL OBJETO EN FORMATO JSON / PASARLO A UN OBJETO DE JAVASCRIPT
             const typePokemon = dataEnFormatoJson.types.map((objeto)=>objeto.type.name)
             console.log(`el tipo de pokemon de ${name} es: ${typePokemon}`.green)
        }else {
            console.log(`ocurrio un error: ${response.statusCode}, ${response.statusMessage}`.red)
        }                               //!       404                      Not Found
      });
}

getPokemon('pikachu')
getPokemon('bulbasur')
getPokemon('charmander')
getPokemon('squirtle')