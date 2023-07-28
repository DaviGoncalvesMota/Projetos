import React from 'react';
import Colaborador from '../Colaborador';
import { IColaborador } from '../Compartilhado/Interfaces/IColaborador';
import './Time.css';

interface TimeProps{
    corPrimaria: string
    nome: string
    corSecundaria: string
    colaboradores: IColaborador[]
}

const Time = (props: TimeProps) => {

    const css = {backgroundColor: props.corSecundaria}

    return(
        (props.colaboradores.length > 0) ? <section className="time" style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => 
                <Colaborador 
                    corDeFundo={props.corPrimaria}
                    key={colaborador.nome} 
                    nome={colaborador.nome} 
                    Cargo={colaborador.Cargo} 
                    Imagem={colaborador.Imagem}
                    data={colaborador.data}
                    />
                )}
            </div>
        </section>
        : <React.Fragment></React.Fragment>
    )
}

export default Time;
