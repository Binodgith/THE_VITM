

   
   
   let map = L.map('map',{center:[19.3150, 84.7941],zoom:20});

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}', {
    //     attribution: '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    //     ext: 'jpg'
    // }).addTo(map);

    // L.tileLayer('https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png', {
    //     // maxZoom: 18,
    //     attribution: 'Map <a href="https://memomaps.de/">memomaps.de</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);


    // L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    //     attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    // }).addTo(map);

    // L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        
    //     attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);

    // L.tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
    //     maxZoom: 18,
    //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);

    var myIcon = L.icon({
        iconUrl: 'https://cdn2.iconfinder.com/data/icons/map-locations-colored-outlined-pixel-perfect/64/pin-map-location-06-1024.png',
        iconSize: [50, 75],
        iconAnchor: [30,60],
        // popupAnchor: [-3, -76],
        // shadowUrl: 'https://cdn-icons-png.flaticon.com/512/9249/9249336.png',
        // shadowSize: [68, 95],
        shadowAnchor: [25, 25]
    });


    var busStopIcon = L.icon({
        iconUrl: '/assets/icons/busStop.png',
        iconSize: [50, 75],
        iconAnchor: [30,60],
        // popupAnchor: [-3, -76],
        // shadowUrl: 'https://cdn-icons-png.flaticon.com/512/9249/9249336.png',
        // shadowSize: [68, 95],
        shadowAnchor: [25, 25]
    });
    
    let marker=L.marker([19.314922, 84.794218],{zoom:20}).addTo(map).bindPopup("Your live position");
    let myRoute=L.Routing.control({
        waypoints: [
          L.latLng(19.311041, 84.831311),
          L.latLng(19.310054, 84.828033),
          L.latLng(19.308730, 84.823079),
          L.latLng(19.307837, 84.818726),
          L.latLng(19.307296, 84.815483),
          L.latLng(19.306865, 84.812549),
          L.latLng(19.306313, 84.809332),
          L.latLng(19.306639, 84.808439),

          L.latLng(19.308523, 84.806591),
          L.latLng(19.310691, 84.804612),
          L.latLng(19.313225, 84.802311),
        
        ],
        lineOptions: {
            styles: [{color: 'Green', opacity: 1, weight: 10}]
        },

        
        createMarker: function (i, start, n){ 
            //for (i = 0; waypoint.length; i++){
            return L.marker (start.latLng, {
                    draggable: false,
                    icon: busStopIcon,
                    iconSize: [25, 25],
                   routeWhileDragging: false,
        })}
                    
    }).addTo(map);

    


    // L.Routing.line(myRoute, {
    //     styles:[{color: 'black', opacity: 0.15, weight: 9}, {color: 'white', opacity: 0.8, weight: 6}, {color: 'green', opacity: 1, weight: 2}]
    //  });

    // --------------ma layers and mods---------------------
   

function getlocation() {
    // console.log(navigator.geolocation);
    navigator.geolocation.getCurrentPosition(getposition);
    // if (navigator.getlocation) {

    // }
}
 
getlocation();

let  long,lat;
function getposition(pos) {
    long=pos.coords.longitude;
    lat=pos.coords.latitude;
    console.log(pos.coords);
    setmarker();
    // showonmap(lat,long);
    // document.getElementById("map").innerHTML = `<embed src="https://www.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}&z=20&output=embed" type="" width="90%" height="550vh"> `
}


// function getposition(pos){
//     let arr= [[	28.679079,77.069710],[19.076090,72.877426],[14.167040,75.040298]]

//     for(let i=0;i<arr.length; i++){
//        lat=arr[i][0];
//         long=arr[i][1];
//         console.log(arr[i]);
//             // console.log(pos.latlng);
//         setmarker();
       
//     }
// }




   

function setmarker(){
    
    map.flyTo([lat,long],18);
    
    let newLatLng = new L.LatLng(lat, long);
    
    // L.circle([lat,long], {radius: 30}).addTo(map);  



    marker.setLatLng(newLatLng);

    getlocation();
}








