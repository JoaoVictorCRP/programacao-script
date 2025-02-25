"use client";

import Line from "./Line"
import InvertedLine from "./InvertedLine"
import { TeamOneColorContext } from "../context/TeamOneColorContext"; // Pegando o contexto do provider
import { TeamTwoColorContext } from "../context/TeamTwoColorContext"; // Pegando o contexto do provider
import { useContext } from "react";



export default function Board() {
    
    const team1Color = useContext(TeamOneColorContext); // Vermelho escuro
    const team2Color = useContext(TeamTwoColorContext); // Azul escuro

    return (
        <>
            <Line teamColor={team1Color}/>
            <InvertedLine teamColor={team1Color}/>
            <Line teamColor={team1Color}/>
            <InvertedLine isEmpty={true}/>
            <Line isEmpty={true}/>
            <InvertedLine teamColor={team2Color}/>
            <Line teamColor={team2Color}/>
            <InvertedLine teamColor={team2Color}/>
        </>

    )
}