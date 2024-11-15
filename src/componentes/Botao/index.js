import './Botao.css'

const Botao = (props) => {
    return(
        <button className='botao'>
            {props.children}
        </button>
    )
}

export default Botao

//a propriedade children possibilita que tudo o que estiver dentro do componente será parte de sua estrutura, seja texto, imagem, etc...