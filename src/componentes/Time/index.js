import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const section = { backgroundColor: props.corDoFundo }
    
    return(      
        (props.colaboradores.length > 0) && <section className='time' style={section}>
                <h3 style={{ borderColor: props.corDoBanner }}>{props.nome}</h3>
                <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corDoBanner} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/> )}
                </div>
            </section>
    )
}

export default Time

//&&: o react faz a renderização condicional com essa variável. Caso a condição seja verdadeira ele irá retornar a seção seguinte.