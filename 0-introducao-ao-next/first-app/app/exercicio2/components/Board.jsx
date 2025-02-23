import Line from "./Line"
import InvertedLine from "./InvertedLine"

export default function Board() {
    return (
        <>
            {/* FIXME: All lines are empty */}
            <Line isEmpty={false}/>
            <InvertedLine isEmpty={false}/>
            <Line isEmpty={false}/>
            <InvertedLine isEmpty={true}/>
            <Line isEmpty={true}/>
            <InvertedLine isEmpty={false}/>
            <Line isEmpty={false}/>
            <InvertedLine isEmpty={false}/>
        </>

    )
}