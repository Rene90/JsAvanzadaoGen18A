//* VAMOS A EJECUTAR LA LÓGICA 
//* MAIN ES NUESTRO JS PRINCIPAL

const goodReadsCrud = require ('./crudAuthors')

//* LISTAR A TODOS LOS AUTORES 
// goodReadsCrud.listAuthors()

//* LISTAR UN AUTOR POR SU ID 
goodReadsCrud.getAuthor(14682) //14710, 14891

//* CREAR UN AUTOR (MANDAR UN JSON)
// const jsonSend = {
//    name: "CRISTIANO",
// 	last_name: "RONALDO",
// 	nacionalidad: "MX",
// 	biography: "FUTBOLISTA PROFESIONAL",
// 	gender: "M",
// 	age: 36,
// 	is_alive: true
// }
// goodReadsCrud.createAuthor(jsonSend)

//*PATCH A UN AUTOR 
//   const updateData = {
// 	name: "CESAR",
// 	last_name: "GUERRA",
// 	gender: "m"
// }
// goodReadsCrud.patchAuthor(14907,updateData)

//*ELIMINAR UN AUTOR
// goodReadsCrud.deleteAuthor(14682)