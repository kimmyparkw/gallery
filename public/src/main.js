const addImageEls = document.querySelectorAll('.add-image')
const main = document.querySelector('.main')
addImageEls.addEventListener('click', (el) => {
  const addForm = document.createElement('form')
  const addFormText = document.createElement('p')
  main.append(addForm)
  addForm.append(addFormText)
})
