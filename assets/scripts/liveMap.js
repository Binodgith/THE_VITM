

   
   
   let map = L.map('map',{center:[19.3150, 84.7941],zoom:17});

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var myIcon = L.icon({
        iconUrl: 'https://i.ibb.co/Csn1WqJs/ac0ho6cs-copy.png',
        iconSize: [25, 45],
        iconAnchor: [15,25],
        // popupAnchor: [-3, -76],
        // shadowUrl: 'https://cdn-icons-png.flaticon.com/512/9249/9249336.png',
        // shadowSize: [68, 95],
        shadowAnchor: [25, 25]
    });
    let marker=L.marker([19.3150, 84.7941],{icon:myIcon,zoom:13}).addTo(map);

    


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
    
    map.setView([lat,long],17);
    
    let newLatLng = new L.LatLng(lat, long);
    
    L.circle([lat,long], {radius: 30}).addTo(map);  



    marker.setLatLng(newLatLng);

    
   
    

    // getlocation();
}








