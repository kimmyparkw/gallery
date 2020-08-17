const addImageEls = document.querySelectorAll('.add-image')
const main = document.querySelector('.main')
addImageEls.forEach((image) => {
  image.addEventListener('click', () => {
    const addFormContainer = document.createElement('div')
    addFormContainer.classList.add('addFormContainer')
    const addForm = document.createElement('form')
    const addFormText = document.createElement('p')
    addFormText.innerText = 'Which gallery would you like to add to?'
    main.append(addFormContainer)
    addFormContainer.append(addFormText)
    const dropMenu = document.querySelector('.add-image-options')
    addFormContainer.append(dropMenu)
  })
})
