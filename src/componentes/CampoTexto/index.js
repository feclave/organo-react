import './CampoTexto.css'

//utilizamos props para deixar o componente genérico e podermos atribuir qualquer valor para ele na hora de utilizá-lo ⬎
const CampoTexto = (props) => {
    
    //para concatenar uma parte mutável com uma string imutável podemos criar uma constante e chamar ela no código ⬎
    const placeholderModificada = `${props.placeholder}...`


    //sempre que alguém digitar algo no campo de texto nós vamos guardar isso no console e as props vão dizer o que está em cada caixa
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    
    return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}
//required torna o preenchimento do campo obrigatório quando a props for utilizada
export default CampoTexto