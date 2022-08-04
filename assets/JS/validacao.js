const Local =  JSON.parse(localStorage.getItem('db_client1'))
let Localatt = JSON.stringify(Local)




let login = Local.map((Localatt) => {return Localatt.nome})
let senha = Local.map((Localatt) => {return Localatt.password})

console.log(login)

const user = document.getElementById('user').value;
const password = document.getElementById('password').value



const entrar = document.getElementById('entrar');
entrar.addEventListener('click', () =>{ 
    for(let index = 0; index <= Localatt.length; index++){
        if(user.value == Localatt && password == Localatt){
            alert('Entrar')
            console.log(Localatt)
        }else{
            alert('error')
            console.log('hello')
        }
    }
    
})

