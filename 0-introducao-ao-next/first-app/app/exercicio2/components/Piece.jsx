import style from '../style/piece.module.css'

export default function Piece(props){
    const team1Color = useContext(TeamOneColorContext); // Vermelho escuro
    
    return(
        <button className={props.team == 1 ? style.teamOnePiece : style.teamTwoPiece}>
            
        </button>
    )
}