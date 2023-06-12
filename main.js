// 1
const saludar = () => console.log("Hola");
saludar();
// 2
const dividir = (a, b) => console.log(a / b);
dividir(8, 2);
// 3
const miNombre = (nombre) => console.log(`Mi nombre es ${nombre}`);
miNombre("Juanda");
// 4
const test2 = () => console.log("Función test 2 ejecutada");

const test1 = (callback) => callback();

test1(test2);

/* FOREACH */
let gente = [
  {
    nombre: "Jamiro",
    edad: 45,
  },
  {
    nombre: "Juan",
    edad: 35,
  },
  {
    nombre: "Paco",
    edad: 34,
  },
  {
    nombre: "Pepe",
    edad: 14,
  },
  {
    nombre: "Pilar",
    edad: 24,
  },
  {
    nombre: "Laura",
    edad: 24,
  },
  {
    nombre: "Jenny",
    edad: 10,
  },
];
// 1
let mayoresDe25 = [];
gente.forEach((persona) => {
  if (persona.edad > 25) {
    mayoresDe25.push(persona);
  }
});
console.log(mayoresDe25);
// 2
let empiezaConJ = [];
gente.forEach((persona) => {
  if (persona.nombre.startsWith("J")) {
    empiezaConJ.push(persona);
  }
});
console.log(empiezaConJ);
/* MAP */
// 1
let mayoresDe25ArrayMap = [];
const mayoresDe25Map = gente.map((persona) => {
  if (persona.edad >= 25) {
    return mayoresDe25ArrayMap.push(persona);
  }
});
console.log(mayoresDe25ArrayMap);
// 2
let empiezaJArrayMap = [];
const empiezaJMap = gente.map((persona) => {
  if (persona.nombre.startsWith("J")) {
    return empiezaJArrayMap.push(persona);
  }
});
console.log(empiezaJArrayMap);
// 4
let numbers = [4, 5, 6, 7, 8, 9, 10];
const elevarMap = numbers.map((numero) => numero ** numero);
console.log(elevarMap);

/* FILTER */
// 1
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numImpares = numbers.filter((numero) => numero % 2 !== 0);
console.log(numImpares);
// 2
const foodList = [
  { name: "Tempeh", isVeggie: true },
  { name: "Cheesbacon burguer", isVeggie: false },
  { name: "Tofu burguer", isVeggie: true },
  { name: "Entrecot", isVeggie: false },
];

const platosVeganos = foodList.filter((plato) => plato.isVeggie == true);

platosVeganos.forEach((plato) => {
  console.log(`Que rico ${plato.name} me voy a comer`);
});

/* REDUCE */
// 1
const numeros = [39, 2, 4, 25, 62];
const multiplicarNums = numeros.reduce((a, b) => {return a*b});
console.log(multiplicarNums)