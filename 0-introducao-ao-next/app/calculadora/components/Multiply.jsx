export default function Multiply(props) {
    function multiply(x,y){
        return x*y
    }
    
    return (
        <p>O resultado da multiplicação {props.numbers[0]} * {props.numbers[1]} é: {multiply(props.numbers[0], props.numbers[1])}</p>
    )
}