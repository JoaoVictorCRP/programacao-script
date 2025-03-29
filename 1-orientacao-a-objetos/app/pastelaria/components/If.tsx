import {ReactElement} from "react";

interface If {
    condition: boolean;
    children: ReactElement<any,any>;
}

export default function If(prop:If){
    if (prop.condition){
        return prop.children
    } else {
        return null
    }
}