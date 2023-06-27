var num = 1; //Esta es una variable
var texto = "Valor en texto"; /* Esta es otra variable */
var bool = false; //true o false

console.log("Hola chicas!"); //Imprimimos en consola
console.log(texto);

var num1 = 10;
var num2 = 20;
var suma = num1 + num2; //10 + 20 = 30
console.log(suma);

var nombre = "Elena de Troya";
var mensaje = "Mi nombre es:";
console.log(mensaje+nombre); //"Mi nombre es:"+"Elena de Troya" 

var combinaTexto = "ABC";
console.log(combinaTexto+num1); //ABC10
console.log(combinaTexto + num1 + num2); //ABC1020
console.log(num1 + num2 + combinaTexto); //30ABC

var orden = 10 + 20 / 6; // * / % prioridad
console.log(orden);

var orden2 = (10 + 20) / 6;
console.log(orden2);

var n = 13;
//n = n + 4;
n += 4; //Estoy sumando a lo que antes tenía
n++; //sumamos 1 a lo que antes teníamos
console.log(n);

n -= 4; //esta restando a lo que teníamos en n
n--; //restando 1
console.log(n);

var nombre_completo = "Juana";
nombre_completo += " De Arco";
console.log(nombre_completo);