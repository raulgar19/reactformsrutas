import React, { Component } from "react";

class FormSiple extends Component {
  cajaNombre = React.createRef();

  peticionFormulario = (event) => {
    console.log("Petición lista!!!");
    event.preventDefault();
    let nombre = this.cajaNombre.current.value;
    console.log("Nombre recibido: " + nombre);

    this.setState({
      nombre: nombre,
    });
  };

  state = {
    nombre: "",
  };

  render() {
    return (
      <div>
        <h1>Formulario simple React</h1>
        <h2 style={{ color: "blue" }}>{this.state.nombre}</h2>
        <form onSubmit={this.peticionFormulario}>
          <label>Nombre:</label>
          <input type="text" ref={this.cajaNombre} />
          <button>Realizar petición</button>
        </form>
      </div>
    );
  }
}

export default FormSiple;
