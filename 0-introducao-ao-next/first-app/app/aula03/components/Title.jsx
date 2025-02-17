export default function Title(props) {
    const styles = {
        'h1' : {
            'textWeight':'bold',
            'color':'red'
        },
        'h4' : {
            'fontStyle':'italic'
        }
    }

    return (
        <div style={{'textAlign':'center'}}>
            <h1 style={styles.h1}>Olá, {props.username}! Seja muito bem vindo à Aula 03.</h1>
            <h4 style={styles.h4}> {props.secundario}</h4>
        </div>

    )
}