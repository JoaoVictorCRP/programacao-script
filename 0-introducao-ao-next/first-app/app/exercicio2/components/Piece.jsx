"use client";
import { useContext } from "react";
import { TeamOneColorContext } from "../context/TeamOneColorContext"; // Pegando o contexto do provider


export default function Piece(props){
    const team1Color = useContext(TeamOneColorContext); // Vermelho escuro
    
    return(
        <button style={{ 
            color: team1Color.teamOneColor,
            border: "solid 25px",
            width: 25,
            height: 25,
            borderRadius: 25,
            outline: "solid 2px #fff"
        }}>
            {/* Peça */}
        </button>
    )
}