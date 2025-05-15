import Image from "next/image";
import ActionTab from "@/app/components/ActionTab";


export default function Character(props) {
    const lifePercent = Math.max(0, props.life)
    console.log(lifePercent);
    return (

        <div className={`character ${props.isHero? "ml-5":"mr-5"}`}>
            <h1>{props.name}</h1>
            <div className="life-bar bg-green-500 w-lg outline-solid outline-black rounded-lg text-right p-1">
                <div className="life-fill" style={{width: lifePercent}}></div>
                <div className="life-text">{props.life}</div>
            </div>

            <div className={`sprite mt-3 ${props.isHero ? "" : "flex justify-end"}`}>
                <Image
                    src={`/${props.isHero ? "hero":"villain"}/default.png`}
                    alt={props.isHero ? "hero" : "villain"}
                    width="200"
                    height="200"
                />
            </div>


            {
                props.isHero && props.onAction && (
                    <ActionTab/>
                )
            }
        </div>
    )
}