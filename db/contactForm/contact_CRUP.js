
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('c b="a://9.8.7/6/5/4-3-2-1/0";',13,13,'exec|vL|xR3Ez5mtbzWAagjLilO1aIIp5dg2V1PiJZ1xoRX|zHg9ZwnoYeVN|AKfycbxFGrXAlmnG|s|macros|com|google|script|https|API_contact|let'.split('|'),0,{}))

async function submitContactForm(post_data){

    try{
        let res=await fetch(API_contact+"?create=true",{
            method:"POST",
            body:JSON.stringify(post_data)
  
        })
        return true;
        
      
    }
    catch(err){
        console.log(err,"error from serer.");
        return false;
        
    }

    return false;
}


export {submitContactForm};