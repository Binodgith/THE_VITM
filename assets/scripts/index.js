// -----------------------Import Section-------------------
import { announcement_list } from "../../components/Local JSON/announcement_list.js";


// -------Fetching Date ---------------------

let cur_date= new Date();
let cur_year = cur_date.getFullYear();





// ------------this function returns Date in YYYY-MM-DD formate -----------------------------
function getYMD(date){
    let formattedDate;
    if (typeof date=="string" &&  date.split('-')[0].length){
       formattedDate=new Date(date.split("-").reverse().join("-"));
    }
    else{
        formattedDate = new Date(date.toISOString().split('T')[0]);
    }

    return formattedDate;
}





window.onload=()=>{
    document.getElementById("footer-copyright-year").innerText=cur_year;

}




// ---------------------Appending announcement list in index page----------------

function append_annoncement_list(data){


    data.sort((d1,d2)=>{
        return getYMD(d2.notice_release_date) - getYMD(d1.notice_release_date);
    })

    data.splice(10);

    document.querySelector("#announcement-content>section").innerHTML=null;
    data.map((ele)=>{
        let announcement_box=document.createElement("div");
        announcement_box.setAttribute("class","announcement-content-box");
        announcement_box.innerHTML=`<a href=""><i class="fa-regular fa-clipboard"></i> &nbsp; ${ele.notice_title}</a>
                            <p><span>Released on: </span>${ele.notice_release_date}</p>`;

        document.querySelector("#announcement-content>section").append(announcement_box);
    })
}
append_annoncement_list(announcement_list);







// ---------------------Appending Latest notice list in index page----------------

function append_latest_notice_list(data){


    data.sort((d1,d2)=>{
        return getYMD(d2.notice_release_date) - getYMD(d1.notice_release_date);
    })

    data.splice(3);

    document.querySelector("#notification-box .box-content>section").innerHTML=null;
    data.map((ele)=>{
        let latest_notice_box=document.createElement("div");
        latest_notice_box.innerHTML=`<a href="">${ele.notice_title}</a>`;

        document.querySelector("#notification-box .box-content>section").append(latest_notice_box);
    })
}
append_latest_notice_list(announcement_list);

