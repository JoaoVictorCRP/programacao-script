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
                    <Square color="black" isOccupied={true} teamColor={props.teamColor}/>
                    <Square color="white"/>
                    <Square color="black" isOccupied={true} teamColor={props.teamColor}/>
                    <Square color="white"/>
                    <Square color="black" isOccupied={true} teamColor={props.teamColor}/>
                    <Square color="white"/>
                    <Square color="black" isOccupied={true} teamColor={props.teamColor}/>
                </>
            }
        </div>
    )
}