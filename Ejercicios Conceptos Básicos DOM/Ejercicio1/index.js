//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const button = document.querySelector('.showme')
console.log(button)
//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const h1 = document.querySelector('h1,#pillado ')
console.log(h1)

//1.3 Usa querySelector para mostrar por consola todos los p
const p = document.querySelectorAll('p')
p.forEach((p) => {
  console.log(p)
})
//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const clase = document.querySelectorAll('.pokemon')
clase.forEach((clase) => {
  console.log(clase)
})
//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const elements = document.querySelectorAll('[data-function="testMe"]')
elements.forEach((element) => {
  console.log(element)
})
//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe
const personajes = document.querySelectorAll('[data-function="testMe"]')
console.log(personajes[2].textContent)
