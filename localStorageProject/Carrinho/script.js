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
            //cria uma li
            const listItem = $("<li>").css('margin-bottom', '5px').text(
                `${item.descricao} - Preço: R$${item.preco}`
            )
            //cria um botao de remover
            const removeButton = $('<button>').text("❌").css('margin-left', '10px').click(function (){
                removeItemDoCarrinho(index)
            });
           //adicionar o botao a lista
           listItem.append(removeButton)
           //adicionar o item a lista
           listaElement.append(listItem)
           //adiciona o preco do item no total
           totalPreco += item.preco;
        });
        //exibir o total no elemento totalElement
        totalElement.text(`Total: R$${totalPreco.toFixed(2)}`);
    }
//funcao para remover um item do carrinho
function removeItemDoCarrinho(index){
   carrinho.splice(index, 1);
   localStorage.setItem("carrinho", JSON.stringify(carrinho));
   exibirCarrinho();
}
    exibirCarrinho();
});

function gerarDocumentoWord(){
    const listaElement = document.getElementById("lista")
    const totalElement = document.getElementById("total")

    const listaClone = listaElement.cloneNode(true);

    $(listaClone).find("button").remove();

    const listaHtml = listaClone.innerHTML;
    const totalHtml = totalElement.innerHTML;

    const conteudoHtml = `
        <html>
            <head>
                <meta charset="UTF-8"/>
            </head>
            <body>
                <h1>Pedido confirmado</h1>
                <h3>Agradecemos sua preferênia</h3>
                <br>
                ${listaHtml}
                <br>
                <br>
                ${totalHtml}
            </body>
        </html>
    `;
    const blob = new Blob([conteudoHtml], {type: "application/msword"});
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "carrinho.doc";
    link.click();
    document.getElementById("pedido").style.display = "block";

}

const successClose = () => document.getElementById("pedido").style.display = "none";