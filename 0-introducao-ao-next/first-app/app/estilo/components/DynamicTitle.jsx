
export default function DynamicTitle(props){
    return (
        <h5 style={{
            textAlign: props.isLeftWinger ? "left" : "right",
            color: props.isLeftWinger ? "red" : "blue",
            fontSize: 20
        }}> {props.name} {props.isLeftWinger ? "☭" : "̸/̸̅̅ ̆̅ ̅̅ ̅̅"}</h5>
    )
}