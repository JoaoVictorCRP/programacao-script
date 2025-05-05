import style from "./style.module.css"

export default function page (){
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh',
            backgroundColor:'#759dc0'
        }}>
            <div className={style.calculatorDiv}>
                <div className={style.display}>
                    <p style={{color:'black'}}>1+1</p>
                </div>
            </div>
        </div>
    )
}