const addImageEls = document.querySelectorAll('.add-image')
const body = document.querySelector('body')
addImageEls.forEach((image) => {
  image.addEventListener('click', (el) => {
    const addForm = document.createElement('form')
    const addFormText = document.createElement('p')
    addFormText.innerText = 'Which gallery would you like to add to?'
    body.append(addForm)
    addForm.append(addFormText)
  })
})
