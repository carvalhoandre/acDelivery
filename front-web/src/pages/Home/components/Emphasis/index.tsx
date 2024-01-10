/* @ts-ignore */
import Eletric from "../../../../assets/eletrica.svg";
import Speed from "../../../../assets/velocidade.svg";
import Tracker from "../../../../assets/rastreador.svg";


import "./styles.css";

const Emphasis = () => {
  return (
    <article className="content advantage" aria-labelledby="label-vantagens">
      <div className="emphasis">
        <h2 id="label-introducao">Vantagens Bikcraft</h2>
      </div>

      <ul className="white details">
        {/* item 1  */}
        <li className="details-item">
          <img src={Eletric} alt="eletrica" />
          <span className="details-description">Motor Elétrico</span>

          <p>Permite você viajar distâncias inimaginaveis com a sua bike.</p>
        </li>

        {/* item 2  */}
        <li className="details-item">
          <img src={Speed} alt="velocidade" />
          <span className="details-description">40 km/h</span>

          <p>A mais rápida bicicleta elétrica disponível hoje no mercado.</p>
        </li>

        {/* item 3  */}
        <li className="details-item">
          <img src={Tracker} alt="rastreador" />
          <span className="details-description">Rastreador</span>

          <p>Rastreador e sistema anti-furto para garantir o seu sossego.</p>
        </li>
      </ul>
    </article>
  );
};

export default Emphasis;
