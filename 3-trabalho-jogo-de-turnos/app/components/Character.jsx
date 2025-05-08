export default function Character(props) {
    const lifePercent = Math.max(0, )
    console.log(lifePercent);
    return (
        <div className="character">
            <div className="life-bar">
                <div className="life-fill" style={{width: lifePercent}}></div>
                <div className="life-text">{props.life}</div>
            </div>

            <div className="sprite">
                Personagem aqui
            </div>
            <h1>{props.name}</h1>

            {
                props.isHero && props.onAction && (
                    <div className="actions">
                        <button disabled={!props.isHeroTurn}></button>
                    </div>
                )
            }
        </div>
    )
}