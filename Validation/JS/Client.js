const getLocalStorage1 = () => JSON.parse(localStorage.getItem('db_client1')) ?? []
const setLocalStorage1 = (dbClient1) => localStorage.setItem("db_client1", JSON.stringify(dbClient1))

// CRUD - create read update delete
const deleteClient = (index) => {
    const dbClient1 = readClient()
    dbClient1.splice(index, 1)
    setLocalStorage1(dbClient1)
}

const updateClient = (index, client) => {
    const dbClient1 = readClient()
    dbClient1[index] = client
    setLocalStorage1(dbClient1)
}

const readClient = () => getLocalStorage1()

const createClient = (client) => {
    const dbClient1 = getLocalStorage1()
    dbClient1.push (client)
    setLocalStorage1(dbClient1)
}

const isValidFields = () => {
    return document.getElementById('form1').reportValidity()
}
//Interação com o layout


const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field1')
    fields.forEach(field => field.value = "")
    document.getElementById('nome').dataset.index = 'new'
}

const saveClient = () => {
    
    if (isValidFields()) {
        const client = {
            nome: document.getElementById('nome').value,
            password: document.getElementById('password').value,
        }
        const index = document.getElementById('nome').dataset.index
        if (index == 'new') {
            createClient(client)
            updateTable()
            
        } else {
            updateClient(index, client)
            updateTable()
            
        }
    }
}

const createRow = (client, index,) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td class="center">${client.nome}</td>
        <td class="center">
            <button type="button" data-bs-toggle="modal" data-bs-target="#estoqueModal1" class="btn btn-success center" id="edit-${index}">Editar</button>
            <button type="button" class="button btn btn-danger" id="delete-${index}" >Excluir</button>
        </td>
    `
    document.querySelector('#tableClient1>tbody').appendChild(newRow)
    
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tableClient1>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const dbClient1 = readClient()
    clearTable()
    dbClient1.forEach(createRow)
}

const fillFields = (client) => {
    document.getElementById('nome').value = client.nome
    document.getElementById('password').value = client.password
    document.getElementById('nome').dataset.index = client.index
}

const editClient = (index) => {
    const client = readClient()[index]
    client.index = index
    fillFields(client)
}

const editDelete = (event) => {
    if (event.target.type == 'button') {

        const [action, index] = event.target.id.split('-')

        if (action == 'edit') {
            editClient(index)
        } else {
            const client = readClient()[index]
            const response = confirm(`Deseja realmente excluir o cliente ${client.nome}`)
            if (response) {
                deleteClient(index)
                updateTable()
            }
        }
    }
}

// Eventos

document.getElementById('salvarCliente')
    .addEventListener('click', saveClient)

document.querySelector('#tableClient1>tbody')
    .addEventListener('click', editDelete)

