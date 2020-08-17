const addImageEls = document.querySelectorAll('.add-image')
const body = document.querySelector('body')
addImageEls.forEach((image) => {
  image.addEventListener('click', () => {
    const addFormContainer = document.createElement('div')
    addFormContainer.classList.add('addFormContainer')
    const addForm = document.createElement('form')
    const addFormText = document.createElement('p')
    addFormText.innerText = 'Which gallery would you like to add to?'
    if (!body.append(addFormContainer)) {
      body.append(addFormContainer)
      addForm.append(addFormText)
    }

  })
})
