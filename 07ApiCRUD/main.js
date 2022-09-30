//* VAMOS A EJECUTAR LA LÓGICA 
//* MAIN ES NUESTRO JS PRINCIPAL

const goodReadsCrud = require ('./crudAuthors')

//* LISTAR A TODOS LOS AUTORES 
// goodReadsCrud.listAuthors()

//* LISTAR UN AUTOR POR SU ID 
goodReadsCrud.getAuthor(14710)