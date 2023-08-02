import ThemeOn from '../../assets/images/themeOn.svg';
import ThemeOff from '../../assets/images/themeOff.svg';
import { Icone } from '../UI';

const Claro = <Icone src={ThemeOn} alt='tema ligado' />
const Escuro = <Icone src={ThemeOff} alt='tema desligado' />

export default ({tema}) => (tema ? Escuro : Claro)