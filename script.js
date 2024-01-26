let login_area = document.querySelector(".login-area");
let btn = document.querySelector(".signIn");

// console.log(login_area);

btn.addEventListener("click", ()=>{
    login_area.classList.toggle("hidden");
})


