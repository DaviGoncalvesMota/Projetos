import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';
import { IColaborador } from '../Compartilhado/Interfaces/IColaborador';

interface FormularioProps {
    aoColaboradorCadastrado: (colaborador: IColaborador) => void
    times: string[]
}

const Formulario = (props: FormularioProps) => {

    const [nome, setNome] = useState('')
    const [Cargo, setCargo] = useState('')
    const [Imagem, setImagem] = useState('')
    const [Time, setTime] = useState('')
    const [data, setData] = useState('')

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            Cargo,
            Imagem,
            Time,
            data
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        setData('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2> Preencha os Dados para criar o card do colaborador </h2>
                <CampoTexto
                     obrigatorio={true}
                     label="Nome:" 
                     placeholder="Digite seu nome: "
                     valor = {nome}
                     aoAlterado={valor => setNome(valor)}                
                />
                <CampoTexto 
                     obrigatorio={true} 
                     label="Cargo:" 
                     placeholder="Digite seu cargo: " 
                     valor = {Cargo}
                     aoAlterado={valor => setCargo(valor)}  
                />   
                <CampoTexto 
                     label="Imagem:" 
                     placeholder="URl da imagem: " 
                     valor = {Imagem}
                     aoAlterado={valor => setImagem(valor)} 
                />
                <CampoTexto 
                    label='Data de Entrada no Time: '
                    placeholder=''
                    valor={data}
                    aoAlterado={valor => setData(valor)}
                    tipo='date'
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time: " 
                    itens = {props.times}
                    valor = {Time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;