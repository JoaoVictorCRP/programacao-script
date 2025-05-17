export default function ActionTab(props) {

    return (

        <div
            className="actions flex justify-center"
            disabled={!(props.isHeroTurn)}
        >
            <button
                className="bg-slate-400 p-4 rounded-lg shadow-sm outline-black outline-solid
                hover:bg-slate-500 cursor-pointer ml-5"
                onClick={() => props.handleHeroAction('attack')}
            >
                Atacar
            </button>
            <button
                className="bg-slate-400 p-4 rounded-lg shadow-sm outline-black
                outline-solid hover:bg-slate-500 cursor-pointer ml-5"
                onClick={() => props.handleHeroAction('skip')}
            >
                Pular Turno
            </button>
        </div>
    )
}