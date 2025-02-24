import Line from "./Line"
import InvertedLine from "./InvertedLine"

export default function Board() {
    return (
        <>
            {/* FIXME: All lines are empty */}
            <Line/>
            <InvertedLine/>
            <Line/>
            <InvertedLine isEmpty={true}/>
            <Line isEmpty={true}/>
            <InvertedLine/>
            <Line/>
            <InvertedLine/>
        </>

    )
}