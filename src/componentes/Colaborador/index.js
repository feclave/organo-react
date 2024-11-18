import './Colaborador.css'

const Colaborador = ({nome, imagem, cargo, corDeFundo}) => {
    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador

//props podem ser desestruturadas quando temos um objeto grande com várias dela
//e ao invés de digitar "props.***" só é preciso separar as propriedades da props que
//vamos utilizar ex. nome, imagem, cargo