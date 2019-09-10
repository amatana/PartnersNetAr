import React from "react";

const List = ({ list = [], title }) => (
  <div className="paddingGral">
    <h2 className="listTitle">{title || "List Title"}</h2>

    {list.map((item, key) => (
      <div key={key++} className="gridPhoto">
        <div className="roundedPhoto colorTrial" />
        <div className="textList">
          <h2>Nombre de la Cosa</h2>
          <p>Especialidad</p>
        </div>
      </div>
    ))}
  </div>
);
