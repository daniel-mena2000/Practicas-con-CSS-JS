


export function cuentaRegresiva(f1,f2,btnf,result) {
    const fecha1 = document.getElementById(f1);
    const fecha2 = document.getElementById(f2);
    const resultDate = document.querySelector(result)
    document.addEventListener("click", (e) => {
        if (e.target.matches(btnf)) {

            const restafechas = new Date(fecha1.value).getTime() - new Date(fecha2.value).getTime()
            const anios = 1000 * 60 * 60 * 24 * 365;
            const dias = 1000 * 60 * 60 * 24;
            const aniosHumanos = Math.abs( Math.floor(restafechas / anios) + 1)
            const diasHumanos = Math.abs( Math.floor(restafechas / dias))

            if (fecha1.value > fecha2.value) {
                resultDate.innerHTML = `<h4> Faltan ${aniosHumanos} años y ${diasHumanos} dias<h4/>`;
            }
            if (fecha1.value < fecha2.value) {
                resultDate.innerHTML = `<h4> Han pasado ${aniosHumanos} años y ${diasHumanos} dias<h4/>`;
            }else{
                resultDate.innerHTML = `<h4> Faltan ${aniosHumanos - 1} años y ${diasHumanos} dias<h4/>`;
            }
        }
    })

}