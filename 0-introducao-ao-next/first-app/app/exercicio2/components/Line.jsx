import Square from "./Square"

export default function Line(props) {
    return (
        <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
            { props.isEmpty ? 
                <>
                    <Square color="white"/>
                    <Square color="black"/>
                    <Square color="white"/>
                    <Square color="black"/>
                    <Square color="white"/>
                    <Square color="black"/>
                    <Square color="white"/>
                    <Square color="black"/>
                </>
                :
                <>
                    <Square color="white"/>
                    <Square color="black" isOccupied={true} teamColor={"#0a66b3"}/>
                    <Square color="white"/>
                    <Square color="black" isOccupied={true} teamColor={"#0a66b3"}/>
                    <Square color="white"/>
                    <Square color="black" isOccupied={true} teamColor={"#0a66b3"}/>
                    <Square color="white"/>
                    <Square color="black" isOccupied={true} teamColor={"#0a66b3"}/>
                </>
            }
        </div>
    )
}