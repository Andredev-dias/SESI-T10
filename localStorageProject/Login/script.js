const showPassword = () => {
    var inputSenha = document.querySelector("#senha");

    if(inputSenha.getAttribute("type") === "password"){
        inputSenha.setAttribute("type", "text")
    }else{
        inputSenha.setAttribute("type", "password")
    }
}

function login(){
    var nome = $("#nome").val();
    var senha = $("#senha").val();

    if(nome && senha && nome === "admin" && senha === "12345"){
            const user = {
                name: nome,
                dataEntrada: new Date(),
                id: Math.floor(Math.random() * 100000)
            }
            localStorage.setItem("usuario", JSON.stringify(user))
            window.location.href = "../Loja"
    }else{
        document.getElementById('error-modal').style.display = "flex"
    }
}

const fecharModal = () => document.getElementById('error-modal').style.display = "none"



