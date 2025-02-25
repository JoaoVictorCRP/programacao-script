import Piece from "./Piece"

export default function Square(props){
    return(
        <div style={{ 
            "color":props.color,
            "border": 'solid 40px',
            "width": 40,
            "height": 40,
            "display":"flex",
            "alignItems":"center",
            "justifyContent":"center"
        }}>
            
            {props.isOccupied ? <Piece teamColor={props.teamColor}/> : <div/>}
        </div>
    )
}