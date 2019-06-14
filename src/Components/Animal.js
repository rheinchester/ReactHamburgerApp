import React from "react";
import "./Person.css";

class Animal extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, i am a {this.props.type}</h1>
        <input onChange={this.props.changeAnimal} value={this.props.name} />
      </div>
    );
  }
}

export default Animal;
