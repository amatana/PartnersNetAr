import React, { Component } from "react";
// import "../styles.css";

class Info extends Component {
  render() {
    return (
      <div>
        <img src="" alt="" />
        <p className="tituloProyecto">Esteban Rodriguez</p>
        <p className="claseProyecto">Growth Hacker</p>
        <div
          style={{
            boxSizing: "border-box",
            height: "2px",
            width: "143px",
            border: "1px solid #979797"
          }}
        />
        <p className="claseProyecto">
          Soy especialista en marketing digital, un apasionado del growth
          hacking, tengo una agencia de MKT con un socio y ahora estamos busacon
          poder llevar el emprendimiento al siguiente nivel. Ya hicimos una
          ronda de inversion y ahora vamos por la segunda!.
        </p>
      </div>
    );
  }
}

export default Info;
