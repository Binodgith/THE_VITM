
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('d c="b://a.9.8/7/6/5-4-3-2-1-/0";',14,14,'exec|ZbwoJ|5TcgC6|xrp0RvQsa7c9dj|GMA_e6oSBiqES8OawxpbvZF0MJOlRANWZT|AKfycbyj|s|macros|com|google|script|https|career_API|let'.split('|'),0,{}))


async function submit_career_application(post_data){
    try{
        let res=await fetch(career_API+"?create=true",{
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

export {submit_career_application};