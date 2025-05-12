eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('9 8="7://6.5.4/3/2/1/0"',10,10,'exec|AKfycbxKoBvuZOmj26SJ9Ru40og3_OUiw13Btml23_jclNsjriE0JtifWSIa5X356gbxpL1W|s|macros|com|google|script|https|API|let'.split('|'),0,{}))

async function getFeeDetails(query){

    return new Promise(async (resolve, reject) =>{
        try{
            let res=await fetch(API+"?getFeeTable=true&q="+query)
            let data=await res.json()

            resolve(data)
            
        }
        catch(err){
            console.log(err,"error from serer.");
            alert("Error from Server");
            
            
        }
    })


}



export {getFeeDetails};