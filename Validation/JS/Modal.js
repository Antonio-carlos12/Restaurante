const openModal = () => document.getElementById('estoqueModal1')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('estoqueModal1').classList.remove('active')
}

document.getElementById('cadastrarCliente1')
    .addEventListener('click', openModal)

document.getElementById('modalClose1')
    .addEventListener('click', closeModal)

document.getElementById('cancelarCliente')
    .addEventListener('click', closeModal)