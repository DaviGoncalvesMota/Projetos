import './Colaborador.css';

interface ColaboradorProps {
    nome: string
    Imagem: string
    Cargo: string
    corDeFundo: string
    data: string
}

const Colaborador = ({nome, Cargo, Imagem, corDeFundo, data}: ColaboradorProps) => {
    return(<div className='colaborador'>
        <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            <img className='foto' src={Imagem} alt='a imagem n foi'/>
        </div>
        <div className='rodape'>
            <h4> {nome} </h4>
            <h5> {Cargo}</h5>
            <h5> {new Date(data).toLocaleDateString()} </h5>
        </div>
    </div>
    )
}

export default Colaborador