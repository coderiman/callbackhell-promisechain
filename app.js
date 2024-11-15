// function hello()
// {
//     console.log("hello");
// }
// function demo()
// {
//     hello();
// }
// demo();
// function one()
// {
//     return 1;
// }
// function two()
// {
//     return one() + one();
// }
// function three(){
//     return two() + one();
//     console.log(ans);
// }
// three();
// setTimeout(()=>{
//     console.log("apna college")
// },2000);
// setTimeout(()=>{
//     console.log("Hello world")
// },2000);
// console.log("Hello....");
h1  = document.querySelector("h1");
// function changeColor(color,delay,nextcolor){
//    setTimeout(()=>{h1.style.color=color;
//     if(nextcolor)
//     nextcolor();},delay)
// }

// changeColor("red",1000,()=>{changeColor("orange",1000,()=>{
//     changeColor("green",1000,()=>{
//         changeColor("yellow",1000,()=>{
//             changeColor("blue",1000)
//         })})
// })})
// function savetoDb(data,success,failure){
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed>4)
//     {
//         success();
//     }
//     else{
//         failure();
//     }
// }
// savetoDb("apna college",()=>{console.log("your data saved!");
//     savetoDb("hello world",()=>{console.log("data2 saved!"),savetoDb("data3",()=>{console.log("data3 saved!")},()=>{console.log("data not saved!weak connection!")})},()=>{console.log("failure2!weak connection")})
// },()=>{console.log("weak connection data not saved!")});

// function savetoDb(data){
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4) {
//             resolve("success! data was saved!");
//         } else {
//             reject("failure! data not saved");
//         }
//     });
// }
// savetoDb("Iman Samanta").then((result)=>{
//     console.log(result);
//     console.log("data1 saved!promise was resolved!");
//     return savetoDb("Anindya Mitra")
    
// }).then((result)=>{
//     console.log(result);
//     console.log("daat2 saved!promise was resolved");
//     return savetoDb("Sradha");
// })
// .catch((error)=>{
//     console.log(error);
//     console.log("promise was rejected")
// })
function changecolor(color)
{
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{h1.style.color=color},1000);
    resolve("color was changed!");
   })
//    setTimeout(()=>{h1.style.color=color},1000)
}
changecolor("red")
.then((result)=>{
    console.log("red color completed");
    return changecolor("blue");
}).then(()=>{
  console.log("blue color completed")
  return changecolor("orange")
}).then(()=>{
    console.log("orange color completed");
}).catch(()=>{
    console.log("error in changing color");
})

