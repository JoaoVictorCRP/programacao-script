import Title from "./components/Title"
import Board from "./components/Board"
import Line from "./components/Line"
import InvertedLine from "./components/InvertedLine"

export default function page() {

    return (
        <div style={{
            "display":"flex",
            "alignItems":"center",
            "justifyContent":"center",
            "border":"solid purple 2px",
            "padding":10,
            "backgroundColor":"aliceblue",
            "flexDirection":"column"
        }} >
            <Title/>
            <Board/>
        </div>
    )
}