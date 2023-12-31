import React from "react";
import { Botao, Box } from '../../Components/UI';
import { extratoLista } from '../../info';
import Items from "../Items";

const Extrato = () => {
    return(
        <Box>
            {
                extratoLista.updates.map(({id, type, value, from, date}) => {
                    return(
                        <Items key={id} type={type} from={from} value={value} date={date}/>
                    )
                })
            }
            <Botao>
                Ver Mais
            </Botao>
        </Box>
    )
}

export default Extrato


