import Title from "./components/Title"
// A componentização nos permite reutilizar blocos de código (e elementos) de maneira bem fácil, ainda é possível tornar os
// componentes dinamicos com os props (parametros)


export default function page () {
    return (
        <div>
            <Title 
                username="João Victor" 
                secundario="Nesta aula, aprenderemos sobre a criação de componentes"
            /> {/* chave username, valor "João Victor" no array "props" */ }
        
            <br />
            <Title
                username="Zézinho" 
                secundario="Você é bunitinho"
            />
        </div>
    )
}