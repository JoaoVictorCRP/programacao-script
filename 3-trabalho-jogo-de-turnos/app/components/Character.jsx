import Image from "next/image";
import ActionTab from "@/app/components/ActionTab";
import classnames from "classnames";

export default function Character(props) {
    const lifePercent = Math.max(0, (props.life / 100 ) * 100) // vida atual dividido pela vida máxima, que é 100.
    let lifeBarColor = "";
    if (props.life>70) {
        lifeBarColor = "bg-green-500";
    } else {
        lifeBarColor = props.life > 30 ? "bg-yellow-500" : "bg-red-500";
        console.log(lifeBarColor)
    }
    console.log(lifePercent);
    return (

        <div className={`character ${props.isHero? "ml-5":"mr-5"}`}>
            <h1 className="font-black">{props.name}</h1>

            <div className="outline-black outline-solid life-bar bg-gray-300 w-xs h-6 rounded-lg relative overflow-hidden"> {/* Barra cinza que fica abaixo da barra verde de vida */}
                <div
                    className={classnames(lifeBarColor,"life-fill h-full transition-all duration-300")}
                    style={{ width: `${lifePercent}%` }}
                ></div>
                <div className="life-text absolute inset-0 flex justify-center items-center font-bold text-black">
                    {Math.round(props.life)} / 100
                </div>
            </div>

            <div className={`sprite mt-3 ${props.isHero ? "" : "flex justify-end"}`}>
                <Image
                    src={`/${props.isHero ? "hero":"villain"}/${props.sprite}.png`}
                    alt={props.isHero ? "hero" : "villain"}
                    width="200"
                    height="200"
                />
            </div>


            {
                props.isHero && props.onAction && (
                    <ActionTab
                        handleHeroAction={props.handleHeroAction}
                    />
                )
            }
        </div>
    )
}