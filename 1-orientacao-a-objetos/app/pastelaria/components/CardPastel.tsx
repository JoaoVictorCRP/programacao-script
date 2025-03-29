import Image from "next/image";
import PastelImage from "@/public/pastel.png";
import styles from "../styles.module.css";

interface CardPastel {
    sabor: string;
}

export default function CardPastel( props: CardPastel ) {
    return (
        <div className={styles.cardPastel}>
            <Image
                src={PastelImage}
                alt={`Pastel de ${props.sabor}`}
                width="100"
                height="50"
            />
            <p>{`Pastel de ${props.sabor}`}</p>
            <p>R$8,00</p>
            <button className={styles.cardPastelButton}>
                Comprar
            </button>
        </div>)
}