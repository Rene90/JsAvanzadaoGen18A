var SpotifyWebApi = require("spotify-web-api-node")

var clientId = "6cfb0c49a6ea4c9ab85f28c89cbfac62"
var clientSecret = "c76c896435e64db2a94299f943b563c8"

//Generar token de acceso
var spotifyApi = new SpotifyWebApi({
    clientId:clientId,
    clientSecret:clientSecret
})


const consultarSpotify = async(artista)=>{
    spotifyApi.clientCredentialsGrant().then(function(data){
        console.log('Token generado', data.body['access_token'])
        spotifyApi.setAccessToken(data.body['access_token'])
        return spotifyApi.searchTracks(artista)
    }).then(function(data){
        var artistas = data.body.tracks.items
        
        artistas.forEach((art)=>{
            console.log(art)
        })

    }).catch(function(err){
        console.log("Algo fallo:", err.message)
    })
}

consultarSpotify('artist:Radiohead')