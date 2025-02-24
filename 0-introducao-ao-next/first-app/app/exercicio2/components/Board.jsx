import Line from "./Line"
import InvertedLine from "./InvertedLine"



export default function Board() {
    const team1Color = "#0a66b3";
    const team2Color = "#d30000";

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