import Divide from "./components/Divide";
import Multiply from "./components/Multiply";
import Sum from "./components/Sum";

export default function Page () {
    return (
        <div>
            <Sum numbers={[5,5]}/>

            <Multiply numbers={[5,5]}/>

            <Divide numbers={[5,5]}/>
        </div>
        
    )
}