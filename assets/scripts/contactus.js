import { sent_email_otp,verify_email_otp} from "../../components/Functions/email_otp.js";
import { start_loader_1,start_loader_2,close_loader } from "../../components/loader/loader.js";
import { alert_popup } from "../../components/popup/alert_popup.js";

// --------------Email Verify-------------------

let email_varified=false;
let email_inserted="";
let token_generated="";

document.querySelector(".otp-verify-sec #contact-email-otp-send-btn").addEventListener("click",(e)=>{
    e.preventDefault();
    start_loader_1();
    let email_input=document.querySelector(".otp-verify-sec #contact-person-email-input").value;
    let name_input=document.querySelector("#contact-person-name #contact-person-name-input").value;
    if(email_input!=""){
        let recieved_data=sent_email_otp(email_input,name_input);
        recieved_data.then((e) => {
            if(e.sent_status){
                close_loader();
                email_inserted=email_input;
                token_generated=e.token_number;
                // alert(e.message);
                alert_popup("success",e.message);
                document.querySelector('#contact-person-email .display-off').classList.remove('display-off');
                document.querySelector(".otp-verify-sec #contact-email-otp-send-btn").disabled='true';
                document.querySelector(".otp-verify-sec #contact-email-otp-send-btn").textContent='Resend';
                document.querySelector(".otp-verify-sec #contact-email-otp-send-btn").style.opacity="0.5";

            }
            else{
                // alert("issue occured from server side")
                alert_popup("danger","issue occured from server side");
                close_loader()
            }
        
        });
        
    }
    else{
        // alert('Enter Valid Email');
        alert_popup("danger","Enter Valid Email");
        close_loader();
    }
       
});
   
document.querySelector(".otp-verify-sec #contact-email-otp-verify-btn").addEventListener("click",(e)=>{
    start_loader_1();
    e.preventDefault();

    let email_otp_input=document.querySelector(".otp-verify-sec #contact-email-otp-input").value;
    
    if(email_otp_input!="" && email_otp_input.length==6){
        let recieved_data=verify_email_otp(email_inserted,token_generated,email_otp_input)
        recieved_data.then((e)=>{
            if(e.verify_status){
                close_loader();
                email_varified=true;
                document.querySelector('#contact-person-email .email-box-sec').classList.add('display-off');
                document.querySelector(".otp-verify-sec #contact-person-email-input").disabled='true';
                document.querySelector(".otp-verify-sec #contact-email-otp-send-btn").textContent="Verified";
                document.querySelector(".otp-verify-sec #contact-email-otp-send-btn").style.opacity="1";
                document.querySelector(".otp-verify-sec #contact-email-otp-send-btn").style.backgroundColor="green";
            }
            else{
                close_loader();
                // alert(e.message);
                alert_popup("danger",e.message);
                email_otp_input=null;
            }
        })
      
    }
    else{
        close_loader();
        // alert("Enter Valid OTP");
        alert_popup("danger","Enter Valid OTP");
        email_otp_input=null;
    }


})





