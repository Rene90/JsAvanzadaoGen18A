console.log("Este es mi primer codigo ejecutado en Node")
console.log("Vuelvo a entrar para ensenar nodemon")

var colors = require("colors")

function Sumar(x,y){
	let suma = x+y
	console.log("la suma es: ".green+suma)


}

Sumar(25,30)

var alumnos = ["Stephanie","Mildred","Edgar","Alfonso","Mariana"]

for (let i=0; i<alumnos.length;i++){
	console.log(alumnos[i].red)

}

alumnos.forEach((elemento,indice,array)=>{
	console.log(elemento.green)


})
var calificaciones = {
	"Stephanie":8,
	"Mildred":9,
	"Ariff":10,
	"Mariana":8.5


}

Object.keys(calificaciones).forEach((elemento,indice,arreglo)=>{
	
	if (calificaciones[elemento]<9){
		console.log("El estudiante "+elemento.red+ ` saco ${calificaciones[elemento]}`)


	}else{
		console.log("El estudiante "+elemento.green + " es aplicado")

}
	




})
