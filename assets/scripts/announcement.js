// -------------------Importing announcement list-----------------------------------

import { announcement_list } from "../../components/Local JSON/announcement_list.js";


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




//---------------------- appending announcement list ---------------------------------------------
function append_annoncement_list(data){


    data.sort((d1,d2)=>{
        return getYMD(d2.notice_release_date) - getYMD(d1.notice_release_date);
    })


    document.querySelector("#announcement-content-main>section").innerHTML=null;
    data.map((ele)=>{
        let announcement_box_main=document.createElement("div");
        announcement_box_main.setAttribute("class","announcement-content-box-main");
        announcement_box_main.innerHTML=`<a href=""><i class="fa-regular fa-clipboard"></i> &nbsp; <li>${ele.notice_title}</li></a>
                            <p><span>Released on: </span>${ele.notice_release_date}</p>`;

        document.querySelector("#announcement-content-main>section").append(announcement_box_main);
    })
}
append_annoncement_list(announcement_list);

