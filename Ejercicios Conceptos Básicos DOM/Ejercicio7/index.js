//Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
document.addEventListener('DOMContentLoaded', function () {
  const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']
  const printHereDiv = document.querySelector('[data-function="printHere"]')
  const ul = document.createElement('ul')

  places.forEach((place) => {
    const li = document.createElement('li')
    li.textContent = place
    ul.appendChild(li)
  })
  printHereDiv.appendChild(ul)
})
