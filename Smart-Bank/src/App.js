import React, { useState } from "react";
import Cabecalho from "./Components/Cabecalho";
import { GlobalStyle } from "./Components/GlobalStyle";
import ContainerReaper from "./Components/Container";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

function App() {

  const [tema, setTema] = useState(true)

  const toogleTema = () => {
    setTema((tema) => !tema)
  }

  return (
    <>
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
    <BtnTema onClick={toogleTema}>
      <SwitcherTema tema={tema} />
    </BtnTema>
      <GlobalStyle />
      <Cabecalho />
      <ContainerReaper />
    </ThemeProvider>
    </>
  );
}

export default App;
