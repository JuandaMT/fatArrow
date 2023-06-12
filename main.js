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
const multiplicarNums = numeros.reduce((a, b) => {
  return a * b;
});
console.log(multiplicarNums);

/* EXTRAS */
// 1
const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];

const roles = staff.map((persona) => {
  return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies[0]} y ${persona.hobbies[1]}`;
});
console.log(roles);
// 2
const foodList2 = ["Pizza", "Ramen", "Paella", "Entrecot"];
const comida = foodList2.map((plato) => {
  switch (plato) {
    case "Pizza":
      console.log(`Como soy de Italia, amo comer Pizza`);
      break;
    case "Ramen":
      console.log(`Como soy de Japón, amo comer Ramen`);
      break;
    case "Paella":
      console.log(`Como soy de Valencia, amo comer Paella`);
      break;
    case "Entrecot":
      console.log(`Aunque no como carne, el Entrecot es sabroso`);
      break;
  }
});

/* FILTER */
const inventory = [
  {
    name: "Mobile phone",
    price: 199,
  },
  {
    name: "TV Samsung",
    price: 459,
  },
  {
    name: "Viaje a cancún",
    price: 600,
  },
  {
    name: "Mascarilla",
    price: 1,
  },
];

// 1
const mayorDe300 = inventory.filter((objeto) => objeto.price > 300);
console.log(mayorDe300);
// 2
const sentenceElements = [
  "Me",
  "llamo",
  "Juanda",
  "y",
  "quiero",
  "sentir",
  "la",
  "fuerza",
  "con",
  "javascript",
];

const phrase = sentenceElements.reduce((a, b) => a + " " + b);
console.log(phrase);
