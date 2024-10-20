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






// ----------for syllabus
// 

let id_finder={
    bt001:"B.Tech",
    bc002:"BCA",
    mt003:"M.TECH",
    mb004:"MBA",
    mc005:"MCA",

    //sem--------------

    s001:"1ST SEM",
    s002:"2ND SEM",
    s003:"3RD SEM",
    s004:"4TH SEM",
    s005:"5TH SEM",
    s006:"6TH SEM",
    s007:"7TH SEM",
    s008:"8TH SEM",
    s000:"ALL",


    //  branch------------

    //  btech----------

    bcs001:"CSE",
    bet002:"ETC",
    bee003:"EEE",
    bcv004:"CIVIL",
    bme005:"MECHANICAL",
    bch006:"CHEMICAL",
    b000:"ALL",

    // mtech ------------

    
    mcs001:"CSE",
    met002:"ETC",
    mee003:"EEE",
    mcv004:"CIVIL",
    mme005:"MECHANICAL",
    mch006:"CHEMICAL",
   
    // mba ----------------

    mib001:"INTERNATIONAL BUSINESS",
    mhr002:"HUMAN RESOURCE AND MANAGEMANT ",
    mba003:"BUSINESS ANALYTICS",
    mf004:"FINANCE",
    mr005:"MARJETING",


    // year---------------

    y001:"1ST YEAR",
    y002:"2ND YEAR",
    y003:"3RD YEAR",
    y004:"4TH YEAR",



    // subject -----------

    mth001:"MATHEMATICS",
    phy003:"PHYSICS",
    chem002:"CHEMISTRY",
    cp004:"C PROGRAMMING" , 
    bee005:"BASIC ELECTRICAL ENGINEERING" , 
    be006:"BASIC ELECTRONICS",
    bme007:"BASIC MECHANICAL ENGINEERING",
    em008:"ENGINEERING MECHANICS",
    ds009:"DATA STRUCTURE AND ALGORITHM",
    os010:"OPERATING SYSTEM",
    se011:"SOFTWARE ENGINEERING",
    oop013:"OBJECT ORIENTED PROGRAMMING LANGUAGE",
    ccp014:"CLOUD COUMPTING",
    aca015:"ADVANCE COMPUTER ARCHITECTURE",
    cg016:"COMPUTER GRAPHICS",
    cn017:"COMPUTER NETWORK",
    daa018:"DESIGN AND ANALYSIS OF ALGORITHM",
    it019:"INTERNET TECHNOLOGY",
    sta020:"STRUCTURAL ANALYSIS",
    act021:"ADVANCE CONCERETE TECHNOLOGY",
    gt022:"GEOTECHNICAL TECHNOLOGY",
    ee023:"ENVIRONMENTAL ENGINEERING",
    std024:"STRUCTURAL DESIGN ",
    dm025:"DESASTER MANAGEMENT",
    cs026:"CONTROL SYSTEM",
    fm027:"FLUID MECHANICS",
    rt028:"ROBOTICS",
    mce029:"MICRO-ECONOMICS",
    bst030:"BUSINESS STATICS",
    ob031:"ORGANISATIONAL BEHAVIOR",
    hrm032:"HUMAN RESOUSCE MANAGEMENT",
    ld033:"LEADERSHIP MANAGEMENT",
    pd034:"PROJRCT MANAJEMENT",
    cb035:"CONSUMER BEHAVIOR",
    am036:"ADVERTISING MANAGEMENT",
    bl037:"BUSINESS LAW",
    adec038:"ADMINISTRATIVE ECONOMICS",
    cd039:"COMPILER DESIGN",
    nt040:"NETWORK THEORY"


}



let syllabus_subject_extract={
    "bt001":{
        "bcs001":{
            "y001":['s001','s002'],
            "y002":['s003','s004'],
            "y003":['s005','s006'],
            "y004":['s007','s008'],
        },
        "bet002":{
            "y001":['s001','s002'],
            "y002":['s003','s004'],
            "y003":['s005','s006'],
            "y004":['s007','s008'],
        },
        "bee003":{
            "y001":['s001','s002'],
            "y002":['s003','s004'],
            "y003":['s005','s006'],
            "y004":['s007','s008'],
        },
        "bcv004":{
            "y001":['s001','s002'],
            "y002":['s003','s004'],
            "y003":['s005','s006'],
            "y004":['s007','s008'],
        },
        "bme005":{
            "y001":['s001','s002'],
            "y002":['s003','s004'],
            "y003":['s005','s006'],
            "y004":['s007','s008'],
        },
        "bch006":{
            "y001":['s001','s002'],
            "y002":['s003','s004'],
            "y003":['s005','s006'],
            "y004":['s007','s008'],
        },
        
    },
    "bc002":{
        "b000":{
            "y001":['s000'],
            "y002":['s000'],
            "y003":['s000'],
        },
    },
    "mt003":{
        "mcs001":{
            "y001":[
                's001','s002'
            ],
            "y002":['s001','s002'],
            
        },
        "met002":{
            "y001":[
                's001','s002'
            ],
            "y002":['s001','s002'],
            
        },
        "mee003":{
            "y001":[
                's001','s002'
            ],
            "y002":['s001','s002'],
            
        },
        "mcv004":{
            "y001":[
                's001','s002'
            ],
            "y002":['s001','s002'],
            
        },
        "mme005":{
            "y001":[
                's001','s002'
            ],
            "y002":['s001','s002'],
           
        },
        "mch005":{
            "y001":[
                's001','s002'
            ],
            "y002":['s001','s002'],
           
        },
    },
    "mb004":{
        "mib001":{
            "y001":[
                's001','s002'
            ],
            "y002":['s001','s002'],
        },
        "mhr002":{
            "y001":[
                's001','s002'
            ],
            "y002":['s001','s002'],
        },
        "mba003":{
            "y001":[
                's001','s002'
            ],
            "y002":['s001','s002'],
        },
        "mf004":{
            "y001":[
                's001','s002'
            ],
            "y002":['s001','s002'],
        },
        "mr005":{
            "y001":[
                's001','s002'
            ],
            "y002":['s001','s002'],
        },
    },
    "mc005":{
        "b000":{
            "y001":['s000'],
            "y002":['s000'],
        },
    },
}

let courses_selected=document.getElementById("courses-dropdown");
let branch_selected=document.getElementById("branch-dropdown");
let course_year_selected=document.getElementById("course-year-dropdown");
let semester_selected=document.getElementById("semester-dropdown");


for(let opt in syllabus_subject_extract){
    let option = document.createElement('option');
    option.value=opt;
    option.innerText=id_finder[opt];
    courses_selected.appendChild(option);
}

courses_selected.onchange=()=>{
    branch_selected.innerHTML=null;
    let default_option=document.createElement('option');
    default_option.innerText="Select Branch";
    branch_selected.append(default_option);
    
    for(let opt in syllabus_subject_extract[courses_selected.value]){
        let option = document.createElement('option');
        option.value=opt;
        option.innerText=id_finder[opt];
        branch_selected.appendChild(option);
    }
}

branch_selected.onchange=()=>{
    course_year_selected.innerHTML=null;
    let default_option=document.createElement('option');
    default_option.innerText="Select Branch";
    course_year_selected.append(default_option);
    
    for(let opt in syllabus_subject_extract[courses_selected.value][branch_selected.value]){
        let option = document.createElement('option');
        option.value=opt;
        option.innerText=id_finder[opt];
        course_year_selected.appendChild(option);
    }
}

