import If from "@/app/render/components/if";
import Par from "@/app/render/components/Par";
import Lista from "@/app/render/components/Lista";
import Item from "@/app/render/components/Item";


export default function Render (){
    const vidaVilao = 100;
    const numero = 4;
    const estoqueTenis =0;


    return (
        <div style={{textAlign:"center"}}>
            <h1>RENDERIZAÇÃO CONDICIONAL</h1>

            {/* Teste com a vida do vilão*/}
            <If condition={vidaVilao > 0}>
                <h2 style={{color:"red"}}>O vilão está vivo!</h2>
            </If>

            {/* Teste de número par */}
            <If condition={numero % 2 === 0}>
                <h2 style={{color:"blue"}}>O número {numero} é par!</h2>
            </If>

            {/* Array de números pares */}
            <div style={{backgroundColor:"yellow", color:"black"}}>
                <h3>Vamos renderizar os números pares de 0 a 10:</h3>

                {Array.from({length:10}, (_,index) => (
                    <Par key={index} numero={index}></Par>
                ))}
            </div>

            {/* Condicional de cores */}
            <div style={{backgroundColor:"white", color:"black"}}>
                <h3>Temos também condicional de cores, vejamos um exemplo:</h3>
                <Lista>
                    <If condition={estoqueTenis > 0}>
                        <Item
                            cor={"green"}
                            conteudo={"👟 Tênis confortável por apenas R$150,00 "}
                        />
                    </If>

                    <If condition={estoqueTenis <= 0}>
                        <Item
                            cor={"red"}
                            conteudo={"👟 Acabaram nossos estoques de tênis! ❌"}
                        />
                    </If>
                </Lista>
            </div>
        </div>
    )
}