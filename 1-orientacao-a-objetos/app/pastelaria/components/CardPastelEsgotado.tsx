import Image from "next/image";
import PastelImage from "@/public/pastel.png";

interface CardPastel {
    sabor: string;
}

export default function CardPastelEsgotado ( props: CardPastel ) {
    return (
        <div style={{
            position:"relative",
            padding:"5px",
            paddingBottom:"10px",
            marginBottom:"10px",
            color:"black",
            textAlign:"center",
            overflow:"hidden" // impedir que o X ultrapasse o limite do card
        }}>
            <Image
                src={PastelImage}
                alt={`Pastel de ${props.sabor}`}
                width="100"
                height="50"
            />
            <p>{`\tPastel de ${props.sabor}`}</p>
            <p style={{color:"red"}}>ESGOTADO</p>
            <button
                style={{
                    backgroundColor:"grey",
                    padding: "10px",
                    marginTop:"5px",
                    color:"white",
                    borderRadius:"20px",
                    outline:"2px solid black",
                    pointerEvents: "none"
                }}>
                Não disponível
            </button>
        </div>)
}