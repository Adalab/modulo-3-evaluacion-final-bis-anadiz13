import React from "react";
import { Link } from "react-router-dom";
const Repo = (props) => {
  console.log(props.repository);
  return (
    <section className="">
      <Link className="link__return" to="/">
        Volver
      </Link>
      <article className="">
        <h3 className="card__title">Name{props.repository.name}</h3>
        <p className="card__description">
          Descripcion{props.repository.description}
        </p>

        <p className="card__description">
          Lenguaje {props.repository.language}
        </p>
        <p className="card__description">
          Forks
          {props.repository.forks}
        </p>
        <p className="card__description">
          Observadores{props.repository.watchers}
        </p>
        {/* <p className="card__description">
          Número de estrelllas{props.repository.watchers}
        </p> */}
      </article>
    </section>
  );
};
export default Repo;
