import React, { Component } from "react";

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul style={{ listStyle: "none" }}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/collatz">Conjetura de Collatz</a>
          </li>
          <li>
            <a href="/cine">Cine</a>
          </li>
          <li>
            <a href="/musica">Música</a>
          </li>
          <li>
            <a href="/formSimple">Formulario Simple</a>
          </li>
          <li>
            <a href="/tablaMultiplicar">Tabla de multiplicar</a>
          </li>
          <li>
            <a href="/tablaMultiplicarv2">Tabla de multiplicar V2</a>
          </li>
          <li>
            <a href="/seleccionMultiple">Seleccion Múltiple</a>
          </li>
        </ul>
      </div>
    );
  }
}
