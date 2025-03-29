import Image from "next/image";
import PastelImage from "@/public/pastel.png";

interface CardPastel {
    sabor: string;
}

export default function CardPastel( props: CardPastel ) {
    return (
        <div style={{
            padding:"5px",
            paddingBottom:"10px",
            marginBottom:"10px",
            outline:"1px solid black",
            color:"black",
            textAlign:"center"
        }}>
            <Image
                src={PastelImage}
                alt={`Pastel de ${props.sabor}`}
                width="100"
                height="50"
            />
            <p>{`Pastel de ${props.sabor}`}</p>
            <p>R$8,00</p>
            <button
                style={{
                    backgroundColor:"green",
                    padding: "10px",
                    marginTop:"5px",
                    color:"white",
                    borderRadius:"20px",
                    outline:"2px solid black"
                }}>
                Comprar
            </button>
        </div>)
}