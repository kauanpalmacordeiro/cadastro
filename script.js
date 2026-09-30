const botao = document.querySelector("button");

botao.addEventListener("click", function(){
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    if (nome.trim() === "" || email.trim() === "" || senha.trim() === "") {
        document.getElementById("mensagem").textContent = "Preecnha todos os campos"
    }

    /* paramos aqui, onde proximo passo é criar um else para verificar
    caso o usuario tenha prrecnhido todos os campos e mudar a cor pra verde e "preenchidos"*/

    else if (nome.trim() !== "" || email.trim() !== "" || senha.trim() !== "") {
        document.getElementById("mensagem").textContent = "Preecnha todos os campos".style.color.green
    }
    
})