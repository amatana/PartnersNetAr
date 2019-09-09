import React from "react";

export default ({ list = [], title }) => (
  <div >
    <h2 className="listTitle">{title || "List Title"}</h2>

    {list.map((item, key) => (
      <div key={key++} className="gridPhoto">
        <div className="roundedPhoto colorTrial" />
        <div className="textList">
          <h2>{item}</h2>
          <p>Especialidad</p>
        </div>
      </div>
    ))}
  </div>
);
