import React, { Component } from "react";

<<<<<<< HEAD
class Collatz extends Component {
=======
export default class Collatz extends Component {
>>>>>>> ef21f4619cbe483249412fdbe379731c0eed1828
  cajaNumero = React.createRef();

  generarCollatz = (event) => {
    event.preventDefault();
<<<<<<< HEAD

    let numero = parseInt(this.cajaNumero.current.value);
    let aux = [];

    while (numero !== 1) {
      if (numero % 2 === 0) {
=======
    let numero = parseInt(this.cajaNumero.current.value);
    let aux = [];
    while (numero != 1) {
      if (numero % 2 == 0) {
>>>>>>> ef21f4619cbe483249412fdbe379731c0eed1828
        numero = numero / 2;
      } else {
        numero = numero * 3 + 1;
      }
      aux.push(numero);
    }
<<<<<<< HEAD

=======
>>>>>>> ef21f4619cbe483249412fdbe379731c0eed1828
    this.setState({
      numeros: aux,
    });
  };
<<<<<<< HEAD

  state = {
    numeros: [],
  };

  render() {
    return (
      <div>
        <h1>Conjetura de Collatz</h1>
=======
  state = {
    numeros: [],
  };
  render() {
    return (
      <div>
        <h1>Conjetura Collatz</h1>
>>>>>>> ef21f4619cbe483249412fdbe379731c0eed1828
        <form onSubmit={this.generarCollatz}>
          <label>Introduzca número</label>
          <input type="number" ref={this.cajaNumero} />
          <button>Mostrar conjetura</button>
          <ul>
            {this.state.numeros.map((num, index) => {
              return <li key={index}>{num}</li>;
            })}
          </ul>
        </form>
      </div>
    );
  }
}
<<<<<<< HEAD

export default Collatz;
=======
>>>>>>> ef21f4619cbe483249412fdbe379731c0eed1828
