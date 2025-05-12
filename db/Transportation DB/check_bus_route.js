eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('b a="9://8.7.6/5/4/3-2-1/0";',12,12,'exec|v0EMr5894qfAZzIVa_MrnsFpppZhvzF9XQI_9Ogg|yaaTdPCDHGOpmA4|AKfycbzryEe0KggIh|s|macros|com|google|script|https|API|let'.split('|'),0,{}))

async function check_bus_route(query){

    return new Promise(async (resolve, reject) =>{
        try{
            let res=await fetch(API+"?bus_rout_check=true&q="+query)
            let data=await res.json()

            resolve(data)
            
        }
        catch(err){
            console.log(err,"error from serer.");
            alert("Error from Server");
            
            
        }
    })


}



export {check_bus_route};