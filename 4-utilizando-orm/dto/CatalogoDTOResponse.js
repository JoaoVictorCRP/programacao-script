class CatalogoDtoResponse {
    constructor(catalogo) {
        this.id = catalogo.id;
        this.nome = catalogo.nome;
        if (catalogo.produtos) {
            this.produtos = catalogo.produtos.map(produto => {
                produto.id;
                produto.nome;
                produto.preco;
            });
        }
    }

}
module.exports = CatalogoDtoResponse;