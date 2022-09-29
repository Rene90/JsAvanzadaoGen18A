console.log("Promises")
import fetch from "node-fetch"

// ejemplo de try y catch

function division (a,b){
    try{
        //Este codigo se va a "tratar" de ejecutar
        var resultado = a/b
        suma(a,b)
        return resultado
    } catch(error){
        //Este codigo se ejecuta en caso de que el codigo del try falle
        console.log("Este es mi error",error)
        console.log(resultado)
    }


}
//console.log(division(2,3))
//math.ceil redondea al entero superior
//math.floor redondea al entero inferior
//math.random genera un numero aleatorio entre 0 y 1
//Si queremos un numero entre 0 y N, multiplicamos math.random * N
//Generar un numero entre x , k  math.floor( Math.random()*(x-k+1) +min)


const promesaEjemplo= ()=>{
    return new Promise((resolve,reject)=>{
        const numeroAleatorio = (Math.floor(Math.random()*(25-15+1)))+ 15
        setTimeout(()=>{
            numeroAleatorio>=20?resolve(numeroAleatorio):reject(new Error(`El ${numeroAleatorio} es menor que 20`))
        },3000)
    })
}
//FORMA 1 de ejecutar promesa con .then y .catch

/*promesaEjemplo().then(numero=>{
    console.log(numero)
}).catch(error=> console.log(error+ " ESTE ES EL ERROR DE MI PROMESA EN REJECT"))*/

//FORMA 2 DE EJECUTAR UNA promesa (dentro de un try y catch)
const funcionAsync = async()=>{
    try{
        const respuesta = await promesaEjemplo()
        console.log(respuesta)
    }
catch(error){
    console.log(error)
}finally{
    console.log("Este codigo esta en finally y se ejectua SIEMPRE")
}
}
//funcionAsync()

const ulrAuthor = "http://openlibrary.org/search.json?author=asimov"

async function queryAuthor(urlA){
    var urlLibro = "https://openlibrary.org/api/books?bibkeys=ISBN:"
    const response = await fetch(urlA)
    const responsejson = await response.json()
    
    var arregloids = responsejson.docs[0].isbn
    var alib = []
    var arregloPromesas = []
    arregloids.forEach(async(element) => {
         let promesa =  fetch(urlLibro+element).then((r)=>r)
        arregloPromesas.push(promesa)
        
        
    })
    
    return new Promise((resolve)=>{
        Promise.all(arregloPromesas).then((proms)=>{
            proms.forEach(async(p)=> {
                    alib.push(p)
                 }
            
            
            )
        }).then(()=>resolve(alib))
    })
    



}
async function ejem(ur){
    var resp = await queryAuthor(ur)
    console.log(resp)
    var arreglojsons = []
    var arreglojsonsr = []
    resp.forEach(element=>{
        let resj = element.json().then((r)=>r)
        arreglojsons.push(resj)
        console.log("ya se lleno los json")
    })
    return new Promise((resolve)=>{
        Promise.all(arreglojsons).then((jss)=>{
            jss.forEach(async(j)=> arreglojsonsr.push(j))
        }).then(()=>resolve(arreglojsonsr)).catch(error=>{console.log(error)})
    })
}

async function resfinal(ur){
    var resp = await ejem(ur)
    console.log(resp)
}
resfinal(ulrAuthor)



















