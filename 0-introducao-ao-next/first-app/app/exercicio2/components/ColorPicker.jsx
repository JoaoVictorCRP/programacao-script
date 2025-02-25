"use client";

import { useContext } from "react";
import { TeamOneColorContext } from "../context/TeamOneColorContext"; // Pegando o contexto do provider
import { TeamTwoColorContext } from "../context/TeamTwoColorContext"; // Pegando o contexto do provider


export default function ColorPicker() {
    const { teamOneColor, setTeamOneColor } = useContext(TeamOneColorContext);
    // const { teamTwoColor, setTeamTwoColor } = useContext(TeamTwoColorContext);


    const handleTeamOneColorChange = (e) => {
        setTeamOneColor(e.target.value);
    };

    // const handleTeamTwoColorChange = (e) => {
    //     setTeamTwoColor(e.target.value);
    // };

    return (
        <div style={{
            "display":"flex",
            "flexDirection":"column"
        }} >
            <label htmlFor="teamColor">Select Team Color: </label>
            <input 
                id="teamColor"
                type="color"
                value={teamOneColor} 
                onChange={handleTeamOneColorChange}
            />
        </div>
    )
}