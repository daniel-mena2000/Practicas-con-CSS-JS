
function cambio() {
    const carritoInfo = document.getElementsByClassName("carrito");
    for (const elemento of carritoInfo) { // Itera sobre la colección de elementos
        elemento.classList.toggle("ver-block"); // Añade la clase 'rojo' a cada elemento
    }
}
document.addEventListener("click", (e) => {
    if (e.target.matches(".icon-cart i")) {
    cambio()
    }
})
