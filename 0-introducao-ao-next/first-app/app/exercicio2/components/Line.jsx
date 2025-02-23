import Square from "./Square"

export default function Line() {
    return (
        <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
            <Square color="black"/>
            <Square color="white"/>
            <Square color="black"/>
            <Square color="white"/>
            <Square color="black"/>
            <Square color="white"/>
            <Square color="black"/>
            <Square color="white"/>
        </div>
    )
}