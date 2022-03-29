
// const loginform=document.querySelector("#login-form");
// const loginInput=document.querySelector("#login-form input");

// function a(event){
//     event.preventDefault();
//     console.log(loginInput.value);
// }
// loginform.addEventListener("submit",a);
// const loginForm=document.querySelector("#login-form");
// const loginInput=document.querySelector("#login-form input");
// const greeting=document.querySelector("#greeting");
// // const HDN_CLASS="hidden";
// // function a(event){
// //     event.preventDefault();
// //     loginForm.classList.add(HDN_CLASS);
// //     const username=loginInput.value;
// //     greeting.innerText="Hello"+username;
// //     greeting.classList.remove(HDN_CLASS);   
// // }
// // loginForm.addEventListener("submit",a);
// const HDN_CLASS="hidden";
// function a(event){
//     event.preventDefault();
//     loginForm.classList.add(HDN_CLASS);
//     const username=loginInput.value;
//     localStorage.setItem("username",username)
//     greeting.innerHTML=`hello ${username}`;
//     greeting.classList.remove(HDN_CLASS);
// }
// loginForm.addEventListener("submit",a);
// -------------------------------------------------
// const loginForm=document.querySelector("#login-form");
// const loginInput=document.querySelector("#login-form input");
// const greeting=document.querySelector("#greeting");
// const HDC="hidden";
// const USERN="username";
// function a(event){
//     event.preventDefault();
//     loginForm.classList.add(HDC);
//     const username=loginInput.value;
//     localStorage.setItem(USERN,username);
//     paintGreetings(username);
// }


// function paintGreetings(username){
//     greeting.innerText=`hello ${username}`;
//     greeting.classList.remove(HDC);
// }


// const savedUsername=localStorage.getItem(USERN);
// if (savedUsername===null){
//     loginForm.classList.remove(HDC);
//     loginForm.addEventListener("submit",a);
// }else{
//   paintGreetings(savedUsername);
// }
// ------------------------------------------------------------
const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");
// const USERN="username";
// const HDN="hidden";
// function paintGreetings(user){
//     greeting.innerText=`Hello ${user}`;
//     greeting.classList.remove(HDN);
// }
// function handleSub(event){
//     event.preventDefault();
//     loginForm.classList.add(HDN)
//     const username=loginInput.value;
//     localStorage.getItem(USERN,username);
//     paintGreetings(username)
// }
// const savedUsername=localStorage.getItem(USERN);
// if (savedUsername===null){
//     loginForm.classList.remove(HDN);
//     loginForm.addEventListener("submit",handleSub);
// }else{
//     paintGreetings(savedUsername);
// }


const USERN="username";
const HDN="hidden";

function paintGreetings(user){
    greeting.innerText=`hello ${user}`;
    greeting.classList.remove(HDN);
}
function contSub(event){
    event.preventDefault();
    loginForm.classList.add(HDN);
    const username=loginInput.value;
    localStorage.setItem(USERN,username);
    paintGreetings(username);
}

const savedUsername=localStorage.getItem(USERN);
if (savedUsername===null){
    loginForm.classList.remove(HDN);
    loginForm.addEventListener("submit",contSub);
}else{
    paintGreetings(savedUsername);
}