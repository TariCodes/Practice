let openModal = document.querySelector('#show-modal')
let closeModal = document.querySelector('.close-modal')
let modal = document.querySelector('#modal')

openModal.addEventListener('click', () => {
    modal.showModal()
})

closeModal.addEventListener('click', () => {
    modal.close()
})