function getLocalStorage1(){
    return JSON.parse(localStorage.getItem('db_client1'))
}

var botao




    var botao = document.getElementById("entrarLogin");
    botao.addEventListener("click",function(e){
        e.preventDefault();
            var inputsenhalogin = document.getElementById('input-login').value;
            var inputEmailLogin = document.getElementById('input-senha').value;
            console.log(`O valor de ${inputsenhalogin}, ${typeof inputsenhalogin}`)
            console.log(`O valor de ${inputEmailLogin}, ${typeof inputEmailLogin}`)
            var array1 = inputsenhalogin.split("");
            var array2 = inputEmailLogin.split("");
            
            array1 = array1.sort().join('');
            console.log(array1)
            array2 = array2.sort().join('');
            console.log(array2)
            var clientes = localStorage.getItem('db_client1');// Variavel que pega o Array de Antonio
            var clientetrans = JSON.parse(clientes)
            console.log(clientetrans)
            for(var index = 0, total=clientetrans.length; index < total; index++){
                var obj = clientetrans[index];
                var x = obj.senha.split("")
                var z = obj.email.split("")
                x = x.sort().join('');
                console.log(x)
                z = z.sort().join('');
                console.log(z)
                console.log(obj.senha, typeof obj.senha, obj.email, typeof obj.email)
                if( x == array2 && z == array1){
                    encontrouCadastro = true
                    console.log("Encontrou!")
                }else {
                    encontrouCadastro = false
                    console.log("Nao encontrou!")
                }
            }
      console.log("Fim da validacao")
    })