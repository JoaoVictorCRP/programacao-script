import Square from "./Square"

export default function InvertedLine() {
    return (
        <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
            <Square color="white"/>
            <Square color="black"/>
            <Square color="white"/>
            <Square color="black"/>
            <Square color="white"/>
            <Square color="black"/>
            <Square color="white"/>
            <Square color="black"/>
        </div>
    )
}