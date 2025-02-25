import Line from "./Line"
import InvertedLine from "./InvertedLine"



export default function Board() {
    const team1Color = "#B3250A"; // Vermelho escuro
    const team2Color = "#0a3b82"; // Azul escuro

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