

const header = document.querySelector("header");
// Si el scroll en Y es mayor a cero aplicaremos los estilos css de la clase "sticky" que se agregara o quitara segun el scrool
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0)
})