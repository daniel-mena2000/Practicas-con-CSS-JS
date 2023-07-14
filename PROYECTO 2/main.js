

const inputCard = document.querySelector("#inputCard");
const inputDate = document.querySelector("#inputDate");
const inputCVV = document.querySelector("#inputCVV");

//Mascaras, podemos poner cualquier simbolo solo para mas adelante identificarlos y sustituirlos
const maskNumber = '####-####-####-####';
const maskDate = '##/##';
const maskCVV = '###';

//actual
let current = "";
//Para cada uno de los input creamos un arreglo en donde se alamcenaran los valores
let cardNumber = [];
let dateNumber = [];
let cvvNumber = [];
//Cuando presione la tecla
inputCard.addEventListener("keydown", e => {
    if (e.key === "Tab") {
        return;
    }
    e.preventDefault();
//Cuando yo presione una tecla voy a mandar llamar esta funcion
//Esta funcion nos pedira lo siguiente, (e.key) seria la tecla que estamos presionando que solo aceptara numeros
    handleInput(maskNumber, e.key, cardNumber);
//Recordar que join es para unir
    inputCard.value = cardNumber.join("");
})

function handleInput(mask, key, arr){
//Este array nos permite que solo estos caracteres pueda ingresar el usuario
    let numbers = ['0', '1', '2', '3', '4','5','6','7','8','9'];
//Validaremos si la tecla es de retroceso para borrar, y que el arreglo que le pasemos a ala funcion sea mayor que 0
    if (key === 'Backspace' && arr.length > 0) {
        arr.pop();
        return;
    }
//Que pasa si no estamos presionando la tecla de retroceso, pues ahora si necesita validar por las teclas, osea nuestro arreglo de numeros
//Quiero que me valide si dentro de este arreglo existe el valor de "key" y ademas el arreglo cuando le saco la longitud le sumo 1 es menor o igual que mi mascara en su longitud, ejecute lo siguiente:
    if(numbers.includes(key) && arr.length + 1 <= mask.length){
//Ahora yo necesito saber si en mi mascara en la posicion de arr.length el caracter que tengo ahi es igual a mi signo (-) o (/) que son los caracteres que asignamos anteriormente
        if (mask[arr.length] === "-" || mask[arr.length] === "/") {
//Entonces a nuestro arreglo le agregamos el valor que hay en mascara en la posicion arr.length y despues la tecla
            arr.push(mask[arr.length], key);
        }else{
//Si lo anterior no es verdadero entonces solo agrego mi tecla pulsada
            arr.push(key);
        }
    }
}

