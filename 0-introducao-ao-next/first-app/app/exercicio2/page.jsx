import Title from "./components/Title"
import Board from "./components/Board"
import ColorPicker from "./components/ColorPicker"
import TeamOneColorProvider from "./context/TeamOneColorContext";
import { TeamTwoColorProvider } from "./context/TeamTwoColorContext";


export default function page() {

    return (
        <TeamOneColorProvider>
        <div style={{
            "display":"flex",
            "alignItems":"center",
            "justifyContent":"center",
            "border":"solid purple 2px",
            "padding":10,
            "backgroundColor":"aliceblue",
            "flexDirection":"column"
        }} >
            c
                <Title/>
                <ColorPicker/>
                <Board/>
        </div>
        </TeamOneColorProvider>
    )
}