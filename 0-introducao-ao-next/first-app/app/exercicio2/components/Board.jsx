import Line from "./Line"
import InvertedLine from "./InvertedLine"



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