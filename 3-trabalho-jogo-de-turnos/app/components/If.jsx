export default function If (props) {
    return (
        <div>
            {
                props.condition && (
                    props.children
                )
            }
        </div>
    )
}