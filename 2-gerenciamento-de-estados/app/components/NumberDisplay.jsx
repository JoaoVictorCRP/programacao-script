
export default function NumberDisplay(props) {
    return (
        <div className="w-16 h-16 bg-white text-green-700 rounded-full flex items-center justify-center text-xl font-bold shadow-md transition-all">
            {props.number}
        </div>
    )
}