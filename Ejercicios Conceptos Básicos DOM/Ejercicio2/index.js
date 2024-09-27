//1.1 Inserta dinamicamente en un html un div vacio con javascript.
document.addEventListener('DOMContentLoaded', function () {
  // Crea un nuevo div
  const newDiv = document.createElement('div')
  // Inserta el div en el body
  document.body.appendChild(newDiv)
})

//2 Inserta dinamicamente en un html un div que contenga una p con javascript.
document.addEventListener('DOMContentLoaded', function () {
  const newDiv = document.createElement('div')
  const newParagraph = document.createElement('p')
  newDiv.appendChild(newParagraph)
  document.body.appendChild(newDiv)
})
//1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
document.addEventListener('DOMContentLoaded', function () {
  // Crear un nuevo div
  const newDiv = document.createElement('div')
  for (let i = 1; i <= 6; i++) {
    const newParagraph = document.createElement('p')
    newDiv.appendChild(newParagraph)
  }
  document.body.appendChild(newDiv)
})

//1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
document.addEventListener('DOMContentLoaded', function () {
  const newp = document.createElement('p')
  newp.textContent = 'Soy dinámico!'
  document.body.appendChild(newp)
})
//1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
document.addEventListener('DOMContentLoaded', function () {
  const h2 = document.querySelector('.fn-insert-here')
  h2.textContent = 'Wubba Lubba dub dub'
})

//1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
document.addEventListener('DOMContentLoaded', function () {
  const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

  // Crear el elemento <ul>
  const ul = document.createElement('ul')

  // Iterar sobre el array y crear los elementos <li>
  apps.forEach((app) => {
    const li = document.createElement('li') // Crear un <li>
    li.textContent = app // Asignar el texto del elemento
    ul.appendChild(li) // Agregar el <li> a la <ul>
  })

  // Agregar la <ul> al body (o a cualquier otro contenedor)
  document.body.appendChild(ul)
})

//1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
document.addEventListener('DOMContentLoaded', () => {
  // Selecciona todos los elementos con la clase 'fn-remove-me'
  const elementsToRemove = document.querySelectorAll('.fn-remove-me')

  // Recorre la lista de elementos y los elimina uno por uno
  elementsToRemove.forEach((element) => {
    element.remove()
  })
})

//1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
document.addEventListener('DOMContentLoaded', () => {
  // Seleccionamos el primer div
  const divs = document.querySelectorAll('div')
  const primerDiv = divs[0] // Primer div
  const segundoDiv = divs[1] // Segundo div

  // Creamos el nuevo párrafo HTML
  const nuevoParrafo = '<p>Voy en medio!</p>'

  // Insertamos el párrafo entre el primer y el segundo div
  primerDiv.insertAdjacentHTML('afterend', nuevoParrafo)
})

//1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

document.addEventListener('DOMContentLoaded', () => {
  // Selecciona todos los divs con la clase 'fn-insert-here'
  const divs = document.querySelectorAll('.fn-insert-here')

  // Itera sobre cada div encontrado
  divs.forEach((div) => {
    const newParagraph = document.createElement('p')

    newParagraph.textContent = 'Voy dentro!'

    div.appendChild(newParagraph)
  })
})
