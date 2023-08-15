import { createContext, useContext, useState } from "react";

export const pagamentoContext = createContext();
pagamentoContext.displayName = "pagamento";

export const PagamentoProvider = ({ children }) => {
    const tiposDePagamento = [{
        nome: "Boleto",
        juros: 1,
        id: 1
    }, {
        nome: "Cartão de Crédito",
        juros: 1.3,
        id: 2
    }, {
        nome: "PIX",
        juros: 1,
        id: 3
    }, {
        nome: "Crediário",
        juros: 1.5,
        id: 4
    }];
    const [formaDePagamento, setFormaDePagamento] = useState(tiposDePagamento[0])

    return (
        <pagamentoContext.Provider value={{
            tiposDePagamento,
            formaDePagamento,
            setFormaDePagamento
        }}>
            {children}
        </pagamentoContext.Provider>
    )
}

export const usePagamentoContext = () => {
    const
        { 
            tiposDePagamento,
            formaDePagamento,
            setFormaDePagamento
        } 
        = useContext(pagamentoContext);

        function mudarFormaPagamento (id) {
            const pagamentoAtual = tiposDePagamento.find(pagamento => pagamento.id === id);

            setFormaDePagamento(pagamentoAtual)
        }

        
        
        return {
            tiposDePagamento,
            formaDePagamento,
            mudarFormaPagamento
        }
}