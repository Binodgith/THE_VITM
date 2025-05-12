


eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('a 9="8://7.6.5/4/3/2-1/0";',11,11,'exec|l3wMEq7g|AKfycbwbFB9wBm_D2BRBAIPd4Dazar1qQly2tJuZhIhi2GYOM7k3omS0XhIvT8dNZ|s|macros|com|google|script|https|api|let'.split('|'),0,{}))

let sent_email_res;

async function sent_email_otp(email,name){
    try{
        let response = await fetch(api+`?sent=true&email=${email}&name=${name}`);
        let data = await response.json();
        sent_email_res=JSON.parse(JSON.stringify(data[0]));
        return sent_email_res; 
    }
    catch(err){
        console.log("Error From server side");
    }

}



async function verify_email_otp(email,token_number,otp){
    try{
        let response = await fetch(api+`?otpverify=true&email=${email}&token_number=${token_number}&otp=${otp}`);
        let data = await response.json();
        return data[0];
    }
    catch(err){
        console.log("Error From server side");
    }

}


export {sent_email_otp, verify_email_otp};