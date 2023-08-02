
import { useState } from 'react';
import Formulario from './Componentes/Formulario';
import Time from './Componentes/Time';
import Banner from './Componentes/Banner';
import { IColaborador } from './Componentes/Compartilhado/Interfaces/IColaborador';
import Rodape from './Componentes/Rodape';


function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome:  'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome:  'Ux e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome:  'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome:  'Inovação e gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [Colaboradores, setColaboradores] = useState<IColaborador[]>([])

  const aoColaboradorAdicionado = (Colaborador: IColaborador) => {
    setColaboradores([...Colaboradores, Colaborador])
  }
  return (
    <div className="App">
      <Banner enderecoImagem='/imagens/banner.png' />
      <Formulario times ={times.map(time => time.nome)} aoColaboradorCadastrado={Colaborador => aoColaboradorAdicionado(Colaborador)}/>

      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={Colaboradores.filter(colaborador => colaborador.Time === time.nome)}/>)}
      <Rodape />
    </div>
    
  );
}

export default App;