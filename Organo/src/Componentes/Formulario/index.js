import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [Cargo, setCargo] = useState('')
    const [Imagem, setImagem] = useState('')
    const [Time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            Cargo,
            Imagem,
            Time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
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
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time: " 
                    itens = {props.times}
                    valor = {Time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao texto="Criar Card" />
            </form>
        </section>
    )
}

export default Formulario;