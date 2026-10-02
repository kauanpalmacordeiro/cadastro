let form = document.querySelector("form")

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let confirmar = document.getElementById("confirmar").value

    
    if (nome.trim() === "" || email.trim() === "" || senha.trim() === "" || confirmar.trim() === "") {
        document.getElementById("mensagem").style.color = "red"
        document.getElementById("mensagem").textContent = "Preencha todos os campos"
    }

    else if (senha !== confirmar) {
        document.getElementById("mensagem").textContent = "As senhas estão diferentes"
    }

    else  {
        document.getElementById("mensagem").textContent = "Campos preenchidos"
        document.getElementById("mensagem").style.color = "green"
    }
})