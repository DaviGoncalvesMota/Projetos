import Alimentacao from "../assets/images/alimentacao.svg";
import Utilidades from "../assets/images/utilidades.svg";
import Outros from "../assets/images/outros.svg";
import Transporte from "../assets/images/transporte.svg";
import Saude from "../assets/images/saude.svg";
import { IconeTema } from "../Components/UI";

export default (type) => {
  const Images = {
    Restaurante: <IconeTema src={Alimentacao} alt="Restaurante" />,
    Utilidades: <IconeTema src={Utilidades} alt="Utilidades" />,
    Saude: <IconeTema src={Saude} alt="Saude" />,
    Transporte: <IconeTema src={Transporte} alt="Transporte" />,
    Outros: <IconeTema src={Outros} alt="Outros" />
  };

  return Images[type] || Images.default;
};
