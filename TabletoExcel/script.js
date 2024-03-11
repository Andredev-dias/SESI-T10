function adicionarItem(){
    var nome = document.getElementById("nome").value;
    var valor = document.getElementById("valor").value; 
    var quantidade = document.getElementById("quantidade").value; 

    //validar se os inputs nao estao vazios
    if(!nome || !valor || !quantidade ){
        alert("preencha todos os inputs")
        return;
    }

    //CRIAR A LINHA DA TABELA E PREENCHER COM O VALOR DIGITADO
    //primeira linha da tabela [0]
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];

}