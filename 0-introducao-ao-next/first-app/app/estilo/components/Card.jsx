import style from "../css/style.module.css";
import DynamicTitle from "./DynamicTitle";

export default function Card(){
    return (
        <div className={style.div}>
            <h1>Aula de Estilo</h1>
            
            <p>Para que o css seja importado corretamente dentro de um único componente específico devemos incluir a extensão .module.css</p>
            
            <div className={style.codeDiv}>
                <code className={style.code}>
                    import style from "../css/style.module.css";
                </code>
            </div><br/>

            <p>Também podemos fazer estilos dinâmicos com JavaScript!</p>

            <DynamicTitle name="Lula" isLeftWinger={true}/>
            <DynamicTitle name="Bolsonaro" isLeftWinger={false}/>

            <button className={style.button}>Clique aqui ❤️</button>
        </div>
    )
}