import If from "@/app/render/component/if";
import Par from "@/app/render/component/Par";

export default function Render (){
    const vidaVilao = 100;
    const numero = 4;

    return (
        <div style={{textAlign:"center"}}>
            <h1>RENDERIZAÇÃO CONDICIONAL</h1>
            <If condition={vidaVilao > 0}>
                <h2 style={{color:"red"}}>O vilão está vivo!</h2>
            </If>

            <If condition={numero % 2 === 0}>
                <h2 style={{color:"blue"}}>O número {numero} é par!</h2>
            </If>

            <div style={{backgroundColor:"yellow", color:"black"}}>
                <h3>Vamos renderizar os números pares de 0 a 10:</h3>

                {Array.from({length:10}, (_,index) => (
                    <Par key={index} numero={index}></Par>
                ))}
            </div>
        </div>
    )
}