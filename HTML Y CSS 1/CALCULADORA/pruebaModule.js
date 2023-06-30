


export function suma(valor1,valor2,boton,resultSuma,borrar) {
    const elValor1 = document.querySelector(valor1);
    const elValor2 = document.querySelector(valor2);
    const resultSum = document.querySelector(resultSuma)
    document.addEventListener("click", e => {
        if (e.target.matches(boton)) {
            const suma = Number(elValor1.value) + Number(elValor2.value);
            resultSum.innerHTML = `<h4>${suma}<h4/>`;
    }
        if (e.target.matches(borrar)) {
            elValor1.value = null
            elValor2.value = null
            resultSum.innerHTML = null
    }
})

}


export function resta(valor1r,valor2r,botonR,resultResta,borrarR){
    const elvalor1r = document.querySelector(valor1r);
    const elvalor2r = document.querySelector(valor2r);
    const elResultResta = document.querySelector(resultResta);
        document.addEventListener("click", (e) => {
            if (e.target.matches(botonR)) {
                const resta = Number(elvalor1r.value) - Number(elvalor2r.value);
                elResultResta.innerHTML = `<h4>${resta}<h4/>`;
        }
            if (e.target.matches(borrarR)) {
                elvalor1r.value = "";
                elvalor2r.value = "";
                elResultResta.innerHTML = "";
            }
    })
    }


export function multiplicacion(val1M,val2M,btnCalcular,resultM,borrarM) {

    const valor1M = document.querySelector(val1M);
    const valor2M = document.querySelector(val2M);
    const resultMulti = document.querySelector(resultM);

    document.addEventListener("click", (e) => {
        if (e.target.matches(btnCalcular)) {
            const multiplicacion = Number(valor1M.value) * Number(valor2M.value);
            resultMulti.innerHTML =`<h4>${multiplicacion}<h4/>`
        }
        if (e.target.matches(borrarM)) {
            valor1M.value = null;
            valor2M.value = null;
            resultMulti.innerHTML = null;
        }
    })

}















   export function iniciarReloj(inicio,termino,hora){
    let contadorHora;
        document.addEventListener("click", (e) => {
            if (e.target.matches(inicio)) {
                contadorHora = setInterval(() => {
                    const inicioReloj = new Date().toLocaleTimeString();
                    document.querySelector(hora).innerHTML = `<h4>${inicioReloj}<h4/>`;
                }, 1000);  
                e.target.disabled = true;
                document.querySelector(inicio).style.backgroundColor = "red"
            }
             if (e.target.matches(termino)) {
                clearInterval(contadorHora)
                document.querySelector(hora).innerHTML = null
                document.querySelector(inicio).style.backgroundColor = "greenyellow"
                document.querySelector(inicio).disabled = false
             }
        })
    }
