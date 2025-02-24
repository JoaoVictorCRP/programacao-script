import styles from "../styles/Piece.module.css"

export default function Piece(props){
    return(
        <div style={{ 
            color: props.teamColor,
            border: "solid 25px",
            width: 25,
            height: 25,
            borderRadius: 25,
            }}>
            {/* Peça */}
        </div>
    )
}