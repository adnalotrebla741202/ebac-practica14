/*EJERCICIOS JS I
INSTRUCCIONES: 
Resuelve cada uno de los ejercicios presentados a continuación y guarda tu resultado en una variable, esa variable colocala en la ultima linea de cada ejercicio al final de la expresión "document.getElementById('result').innerHTML = " para que pueda reflejarse en el HTML*/

//POR EJEMPLO:

let example = "Reemplazame";
document.getElementById('example').innerHTML = example;

// Todos los resultados tendran la variable example como valor para evitar errores en el código, reemplazala con tus propias variables

/*
1. Presentate en un parrafo.
Guarda en variables la siguiente información: tu nombre, edad, de donde eres y to hobby favorito y presentalos en una oración concatenando strings. Escribe tu código abajo
*/

name = "Alberto Landa Paleo";
age = 49;
city = "Huejotzingo - Puebla";
hobby = "escuchar música.";

presentation = "Mi nombre es " + name + ", tengo " + age + " años," + " vivo en " + city + " y mi hobby favorito es " + hobby;

document.getElementById('result1').innerHTML = presentation;


/*
2. Convertidor de grados Farenheit a Celcius.
Guarda los grados F en una variable y realiza las operaciones necesarias para convertirlos a C en una variable nueva. Escribe tu código abajo
*/

let f = 200;

let c = (f - 32) * (5 / 9);

let exercise2 = parseInt(f,10) + "°F = " + parseFloat(c,10) + "°C";


document.getElementById('result2').innerHTML = exercise2;


/*
3. Calculador de propina para restaurante
Guarda en variables la cantidad que gastó un cliente en un restaurante, en otra el 10% de propina, suma la cuenta total y concatena en una oración la info: "El cliente gasto: , La propina total es: , El total es: " Escribe tu código abajo
*/

let account = 1200;
let tip = (1200*0.1);
let finalAccount = account + tip;

let exercise3 = "El cliente gastó: $" + parseFloat(account,10) + ", La propina total es: $" + parseFloat(tip,10) + ", El total es: $" + parseFloat(finalAccount,10);

document.getElementById('result3').innerHTML = exercise3;

/*
4. Ejercicio libre
Simula un ejercicio similar a los 3 enteriores para desplegar el resultado que tu quieras. Escribe tu código abajo
*/

let digit1 = 5;
let digit2 = 6;

let and = 5 & 6;
let or = 5 | 6;
let xor = 5 ^ 6;
let nand = ~ (5 & 6);
let nor = ~ (5 | 6);

let exercise4 = parseInt(digit1,10) + " AND BIT A BIT " + parseInt(digit2,10) + " = " + parseInt(and,10) + "<br>"  + parseInt(digit1,10) + " OR BIT A BIT " + parseInt(digit2,10) + " = " + parseInt(or,10) + "<br>"  + parseInt(digit1,10) + " XOR BIT A BIT " + parseInt(digit2,10) + " = " + parseInt(xor,10)  + "<br>"  + parseInt(digit1,10) + " NAND BIT A BIT " + parseInt(digit2,10) + " = " + parseInt(nand,10) + "<br>"  + parseInt(digit1,10) + " NOR BIT A BIT " + parseInt(digit2,10) + " = " + parseInt(nor,10); 

document.getElementById('result4').innerHTML = exercise4;

/*
5. Ejercicio libre
Simula un ejercicio similar a los 3 enteriores para desplegar el resultado que tu quieras. Escribe tu código abajo
*/

let compareDigit01 = 5;
let compareDigit02 = 6;

let higher = 5 > 6;
let minor = 5 < 6;
let equal = 5 == 6;
let different = 5 != 6;

let exercise5 = parseInt(compareDigit01,10) + " > " + parseInt(compareDigit02,10) + " = " + higher + "<br>"  + parseInt(compareDigit01,10) + " < " + parseInt(compareDigit02,10) + " = " + minor + "<br>"  + parseInt(compareDigit01,10) + " == " + parseInt(compareDigit02,10) + " = " + equal + "<br>"  + parseInt(compareDigit01,10) + " != " + parseInt(compareDigit02,10) + " = " + different; 

document.getElementById('result5').innerHTML = exercise5;


/*
6. Arrays
Crea un array en una variable con los datos de tu elección, tiene que contener 10 y pueden ser de los tipos que elijas. Guarda en una variable la posición 5 y despliegala en el resultado. Escribe tu código abajo
*/

const planets = ["Mercurio", "Venus", "Tierra", "Marte", "Júpiter", "Saturno", "Urano", "Neptuno"];

let planetNumber5 = planets[4];

let exercise6 ="El objeto No. 5 del arreglo de planetas es: " + planetNumber5;

document.getElementById('result6').innerHTML = exercise6;


/*
7. Arrays
Crea un array en una variable con los tus canciones favoritas, despues reemplaza una con un nuevo valor. Guarda una en una variable y despliegala en el resultado. Escribe tu código abajo
*/

const favoriteSongs = ["Gloria", "Aunque me cueste la vida", "Pero la recuerdo", "Ice ice baby", "Love don't cost a thing", "No puedo dejar de pensar en ti", "Simón Blanco", "Never gonna give you up", "Lo que son las cosas", "Luna mágica", "Como quien pierde una estrella", "Tu calorro", "Maribel", "Díganle", "I'd do anything for love", "Abrázame", "Never enough"];

let replacedSong = favoriteSongs[14];

favoriteSongs[14] = "Regresar";

savedSong = favoriteSongs[16];

exercise7 = "Se cambió la canción de la posición No. 15 llamada " + "<b>" + replacedSong + "</b>" + " por la canción llamada " + "<b>" + favoriteSongs[14] + "</b>" + " y la canción guardada es la que corresponde a la posición No. 17 llamada " + "<b>" + savedSong + "</b>";

document.getElementById('result7').innerHTML = exercise7;

/*
8. Objects
Crea un object que represente alguna cosa del mundo real con sus distintas propiedades, reemplaza el valor de una propiedad por uno nuevo y despliega en el resultado el valor de alguna de las propiedades. Escribe tu código abajo
*/

const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};

let originalBrand = myCar.make;

myCar.make = "Chrysler";

let substituteBrand = myCar.make;

let carYear = myCar.year;

let exercise8 = "La marca original del vehículo era: " + "<b>" + originalBrand + "</b>" + " la cual se cambió por: " + "<b>" + substituteBrand + "</b>" + " y el valor de la propiedad año es: " + "<b>" + carYear + "</b>";

document.getElementById('result8').innerHTML = exercise8;

/*
9. Objects
Crea un array de objects con elementos que tengan relacion y con sus propiedades, por ejemplo, paises, una wishlist, bandas de musica, etc. Despliega cualquier valor de alguna de las propiedades de los objetos Escribe tu código abajo
*/

const countries = [
   {
       name: "Argentina",
       continent: "Sudamérica",
       population: 40000000
   },
   {
       name: "Brasil",
       continent: "Sudamérica",
       population: 300000000
   },
   {
       name: "Venezuela",
       continent: "Sudamérica",
       population: 25000000
   },
   {
       name: "Chile",
       continent: "Sudamérica",
       population: 10000000
   },
   {
       name: "Australia",
       continent: "Oceanía",
       population: 18000000
   },
   {
       name: "Nueva Zelanda",
       continent: "Oceanía",
       population: 8000000
   },
   {
       name: "China",
       continent: "Asia",
       population: 1000000000
   },
   {
       name: "Tailandia",
       continent: "Asia",
       population: 32000000
   },
   {
       name: "Vietnam",
       continent: "Asia",
       population: 23000000
   },
   {
       name:"‘España",
       continent: "Europa",
       population: 29000000
   },
   {
       name: "Alemania",
       continent: "Europa",
       population: 33000000
   },
   {
       name: "Francia",
       continent: "Europa",
       population: 65000000
   },
   {
       name: "Portugal",
       continent: "Europa",
       population: 4000000
   },
   {
       name: "Grecia",
       continent: "Europa",
       population: 12000000
   },
]

countries.push({"name": "México", "continent": "Norteamérica", "population": 127500000});

let objectsElement = countries[14].name;

let exercise9 = "El objeto que se encuentra en la posición No. 15 corresponde al país: " + "<b>" + objectsElement + "</b>";

document.getElementById('result9').innerHTML = exercise9;