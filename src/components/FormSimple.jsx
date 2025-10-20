import React, { Component } from 'react'

export default class FormSimple extends Component {
    //NECESITAMOS CREAR UNA VARIABLE DE REFENCIA PARA 
    //CADA OBJETO DE FORMULARIO
    cajaNombre = React.createRef();

<<<<<<< HEAD
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
=======
    peticionFormulario = (event) => {
        //DETENEMOS EL SUBMIT DEL FORMULARIO
        event.preventDefault();
        console.log("Peticion lista!!!");
        //RECUPERAR EL VALOR DE UN OBJETO React:
        let nombre = this.cajaNombre.current.value;
        console.log("Nombre recibido: " + nombre);
        this.setState({
          nombre: nombre
        })
    }

    state = {
      nombre: ""
    }
>>>>>>> ef21f4619cbe483249412fdbe379731c0eed1828

  render() {
    return (
      <div>
        <h1>Formulario simple React</h1>
<<<<<<< HEAD
        <h2 style={{ color: "blue" }}>{this.state.nombre}</h2>
=======
        <h2 style={{color:"blue"}}>{this.state.nombre}</h2>
>>>>>>> ef21f4619cbe483249412fdbe379731c0eed1828
        <form onSubmit={this.peticionFormulario}>
            <label>Nombre: </label>
            <input type="text" ref={this.cajaNombre}/>
            <button>Realizar petición</button>
        </form>
      </div>
    )
  }
}