// 23.552403691420636, 78.52301658490357
var latitude = 23.552403691420636
var longitude = 78.52301658490357

//initializing Mapbox
mapboxgl.accessToken="pk.eyJ1Ijoib3BoaWxpYSIsImEiOiJjbG1xZDQ2dG0wMjNkMmtwZjBuYzM0YnQ1In0.407OjoQh5_0cMuzqsAgz_Q"

var map = new mapboxgl.Map({
    container:'map',
    style:"mapbox://styles/mapbox/streets-v11",
    center: [longitude,latitude],
    zoom:4

})

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions :{
            enableHighAcuraccy:true
        },
        trackUserLocation:true
    })
)

map.addControl(
    new  MapboxDirections({
        accessToken:mapboxgl.accessToken
    })
)

