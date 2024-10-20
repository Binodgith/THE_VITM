let career_opportunity_list=[
    {
        job_roll:"Assistant professor (Teaching staff)",
        job_location:"At Institute (Berhampur)",
        job_adv_no:"VITM-TS-00011",
        job_status:"active",
        job_released_date:"28-09-2024",
        job_application_start:"01-10-2024",
        job_application_ends:"30-11-2024",
        job_appliaction_id:"241025468",
        job_short_description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae modi porro accusantium officiis veritatis, illo esse facere perferendis quaerat asperiores perspiciatis!",
        job_prospectus_file_id:""
    },
    
    {
        job_roll:"HOD ETC Department (Teaching staff)",
        job_location:"At Institute (Berhampur)",
        job_adv_no:"VITM-TS-00013",
        job_status:"active",
        job_released_date:"28-09-2024",
        job_application_start:"01-10-2024",
        job_application_ends:"30-11-2024",
        job_appliaction_id:"241025469",
        job_short_description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae modi porro accusantium officiis veritatis, illo esse facere perferendis quaerat asperiores perspiciatis!",
        job_prospectus_file_id:""

    },
    {
        job_roll:"Plumber (Non-Teaching staff)",
        job_location:"At Institute (Berhampur)",
        job_adv_no:"VITM-TS-00014",
        job_status:"active",
        job_released_date:"28-09-2024",
        job_application_start:"01-10-2024",
        job_application_ends:"30-11-2024",
        job_appliaction_id:"241056895",
        job_short_description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae modi porro accusantium officiis veritatis, illo esse facere perferendis quaerat asperiores perspiciatis!",
        job_prospectus_file_id:""

    },
    {
        job_roll:"DTP - Data Entry Operator (Non-Teaching staff)",
        job_location:"Work From Home",
        job_adv_no:"VITM-TS-00016",
        job_status:"active",
        job_released_date:"28-09-2024",
        job_application_start:"01-10-2024",
        job_application_ends:"30-11-2024",
        job_appliaction_id:"241021154",
        job_short_description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae modi porro accusantium officiis veritatis, illo esse facere perferendis quaerat asperiores perspiciatis!",
        job_prospectus_file_id:""

    },
    {
        job_roll:"Electrician (Teaching staff)",
        job_location:"At Institute (Berhampur)",
        job_adv_no:"VITM-TS-00017",
        job_status:"inactive",
        job_released_date:"28-09-2024",
        job_application_start:"01-10-2024",
        job_application_ends:"30-11-2024",
        job_appliaction_id:"241014587",
        job_short_description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae modi porro accusantium officiis veritatis, illo esse facere perferendis quaerat asperiores perspiciatis!",
        job_prospectus_file_id:""

    },
    {
        job_roll:"Assistant professor (Teaching staff)",
        job_location:"At Institute (Berhampur)",
        job_adv_no:"VITM-TS-00018",
        job_status:"active",
        job_released_date:"28-09-2024",
        job_application_start:"01-08-2024",
        job_application_ends:"30-09-2024",
        job_appliaction_id:"241056895",
        job_short_description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae modi porro accusantium officiis veritatis, illo esse facere perferendis quaerat asperiores perspiciatis!",
        job_prospectus_file_id:""

    },
    {
        job_roll:"professor (Teaching staff)",
        job_location:"At Institute (Berhampur)",
        job_adv_no:"VITM-TS-00020",
        job_status:"inactive",
        job_released_date:"28-09-2024",
        job_application_start:"01-10-2024",
        job_application_ends:"30-11-2024",
        job_appliaction_id:"241056895",
        job_short_description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae modi porro accusantium officiis veritatis, illo esse facere perferendis quaerat asperiores perspiciatis!",
        job_prospectus_file_id:""

    }

]


// ----------------get date formate in yyyy-mm-dd--------------------------------
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




// ----------------------Appending data in career opportunity section


let append_career_opportunity_list=(received_data,aplication_status)=>{

    document.querySelector("#career-opportunity-list > .opportunity-list") .innerHTML=null;

    let data= received_data.filter((ele)=>{
        let startdate=getYMD(ele.job_application_start).getTime();
        let enddate=getYMD(ele.job_application_ends).getTime();
        
        let today = new Date();
        let today_date= getYMD(today).getTime();

        if (aplication_status=="opened"){
            return today_date >= startdate && today <=enddate;
        }
        else if(aplication_status=="closed"){
            return !(today_date >= startdate && today <=enddate) ;
        }
    })


    data.map((ele)=>{
        let recruitment_box=document.createElement("div");
        recruitment_box.setAttribute("class","recruitment-box");

        if(aplication_status=="opened"){
             recruitment_box.innerHTML=`<div class="recruitment-details">
                            <div class="recruitment-role">
                                <p>${ele.job_roll}</p>
                            </div>
                            <div class="recruitment-location">
                                <p><b>Location: </b> ${ele.job_location}</p>
                            </div>
                            <div class="recruitment-advertisement-number">
                                <p><b>Advertisement No.: </b> ${ele.job_adv_no}</p>
                            </div>
                            <div class="recruitment-prospectus-file">
                                <a href="https://drive.google.com/uc?export=download&id=${ele.job_prospectus_file_id}"><span><i class="fa-regular fa-file-pdf"></i></span>Prospectus</a>
                            </div>
                            <div class="recruitment-application-date">
                                <p><b>Application Started: </b> ${ele.job_application_start}</p>
                                <p><b>Application Closing: </b> ${ele.job_application_ends}</p>
                            </div>

                            <div class="recruitment-description">
                                <p>${ele.job_short_description}</p>
                            </div>
                        </div> 
                        <div class="recruitment-apply-btn">
                            <a href="">Apply Now</a>
                        </div>`
        }
        else if(aplication_status=="closed"){
            recruitment_box.style.filter='grayscale()';
            recruitment_box.style.opacity='0.8';

            recruitment_box.innerHTML=`<div class="recruitment-details">
                            <div class="recruitment-role">
                                <p>${ele.job_roll}</p>
                            </div>
                            <div class="recruitment-location">
                                <p><b>Location: </b> ${ele.job_location}</p>
                            </div>
                            <div class="recruitment-advertisement-number">
                                <p><b>Advertisement No.: </b> ${ele.job_adv_no}</p>
                            </div>
                            <div class="recruitment-prospectus-file">
                                <a href="https://drive.google.com/uc?export=download&id=${ele.job_prospectus_file_id}"><span><i class="fa-regular fa-file-pdf"></i></span>Prospectus</a>
                            </div>
                            <div class="recruitment-application-date">
                                <p><b>Application Started: </b> ${ele.job_application_start}</p>
                                <p><b>Application Closing: </b> ${ele.job_application_ends}</p>
                            </div>

                            <div class="recruitment-description">
                                <p>${ele.job_short_description}</p>
                            </div>
                        </div> 
                        <div class="recruitment-apply-btn">

                        </div>`
        }

        

        document.querySelector("#career-opportunity-list > .opportunity-list") .append(recruitment_box);

    })



}

append_career_opportunity_list(career_opportunity_list,"opened");





// ---------------Call career opportunity buttons-------------------
let career_sec_btn=document.querySelectorAll("#career-opportunity-btn .career-opportunity-dropdown");

career_sec_btn.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        document.querySelector("#career-opportunity-btn .active").classList.remove("active");
        e.target.classList.add("active");

        if( e.target.id=="career-current-opportunity"){
            append_career_opportunity_list(career_opportunity_list,"opened");

        }
        else if(e.target.id=="career-cloed-application"){
            append_career_opportunity_list(career_opportunity_list,"closed");
  
        }
    })
})




