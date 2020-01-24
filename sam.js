

let numero1;
let numero2;
let resultado; 

// Creando función de suma
function sumar(n1, n2) {

  let result = n1 + n2
  return result // Momentaniamente devuelve la suma de los dos numeros. 
}

document.querySelector('#uno').addEvenListener('click', function () {

  numero1 = document.getElementById("calculadora").value;
  operacion = "+" 

})

document.querySelector('#resultado').addEvenListener('click', function () {

  // sacar el segundo numero del input 
  numero2 = document.getElementById("calculadora").value;

  resultado = 0;
  // Descubrir cual es la operacion que debo hacer y llamar la fubncion correcta. con un if
  if (operacion == '+') {
   resultado = sumar(numero1, numero2)
  } 








  // imprimir el resultado en el input

})

// Creando función de resta

let restNum1;
let restNum2;
let resta; 
function restar(n1, n2) {

  let rest1 = document.getElementById(id).value;
  let rest2 = document.getElementById(id).value;
  let result = rest1 - rest2
  return result // Momentaniamente devuelve la restade los dos numeros.
}
document.querySelector('button').addEvenListener('click', function(){

  restNum1 = document.getElementById("calculadora").value;
  resta = "-"


})

let multNum1;
let multNum2;

// Función que multiplica
function multplicar(n1, n2) {

  let mult1 = document.getElementById(id).value;
  let mult2 = document.getElementById(id).value;
  let result = mult1 * mult2
  return result // Momentaniamente devuelve la multiplicación de los dos numeros.

}
document.querySelector('button').addEvenListener('click', multplicar)

let divNum1;
let divNum2;

// Función divir
function dividir(n1, n2) {
  let div1 = document.getElementById(id).value;
  let div2 = document.getElementById(id).value;
  let result = div1 / div2
  return result // Momentaniamente devuelve la divici de los dos numeros.
}
document.querySelector('button').addEvenListener('click', dividir)

let porNum1;
let porNum2;

// Funcion que calucla el porcentaje de un numero s
function porcentaje(n1, n2) {
  let por1 = document.getElementById(id).value;
  let por2 = document.getElementById(id).value;
  let result = por1 * por2 / 100
  return result // Momentaniamente devuelve el porcentaje de los dos numeros.
}
document.querySelector('button').addEvenListener('click', porcentaje)

/* switch (operaciones) {

  case '+':
    sumar()
    break

  case '-':
    restar()
    break

  case '*':
    multplicar()
    break

  case '/':
    dividir()
    break

  case '%':
    porcentaje()
    break

} */