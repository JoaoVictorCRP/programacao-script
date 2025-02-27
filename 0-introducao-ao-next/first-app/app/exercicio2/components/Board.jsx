"use client";

import Line from "./Line"
import InvertedLine from "./InvertedLine"
import { TeamOneColorContext } from "../context/TeamOneColorContext"; // Pegando o contexto do provider
// import { TeamTwoColorContext } from "../context/TeamTwoColorContext"; // Pegando o contexto do provider
import { useContext } from "react";



export default function Board() {

    return (
        <>
            <Line team="1"/>
            <InvertedLine team="1"/>
            <Line team="1"/>
            <InvertedLine isEmpty={true}/>
            <Line isEmpty={true}/>
            <InvertedLine team="2"/>
            <Line team="2"/>
            <InvertedLine team="2"/>
        </>

    )
}