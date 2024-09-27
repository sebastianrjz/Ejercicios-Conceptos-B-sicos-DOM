//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
document.addEventListener('DOMContentLoaded', function () {
  const button = document.createElement('button')
  button.id = 'btnToClick'
  button.textContent = 'Haz clic aquí'
  // Añadir el botón al cuerpo del documento
  document.body.appendChild(button)

  // Añadir evento click al botón
  button.addEventListener('click', function (event) {
    console.log(event) // Imprimir información del evento en la consola
  })
})
//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
document.addEventListener('DOMContentLoaded', () => {
  const focusInput = document.querySelector('.focus')

  // Add focus event to log the input value
  focusInput.addEventListener('focus', () => {
    console.log('Focus input value:', focusInput.value)
  })
})

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
document.addEventListener('DOMContentLoaded', () => {
  const focusInput = document.querySelector('.focus')

  // Add focus event to log the input value
  focusInput.addEventListener('focus', () => {
    console.log('Focus input value:', focusInput.value)
  })

  // Add input event to log the input value as the user types
  focusInput.addEventListener('input', () => {
    console.log('Current input value:', focusInput.value)
  })
})
