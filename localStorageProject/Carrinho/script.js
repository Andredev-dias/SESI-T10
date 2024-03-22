$(document).ready(function () {
    //recupera o carrinho do localstorage ou inicia com um array vazio
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    const listaElement = $('#lista');
    const totalElement = $('#total');

    //funcao que vai exibir o carrinho
    function exibirCarrinho(){
        listaElement.empty();

        let totalPreco = 0;

        $.each(carrinho, function(index, item){
            const listItem = $("<li>").text(
                `${item.descricao} - Preço: R$${item.preco}`
            )
        })

    }
    exibirCarrinho();
});