const ProdutoDtoCreateRequest = require('../dto/ProdutoDTOCreateRequest.js');
const ProdutoDtoResponse = require('../dto/ProdutoDTOResponse.js');
const unitOfWork = require('../repositories/UnitOfWork.js');

const uow = unitOfWork();

const ProdutoController = {
    async create(req, res) {
        try {
            const dto = new ProdutoDtoCreateRequest(req.body);
            const produto = await uow.produtos.create(dto);
            res.status(201).json(new ProdutoDtoResponse(produto));
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async list(req, res) {
        try {
            const produtos = await uow.produtos.findAll();
            res.status(200).json(produtos);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getById(req, res) {
        const produto = await uow.produtos.getById(req.params.id,
    {catalogo: true});
        if (!produto) return res.status(404).json({error: `O produto de ID ${req.params.id} não existe`});
    }
};

module.exports.ProdutoController = ProdutoController;