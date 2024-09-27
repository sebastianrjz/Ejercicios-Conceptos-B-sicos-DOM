//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
document.addEventListener('DOMContentLoaded', function () {
  const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
  const ul = document.createElement('ul')

  // Iterar sobre el array y crear los elementos <li>
  countries.forEach((contys) => {
    const li = document.createElement('li') // Crear un <li>
    li.textContent = contys
    ul.appendChild(li)
  })
  document.body.appendChild(ul)
})
//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
document.addEventListener('DOMContentLoaded', function () {
  const clase = document.querySelectorAll('.fn-remove-me')

  clase.forEach((s1) => {
    s1.remove()
  })
})

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const cars = ['Mazda 6', 'Ford Fiesta', 'Audi A4', 'Toyota Corolla']
const div = document.querySelector('div[data-function="printHere"]')

const ul = document.createElement('ul')

cars.forEach((car) => {
  const li = document.createElement('li')
  li.textContent = car
  ul.appendChild(li)
})

div.appendChild(ul)
//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
document.addEventListener('DOMContentLoaded', function () {
  const countries = [
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
  ]

  const container = document.createElement('div')
  document.body.appendChild(container)

  countries.forEach((country) => {
    const div = document.createElement('div')
    div.classList.add('country-div')

    const h4 = document.createElement('h4')
    h4.textContent = country.title

    const img = document.createElement('img')
    img.src = country.imgUrl
    img.alt = country.title

    div.appendChild(h4)
    div.appendChild(img)
    container.appendChild(div)
  })
})
//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
document.addEventListener('DOMContentLoaded', function () {
  const countries = [
    {
      title: 'Random title 1',
      imgUrl: 'https://picsum.photos/300/200?random=1'
    },
    {
      title: 'Random title 2',
      imgUrl: 'https://picsum.photos/300/200?random=2'
    },
    {
      title: 'Random title 3',
      imgUrl: 'https://picsum.photos/300/200?random=3'
    },
    {
      title: 'Random title 4',
      imgUrl: 'https://picsum.photos/300/200?random=4'
    },
    {
      title: 'Random title 5',
      imgUrl: 'https://picsum.photos/300/200?random=5'
    }
  ]

  const container = document.createElement('div')
  document.body.appendChild(container)

  countries.forEach((country) => {
    const div = document.createElement('div')
    div.classList.add('country-div')

    const h4 = document.createElement('h4')
    h4.textContent = country.title

    const img = document.createElement('img')
    img.src = country.imgUrl
    img.alt = country.title
    img.style.width = '100%'

    div.appendChild(h4)
    div.appendChild(img)
    container.appendChild(div)
  })

  const button = document.createElement('button')
  button.textContent = 'Eliminar último elemento'
  document.body.appendChild(button)

  button.addEventListener('click', () => {
    const lastDiv = container.lastChild
    if (lastDiv) {
      container.removeChild(lastDiv)
    }
  })
})
//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

document.addEventListener('DOMContentLoaded', function () {
  const countries = [
    {
      title: 'Random title 1',
      imgUrl: 'https://picsum.photos/300/200?random=1'
    },
    {
      title: 'Random title 2',
      imgUrl: 'https://picsum.photos/300/200?random=2'
    },
    {
      title: 'Random title 3',
      imgUrl: 'https://picsum.photos/300/200?random=3'
    },
    {
      title: 'Random title 4',
      imgUrl: 'https://picsum.photos/300/200?random=4'
    },
    {
      title: 'Random title 5',
      imgUrl: 'https://picsum.photos/300/200?random=5'
    }
  ]

  const container = document.createElement('div')
  document.body.appendChild(container)

  countries.forEach((country) => {
    const div = document.createElement('div')
    div.classList.add('country-div')

    const h4 = document.createElement('h4')
    h4.textContent = country.title

    const img = document.createElement('img')
    img.src = country.imgUrl
    img.alt = country.title
    img.style.width = '100%'

    const button = document.createElement('button')
    button.textContent = 'Eliminar este elemento'

    // Manejador de eventos para eliminar el div correspondiente
    button.addEventListener('click', () => {
      container.removeChild(div)
    })

    div.appendChild(h4)
    div.appendChild(img)
    div.appendChild(button) // Agregar el botón al div
    container.appendChild(div)
  })
})
