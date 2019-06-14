import React from "react";
import "./Person.css";
// when using class components its we make use of array destructuring
// childrens re between opening and closing tags
// we can also pass methods as props

const Person = props => {
  //   const change = this.props.changePersonName;
  return (
    <div className="Person">
      <h1 onClick={props.click}>
        Hello I am {props.name}, i am {props.age}
      </h1>
      <h1>{props.children}</h1>
      <input onChange={props.change} value={props.name} />
    </div>
  );
};
export default Person;
