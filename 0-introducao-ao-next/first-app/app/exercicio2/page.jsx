import Line from "./components/Line"
import InvertedLine from "./components/InvertedLine"
import Title from "./components/Title"


export default function page() {
    return (
        <div style={{
            "display":"flex",
            "alignItems":"center",
            "justifyContent":"center",
            "border":"solid purple 2px",
            "backgroundColor":"red",
            "padding":10,
            "flexDirection":"column"
        }}>
            <Title/>
            <Line/>
            <InvertedLine/>
            <Line/>
            <InvertedLine/>
            <Line/>
            <InvertedLine/>
            <Line/>
            <InvertedLine/>
        </div>
    )
}