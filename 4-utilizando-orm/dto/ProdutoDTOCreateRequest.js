class ProdutoDTOCreateRequest {
    constructor({ nome, preco, catalogoId}) {
        this.nome = nome;
        this.preco = parseFloat(preco);
        this.catalogoId = parseInt(catalogoId);
    }
}

module.exports = ProdutoDTOCreateRequest;