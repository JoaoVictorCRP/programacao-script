

export default function page () {
    const array = []
    for(let i=0;i<9;i++){
        array.push(<span>Número {i}</span>)
    }

    const exerciseDetails = [
        'Utilize um array para armazenar os elementos span',
        'Use um loop for para gerar os números de 1 a 10',
        'Cada número deve estar dentro de um elemento span',
        'O componente deve ter um título h1'
    ]

    return ( 
    <div style={{'textAlign':'center'}}>
        <h1>Exercício 1</h1>
        
        <ul>
            {exerciseDetails.map((element,index) => (
                <li key={index}> {element} </li>

            ))}
        </ul>

        <br/>
        {array.map((n, index) => (
            <div key={index}> 
                {n}
            </div>
        ))}
    </div>
    )
}