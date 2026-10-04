let form = document.querySelector("form")

form.addEventListener("submit", function(event) {
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let confirmar = document.getElementById("confirmar").value

    
    if (nome.trim() === "" ) {
        event.preventDefault(); 
        document.getElementById("mensagem").textContent = "Digite um nome valido"
        document.getElementById("mensagem").style.color = "red"
    }
    

    else if (senha !== confirmar) {
        event.preventDefault(); 
        document.getElementById("mensagem").textContent = "As senhas estão diferentes"
        document.getElementById("mensagem").style.color = "red"
    }


    else  {
        document.getElementById("mensagem").textContent = "Campos preenchidos"
        document.getElementById("mensagem").style.color = "green"
    }
})