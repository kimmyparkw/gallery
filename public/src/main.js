const addImageEls = document.querySelectorAll('.add-image')
const main = document.querySelector('.main')
addImageEls.forEach((image) => {
  image.addEventListener('click', (el) => {
    const addForm = document.createElement('form')
    const addFormText = document.createElement('p')
    addFormText.innertext = 'Which gallery would you like to add to?'
    main.append(addForm)
    addForm.append(addFormText)
  })
})
