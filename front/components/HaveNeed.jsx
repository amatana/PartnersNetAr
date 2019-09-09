import React from "react";
import { Link } from "react-router-dom";

export default ({/* profile */}) => (
  <div>
        <h2 className="titles-have-need"> TENGO </h2>
        {/* {profile.tengo.map(tengo => ( */}
        <div
        // key={profile.id}
        >
          <ul id="bullet-check">
            {/* <li>{{tengo}}</li> */}
            <li>Un equipo confirmado</li>
            <li>Un equipo confirmado</li>
          </ul>
        </div>
        {/* ))} */}
        <hr className="border-top: dashed 1px lightgrey" />
        <h2 className="titles-have-need"> NECESITA </h2>
        {/* {profile.necesito.map(necesito => ( */}
        <div
        // key={profile.id}
        >
          <ul id="bullet-cancel">
            {/* <li>{{necesito}}</li> */}
            <li>un experto en marketing</li>
            <li>un experto en marketing</li>
          </ul>
        </div>
        {/* ))} */}
        <div className="button-div">
          <Link to="https://www.google.com" target="_blank">
            <button className="connect-button" type="button">
              Conectar +
            </button>
          </Link>
        </div>
      </div>
);
