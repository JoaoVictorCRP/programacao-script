"use client"
import {useState} from "react";

export default function page(){
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [somaValor, setSomaValor] = useState(0);

    function handleMouseMove(e){
        setX(e.clientX - x);
        setY(e.clientY - y);
    }

    function soma(x,y){
        setSomaValor(x+y);
        console.log(x + y);
    }

    return (
        <div
            onMouseMove={handleMouseMove}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh"
            }}
        >
            <h1>Estado e Eventos</h1>
            <p>Eixo X: {x}</p>
            <p>Eixo Y: {y}</p>
            <button onClick={() => soma(x, y)}>Clique aqui</button>
            <p>Valor da soma: {somaValor}</p>
        </div>
    )
}