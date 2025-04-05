   let map = L.map('map').setView([19.3150, 84.7941], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);




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




   

function setmarker(){
    

    map.setView([lat, long], 17);
    
    // map('map').setView([lat, long], 13);
    var myIcon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/9249/9249336.png',
        iconSize: [45, 95],
        iconAnchor: [60, 50],
        // popupAnchor: [-3, -76],
        // shadowUrl: 'https://cdn-icons-png.flaticon.com/512/9249/9249336.png',
        // shadowSize: [68, 95],
        shadowAnchor: [22, 94]
    });
   
    L.marker([lat, long],{icon:myIcon}).addTo(map);
    

    getlocation();
}








