import Image from "next/image";
import PastelImage from "@/public/pastel.png";
import styles from "../styles.module.css"

interface CardPastel {
    sabor: string;
}

export default function CardPastelEsgotado ( props: CardPastel ) {
    return (
        <div className={styles.cardPastelEsgotado}>
            <Image
                src={PastelImage}
                alt={`Pastel de ${props.sabor}`}
                width="100"
                height="50"
            />
            <p>{`\tPastel de ${props.sabor}`}</p>
            <p style={{color:"red"}}>ESGOTADO</p>
            <button className={styles.cardPastelEsgotadoButton}>
                Não disponível
            </button>
        </div>)
}