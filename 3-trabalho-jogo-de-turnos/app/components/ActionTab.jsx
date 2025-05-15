import Button from "@/app/components/Button";

export default function ActionTab(props) {
    return (
        <div
            className="actions flex justify-center"
            disabled={!(props.isHeroTurn)}
        >
            <Button
                label="Atacar"
            />
            <Button label="Pular Turno"/>
        </div>
    )
}