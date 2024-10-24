let admission_notice_list=[
    {
        notice_id:"an001",
        notice_date:"20-08-2024",
        notice_content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptatem. Perferendis dolore placeat earum at!",
        notice_file:"56456dftgsdfs4sdf584s565"
    },
    {
        notice_id:"an002",
        notice_date:"25-08-2024",
        notice_content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptatem. Perferendis dolore placeat earum at!",
        notice_file:""
    },
    {
        notice_id:"an003",
        notice_date:"28-08-2024",
        notice_content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptatem. Perferendis dolore placeat earum at!",
        notice_file:"sdgfsd6541s6df8541sdf"
    },
    {
        notice_id:"an004",
        notice_date:"20-08-2024",
        notice_content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptatem. Perferendis dolore placeat earum at!",
        notice_file:""
    },
    {
        notice_id:"an005",
        notice_date:"23-10-2024",
        notice_content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptatem. Perferendis dolore placeat earum at!",
        notice_file:"dsfd56846sdf464sdf"
    },
    {
        notice_id:"an006",
        notice_date:"21-10-2024",
        notice_content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptatem. Perferendis dolore placeat earum at!",
        notice_file:""
    },
    {
        notice_id:"an007",
        notice_date:"20-08-2024",
        notice_content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptatem. Perferendis dolore placeat earum at!",
        notice_file:""
    },
    {
        notice_id:"an008",
        notice_date:"24-10-2024",
        notice_content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptatem. Perferendis dolore placeat earum at!",
        notice_file:""
    },
    {
        notice_id:"an009",
        notice_date:"20-08-2024",
        notice_content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptatem. Perferendis dolore placeat earum at!",
        notice_file:""
    },
    {
        notice_id:"an0010",
        notice_date:"20-08-2024",
        notice_content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptatem. Perferendis dolore placeat earum at!",
        notice_file:""
    },
    {
        notice_id:"an0011",
        notice_date:"20-08-2024",
        notice_content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptatem. Perferendis dolore placeat earum at!",
        notice_file:"sdfgsdsd86sdf4s6d87f894"
    },
    {
        notice_id:"an0012",
        notice_date:"20-08-2024",
        notice_content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptatem. Perferendis dolore placeat earum at!",
        notice_file:""
    },
    {
        notice_id:"an0013",
        notice_date:"20-08-2024",
        notice_content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptatem. Perferendis dolore placeat earum at!",
        notice_file:""
    },
    {
        notice_id:"an0014",
        notice_date:"20-08-2024",
        notice_content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptatem. Perferendis dolore placeat earum at!",
        notice_file:""
    },
    {
        notice_id:"an0015",
        notice_date:"20-08-2024",
        notice_content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptatem. Perferendis dolore placeat earum at!",
        notice_file:""
    },
    {
        notice_id:"an0016",
        notice_date:"20-08-2024",
        notice_content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptatem. Perferendis dolore placeat earum at!",
        notice_file:""
    },
    {
        notice_id:"an0017",
        notice_date:"20-08-2024",
        notice_content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptatem. Perferendis dolore placeat earum at!",
        notice_file:""
    },
    {
        notice_id:"an0018",
        notice_date:"20-08-2024",
        notice_content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptatem. Perferendis dolore placeat earum at!",
        notice_file:""
    },
    {
        notice_id:"an0019",
        notice_date:"20-08-2024",
        notice_content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptatem. Perferendis dolore placeat earum at!",
        notice_file:""
    },

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



// -------------------------Apppeing Notices by fetching from Database-----------------------

let append_admission_notice_list=(data)=>{

    data.sort((d1,d2)=>{
        return getYMD(d2.notice_date) - getYMD(d1.notice_date);
    })
    data.map((ele)=>{
        let notice_box_div=document.createElement("div");
        notice_box_div.setAttribute("class","notice-box");
 
        if(ele.notice_file!=""){
            notice_box_div.innerHTML=`<div class="notice-content">
                                <li><a href="https://drive.google.com/uc?export=download&id=${ele.notice_file}" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> &nbsp;</a>${ele.notice_content}</li>
                            </div>
                            <div class="notice-date">
                                <p><span>Released On:- </span>${ele.notice_date}</p>
                            </div>`;
        }
        else{
            notice_box_div.innerHTML=`<div class="notice-content">
                                <li><a href="https://drive.google.com/uc?export=download&id=${ele.notice_file}" target="_blank"></a>${ele.notice_content}</li>
                            </div>
                            <div class="notice-date">
                                <p><span>Released On:- </span>${ele.notice_date}</p>
                            </div>`;
        }

        document.querySelector("#admission-notice-list-container #admission-notice-list").append(notice_box_div);
    })

}

append_admission_notice_list(admission_notice_list);