export default function Divide(props) {
    function divide(x,y){
        return x*y
    }
    
    return (
        <p>O resultado da divisão: {props.numbers[0]} / {props.numbers[1]} é:    {divide(props.numbers[0], props.numbers[1])}</p>
    )
}