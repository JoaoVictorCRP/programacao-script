export default function Button(props) {
    return (
        <button
            className="bg-slate-400 p-4 rounded-lg shadow-sm outline-black
             outline-solid hover:bg-slate-500 cursor-pointer ml-5"
        >
            {props.label}
        </button>
    )
}