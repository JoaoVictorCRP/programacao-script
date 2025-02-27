import Piece from "./Piece"

export default function Square(props){
    return(
        <div style={{ 
            "color":props.color,
            "border": 'solid 40px',
            "width": 50,
            "height": 50,
            "display":"flex",
            "alignItems":"center",
            "justifyContent":"center"
        }}>
            
            {props.isOccupied ? <Piece team={props.team}/> : <div/>}
        </div>
    )
}