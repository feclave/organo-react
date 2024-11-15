import './CampoTexto.css'

//utilizamos props para deixar o componente genérico e podermos atribuir qualquer valor para ele na hora de utilizá-lo ⬎
const CampoTexto = (props) => {
    
    //para concatenar uma parte mutável com uma string imutável podemos criar uma constante e chamar ela no código ⬎
    const placeholderModificada = `${props.placeholder}...`
    
    return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto