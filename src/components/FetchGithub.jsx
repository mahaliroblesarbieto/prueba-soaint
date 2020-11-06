import React from "react";
export default class FetchGithub extends React.Component {
  //Hacía falta cerrar las llaves en el constructor
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
    };
  }

  componentDidMount() {
    // El método fetch devuelve una respuesta http y se debe transformar primero a json
    fetch("https://api.github.com/users/workshopsjsmvd")
      .then((res) => res.json())
      .then((data) => {
        // Podemos evaluar si existe data,para evitar que se muestre undefined
        if (data) {
          this.setState({
            name: data.name,
            location: data.location,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
        //A este nivel por ejemplo ,podemos indicar que envíe a una pagina de error,si no hay respuesta
      });
  }

  // En el h2 el estado indicaba local, cuando en realidad lo hemos nombrado location
  // Es mejor si retornamos un solo elemento usando Fragment
  // Al retornar un solo div, ya no necesitamos colocar key en el h1 y h2
  render() {
    return (
      <>
        <h1>{`Nombre: ${this.state.name}`}</h1>
        <h2>{`País: ${this.state.location}`}</h2>
      </>
    );
  }
}
