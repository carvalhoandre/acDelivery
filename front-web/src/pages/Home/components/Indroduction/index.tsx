/* @ts-ignore */
import Bikraft from "../../../../assets/bicicleta-1200-800.jpg";

import "./styles.css";

const Indroduction = () => {
  return (
    <article className="content" aria-labelledby="label-introducao">
      <div className="indroduction white">
        <h2 id="label-introducao" className="title">
          Bicicletas Feitas a Mão
        </h2>

        <p>
          A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela
          vem equipada com os melhores acessórios da marca.
        </p>

        <button className="indroduction-button">Ver mais</button>
      </div>

      <img
        src={Bikraft}
        alt="bicicleta"
        className="indroduction-img"
      />
    </article>
  );
};

export default Indroduction;
