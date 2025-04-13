import { getRouteDetails } from "../../db/Transportation DB/getRouteDetails.js";


    let busN="B03";
    let rw="4";


    async function getRoute(busN){
        let res= await getRouteDetails(busN);
        console.log(res)
        console.log(res[1]["Latitude"]);
        
        embedRout(res);
        AllignStopages(res);
    }

    getRoute(busN);


    let map = L.map('map',{center:[19.245839,84.765546],zoom:5});

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        var busStopIcon = L.icon({
            iconUrl: '/assets/icons/busStop.png',
            iconSize: [50, 75],
            iconAnchor: [30,60],
            // popupAnchor: [-3, -76],
            // shadowUrl: 'https://cdn-icons-png.flaticon.com/512/9249/9249336.png',
            // shadowSize: [68, 95],
            shadowAnchor: [25, 25]
        });

        var myBusIcon = L.icon({
            iconUrl: 'https://cdn2.iconfinder.com/data/icons/map-locations-colored-outlined-pixel-perfect/64/pin-map-location-06-1024.png',
            iconSize: [50, 75],
            iconAnchor: [30,60],
            // popupAnchor: [-3, -76],
            // shadowUrl: 'https://cdn-icons-png.flaticon.com/512/9249/9249336.png',
            // shadowSize: [68, 95],
            shadowAnchor: [25, 25]
        });





    function embedRout(res){
        

        // let marker=L.marker([19.245839,84.765546],{zoom:20}).addTo(map).bindPopup("Your live position");
        let points=[];
        res.map(pos=>{
            let x=L.latLng(pos["Latitude"], pos["Longitude"]);
            points.push(x);
        }) 

        let myRoute=L.Routing.control({
            waypoints: points,
                
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
                }).bindPopup(res[i]["Stopage_Name"]+","+res[i]["Note"]);
            }   
                        
        }).addTo(map);






    }  



    function setmarker(){
    
        map.flyTo([lat,long],17);
        
        let newLatLng = new L.LatLng(lat, long);
        
        // L.circle([lat,long], {radius: 30}).addTo(map);  
    
    
    
        marker.setLatLng(newLatLng);
    
    
    }






    function AllignStopages(res){
        document.querySelector(".rb-container .rb").innerHTML='';
        res.map(pos=>{
            let StoageLI=document.createElement("li");
            StoageLI.setAttribute("class","rb-item");
            StoageLI.setAttribute("ng-repeat","itembx");

            StoageLI.innerHTML=`<div class="item-title">${pos.Stopage_Name}</div>
                <div class="timestamp">
                   00:00 PM
                </div>`

            document.querySelector(".rb-container .rb").append(StoageLI);

            
        })
    }


 
    
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





    // --------------------------------------------------bus live Icon-------------------------
  


    // --------------------------------------------------bus stopage point icon----------------------
   
    


//    ----------------------------------------------------------Assigning routing service------------------------------
    

    

   

// function getlocation() {
//     // console.log(navigator.geolocation);
//     navigator.geolocation.getCurrentPosition(getposition);
//     // if (navigator.getlocation) {

//     // }
// }
 
// getlocation();

// let  long,lat;
// function getposition(pos) {
//     long=pos.coords.longitude;
//     lat=pos.coords.latitude;
//     console.log(pos.coords);
//     setmarker();
//     // showonmap(lat,long);
//     // document.getElementById("map").innerHTML = `<embed src="https://www.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}&z=20&output=embed" type="" width="90%" height="550vh"> `
// }


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




   









