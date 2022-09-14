import fetch from "node-fetch"
console.log("Sesion de asincronisidad")
// Codigo sincrono
console.log("1")
console.log("2")
console.log("3")

//callback es la forma mas "sencilla" de asincronisidad

const primeraFuncion = ()=>{
	console.log("Esta es la primera funcion")


}

const segundaFuncion = ()=>{

	primeraFuncion()
	console.log("Esta es la segunda funcion")

}

const terceraFuncion =()=>{

	segundaFuncion()
	console.log("Esta es la tercera funcion")


}

terceraFuncion()

function regresarUno(){return 1}
function regresarDos(){return 2}

const sumaDosFunciones= (funcion1,funcion2)=>{
	const suma= funcion1()+funcion2()
	return suma




}
console.log(sumaDosFunciones(regresarUno,regresarDos))


var arreglo = ["Dragon Ball","Nope","Bullet train","Soy tu fan"]
// metodos propios de un array,un arreglo hereda propiedades y  metodos del Objeto/Clase Array
// Los parametros de la funcion callback son (elemento,indice,arreglo)
// Estos parametros adquieren su valor por la posicion NO por el nombre

const ejemplodeMap =(e,i,a)=>{
	console.log(e)
        console.log(i)
        console.log("arreglo")
        console.log(a)
        if (e.length <5){
                return e

        }
        else{ 
                return "Pelicula muy larga"
        }


}

//var resultadoArreglo= arreglo.map((elemento,indice,arreglo)=>{
//	console.log(indice)
//	console.log(indice)
//	console.log("arreglo")
//	console.log(arreglo)
//	if (elemento.length <5){
//		return elemento
//
//	}
//	else{
//		return "Pelicula muy larga"
//	}
//
//
//})

var resultadoArreglo = arreglo.map(ejemplodeMap)
console.log(resultadoArreglo)

let sueldos = [
	{oficio:'plomero',sueldo:10000},
	{oficio:'programador',sueldo:25000},
	{oficio:'contador',sueldo:15000},
	{oficio:'becado',sueldo:3500}
	

]
let resultadoFilter = sueldos.filter((elemento,indice,arreglo)=>{
	return elemento.sueldo >=15000





})


console.log(resultadoFilter)

//SETTIMEOUT sirve para ejecutar una funcion despues de cierto tiempo

//console.log("UNO")
//setTimeout(function(){console.log("DOS")},5)
//console.log("TRES")

//consulta a api, es un proceso asincrono (a cualquier servidor y cualquier tipo de flujo de datos)

async function ejemploFetch (){
	var respuestaFetch = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
	var respuestajson = await respuestaFetch.json()
	console.log(respuestajson)
}
//ejemploFetch()

console.log("Johar")

setTimeout(()=>{
	console.log("Tania")

},2)
for (let i =0; i<9999999999;i++);

console.log("Rene")
