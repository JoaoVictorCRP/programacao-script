import Title from "./components/Title"
import Board from "./components/Board"

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