import React, { Component } from "react";

const Interest = ({ interest = [], title }) => (
  <div>
    {interest.map((item, key) => (
      <div>
        <p className="intereses">Intereses varios</p>
      </div>
    ))}
  </div>
);

class Intereses extends Component {
  render() {
    return (
      <div>
        <h3>Intereses</h3>

        {Interest}
      </div>
    );
  }
}

export default Intereses;
