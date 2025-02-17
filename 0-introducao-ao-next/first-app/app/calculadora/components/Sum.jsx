export default function Sum(props) {
    function sum(x,y){
        return x+y
    }
    
    return (
        <p>O resultado da soma é {sum(props.numbers[0], props.numbers[1])}</p>
    )
}