//* VAMOS A TENER NUESTRA LÓGICA 
//* DOCUMENTACIÓN: https://goodreads-devf-aaron.herokuapp.com/docs/
//* URI DE LA API: https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/

//? 1) TRAER A REQUEST QUE ACABAMOS DE INSTALAR 
const request = require('request')

//? 2) TENER NUESTRO ENDPOINT 
const URI = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/'

//? LISTAR A TODOS LOS AUTORES (authors)
const listAuthors = ( ) => {
    request.get(URI,(error,response,body)=>{
        //validamos nuestra petición
        if(response.statusCode === 200){
            const authors = JSON.parse(body)
            console.log(authors)
        }else{
            console.log(response.statusCode , response.statusMessage)
        }                 //! 404                  Not Found
    })
}


  module.exports = {
    listAuthors,
  } 