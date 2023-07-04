import './Colaborador.css';

const Colaborador = ({nome, Cargo, Imagem, corDeFundo}) => {
    return(<div className='colaborador'>
        <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            <img className='foto' src={Imagem} alt='a imagem n foi'/>
        </div>
        <div className='rodape'>
            <h4> {nome} </h4>
            <h5> {Cargo}</h5>
        </div>
    </div>
    )
}

export default Colaborador