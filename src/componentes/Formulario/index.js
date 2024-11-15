import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {
    
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão'
    ]
    
    //O useState permite criar variáveis de estado em componentes funcionais, com um valor inicial e uma função para atualizar esse valor.
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label='Nome' 
                    placeholder='Digite seu nome'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    />
                <CampoTexto 
                    obrigatorio={true} 
                    label='Cargo' 
                    placeholder='Digite seu cargo'
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    />
                <CampoTexto 
                label='Imagem' 
                placeholder='Digite o endereço da imagem'
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                 obrigatorio={true}
                 label='Time' 
                 itens={times}
                 valor={time}
                 aoAlterado={valor => setTime(valor)}
                 />
                <Botao> Criar card </Botao>
            </form>
        </section>
    )
}

export default Formulario