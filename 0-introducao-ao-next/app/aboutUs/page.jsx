export default function Page () {
    const description = "Estamos aprendendo Next.js!"
    const element = <h3>3 vezes 3 é {3*3}</h3>

    return ( <div style={{'textAlign':'center'}}>
        <h1>Sobre Nós</h1>
        <h2>Estamos na aula 2!</h2>
        <p>
            {description}
        </p>

        <footer style={{'position':'absolute','bottom':'0px','display':'inline','textAlign':'center'}}>
            {element}
        </footer>
      </div>
    //   O web router permite que a própria pasta seja uma rota na aplicação.   
    )
}