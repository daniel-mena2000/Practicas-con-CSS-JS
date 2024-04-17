

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu")






const menuBtnFun = () =>{
    menu.classList.toggle("is-active")
    
// Si alguien da click a algun enlace que esta dentro del menu
    document.addEventListener("click", e=>{
        if (e.target.matches(".menu a")) {

            menu.classList.remove("is-active")
        }
    })
}


menuBtn.addEventListener("click", e =>{
    menuBtnFun()
})