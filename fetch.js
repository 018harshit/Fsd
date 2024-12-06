
let url='https://api.github.com/users/018harshit';
// let b = fetch(url);
// b.then((data)=>{
//     console.log(data)
//     return data.json();
// }).then((data)=>{
//     console.log(data);
// })
async function fetchdata(){
    try{
        let b=await fetch(url);
        let c=await b.json();
        console.log(c);

        document.getElementById(click);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("first")
    }
}
fetchdata();