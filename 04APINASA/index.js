console.log("API DE LA NASA")
//import fetch from "node-fetch"

const llave = "B4M0OPihTC0U7OFZcfj6PTizGQlDsl21351VamA7"

var apiNasa = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-10&api_key=${llave}`

async function apinasa(url){
    const consulta = await fetch(url)
    var respuestajson = await consulta.json()
    console.log(respuestajson.near_earth_objects)
    var meteoritos = respuestajson.near_earth_objects

    Object.keys(meteoritos).forEach((elemento,indice,arreglo)=>{
        let datosfecha = meteoritos[elemento]
        console.log(datosfecha)
        datosfecha.forEach((el,ind,arr)=>{
            if(el.is_potentially_hazardous_asteroid){
                console.log(`El meteorito ${el.name} es potencialmente peligroso`)
            }else{
                console.log(`El meteorito ${el.name} NO es potencialmente peligroso`)
            }
            
        })

    })


}


//apinasa(apiNasa)

async function fotosMarte(key,robot,camara,dia){
    var contenedor =document.getElementById("contenedorFoto")
    var fotodia = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
    var fotodiajson = await fotodia.json()
    var urlmarte = `https://api.nasa.gov/mars-photos/api/v1/rovers/${robot}/photos?sol=${dia}&camera=${camara}&api_key=${key}`
    const respuestaurl = await fetch(urlmarte)
    var respjson = await respuestaurl.json()
    console.log(respjson)
    var listafotos =respjson.photos
    console.log(listafotos)
    contenedor.innerHTML = ""
    if (listafotos.length==0){
        console.log(fotodiajson)
        //contenedor.classList.remove("mt-4")
        //contenedor.classList.add("mt-12")
        contenedor.innerHTML = `
        <div class="card" style="width: 100%;">
        <img class="card-img-top" src=${fotodiajson.url} alt=${fotodiajson.media_type}>
        <div class="card-body">
          <h5 class="card-title">${fotodiajson.title}</h5>
          <p class="card-text">${fotodiajson.explanation}</p>
          
        </div>
      </div>
        
        `

    }
    

    listafotos.forEach((elemento,indice,arreglo)=>{
        contenedor.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src=${elemento.img_src} alt=${elemento.id}>
        <div class="card-body">
          <h5 class="card-title">${elemento.rover.name}</h5>
          <p class="card-text">${elemento.camera.full_name}</p>
          
        </div>
      </div>
        
        
        
        `





    

    })
}
async function traerfoto(){
    let rover = document.getElementById("rover")
    let sensor = document.getElementById("sensor")
    let diasolar = document.getElementById("diasolar")
    let roverv = rover.value
    let sensorv = sensor.value
    let diasolarv = diasolar.value
    console.log(roverv, sensorv, diasolarv)
    await fotosMarte(llave,roverv,sensorv,String(diasolarv))
    //var contenedor =document.getElementById("contenedorFoto")
    //await fotosMarte(llave,"curiosity","FHAZ","1000")
    
    //contenedor.innerHTML = `
    //    <img src = ${im} alt= ${idim}>
    //`

}
