export default function CustomizedToast(props) {
    const target = props.target === "hero" ? "Trump" : "Xi Jinping"
    const attacker = target==="Trump" ? "Xi Jinping" : "Trump";
    const attackType = props.attackType;
    let message = "";

    if (attackType === "special") {
        message = attacker==="Trump" ? "taxou a China em 150%" : "humilhou o Ocidente."
    }

    if (attackType === "skip") {
        message = "dormiu no ponto."
    }

    return (
        <div className="flex flex-col p-4">
            <p>{attacker} {message ? message : " atacou."}</p>
            {   props.damage ?
                <p className="text-red-800 text-sm font-semibold">
                    {target} tomou {props.damage} de dano!
                </p> : ""
            }

        </div>
    );
}