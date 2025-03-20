import listaProdutos from "@/app/data/listaProdutos";
import Produto from "@/app/model/Produto";

function renderLinhas(): React.ReactNode {
    return listaProdutos.map((produto: Produto) => (
        <tr key={produto.id}>
            <td>{produto.id}</td>
            <td>{produto.nome}</td>
            <td>{produto.preco}</td>
        </tr>
    ));
}

export default function TabelaDeProdutos() {
    return (
        <div>
            <h1>Tabela de Produtos</h1>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderLinhas()}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
