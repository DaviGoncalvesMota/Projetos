import './ListaSuspensa.css';

interface ListaSuspensaProps {
    aoAlterado: (valor: string) => void
    label: string
    obrigatorio: boolean
    valor: string
    itens: string[]
}

const ListaSuspensa = (props: ListaSuspensaProps) => {
    return(
        <div className='ListaSuspensa'>
            <label> {props.label} </label>
            <select onChange={evento => 
                props.aoAlterado(evento.target.value)} 
                value={props.valor}
            >
                <option value=""></option>
                 {props.itens.map(item => 
                    { return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa;