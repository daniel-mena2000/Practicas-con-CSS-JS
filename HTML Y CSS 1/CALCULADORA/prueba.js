import { iniciarReloj, multiplicacion, resta, suma } from "./pruebaModule.js";


document.addEventListener("DOMContentLoaded", e => {
    suma(".valor1",".valor2", ".botonRS", ".resultSuma", ".btnBorrar")
    resta(".valorRes1",".valorRes2",".btnRR",".resultResta",".btnBorrarRes")
    multiplicacion(".valorMul1",".valorMul2", ".btnRM", ".resultMulti",".btnBorrarMul")
    iniciarReloj(".inicio",".termino",".hora")
})

