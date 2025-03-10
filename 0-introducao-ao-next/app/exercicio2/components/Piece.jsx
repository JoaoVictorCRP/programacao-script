import style from '../style/piece.module.css'

export default function Piece(props){
        return(
        <button className={props.team == 1 ? style.teamOnePiece : style.teamTwoPiece}>
            
        </button>
    )
}