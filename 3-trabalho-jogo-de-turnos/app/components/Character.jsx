import Image from "next/image";


export default function Character(props) {
    const lifePercent = Math.max(0, props.life)
    console.log(lifePercent);
    return (
        <div className="character">
            <div className="life-bar bg-green-500 w-lg">
                <div className="life-fill" style={{width: lifePercent}}></div>
                <div className="life-text">{props.life}</div>
            </div>

            <div className="sprite">
                <Image
                    src={`/${props.isHero ? "hero":"villain"}/default.png`}
                    alt={props.isHero ? "hero" : "villain"}
                    width="200"
                    height="200"
                />
            </div>
            <h1>{props.name}</h1>

            {
                props.isHero && props.onAction && (
                    <div className="actions">
                        <button disabled={!(props.isHeroTurn)}>Atacar</button>
                    </div>
                )
            }
        </div>
    )
}