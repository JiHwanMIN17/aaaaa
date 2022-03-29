const clock=document.querySelector("h2#clock");

// function getDate(){
//     const date=new Date();
//     console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
// }

// setInterval(getDate,1000);


// function getDate(){
//     const date=new Date();
//     const hours=String(date.getHours()).padStart(2,"0");
//     const getMinutes=String(date.getMinutes()).padStart(2,"0");
//     const getSeconds=String(date.getSeconds()).padStart(2,"0");
//     clock.innerText=`${hours}:${getMinutes}:${getSeconds}`;   
// }
// getDate();
// setInterval(getDate,1000);

function getClock(){
    const date=new Date();
    
    const hours=String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");
    clock.innerHTML=`${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock,1000);