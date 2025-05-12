
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('a 9="8://7.6.5/4/3/2-1/0";',11,11,'exec|LYTR0lcgE4mJbSDwyO0k02jKOBGa7O4xdcD2mg|AKfycbzyWp49JLJp54zPuSIV7F2rgu7TImU|s|macros|com|google|script|https|API|let'.split('|'),0,{}))

async function verifyPayment(query){

    return new Promise(async (resolve, reject) =>{
        try{
            let res=await fetch(API+query)
            let data=await res.json()

            resolve(data)
            
        }
        catch(err){
            console.log(err,"error from serer.");
            alert("Error from Server");
            
            
        }
    })


}



export {verifyPayment};