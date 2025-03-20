export default function If(prop:any){
    if (prop.condition){
        return prop.children
    } else {
        return null
    }
}