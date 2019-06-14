import React from "react";
// import TodoList from './Components/TodoList';
// import Header from './Components/Header'
import Person from "./Components/Person";
// import Animal from "./Components/Animal";
import "./App.css";

class App extends React.Component {
  /* 
  // procedure for state manipulation
    1) first define in state
    2) render from state.
    3 update state
  */
  state = {
    persons: [
      { name: "MaxYYYYYYYYY", age: 28, id: 1 },
      { name: "Manu", age: 29, id: 2 },
      { name: "Mattijs de bruyne", age: 19, id: 3 }
    ],
    animals: {
      type: "dog"
    },
    showPersons: false
  };

  handleAnimalChange = event => {
    console.log(event.target.value);
    this.setState({
      animals: {
        type: event.target.value
      }
    });
  };

  handleSwitchUser = name => {
    console.log(this.state.animals.type);
    // manipulating state
    // this.state.animals.type = 'Trump'
    this.setState({
      persons: [{ name: "Max", age: 29 }, { name: "Manfried", age: 29 }]
    });
  };

  handleTogglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  nameChangeHandler = (event, id) => {
    // find and get id
    // intantiate a copy of person

    // 2way binding,
    // 1) create methpd.
    // 2) pass method component via a props to handle event
    // 3) inside component body, use onChange props to handle outside props, while adding value
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    // event.target = input we typed
    this.setState({
      persons: persons
    });
  };

  // get the person
  // splice the person at given position
  // update state
  handleDeletePerson = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };
  // props can only be passed from parent to child, not the other way
  // state can only be used within the class
  render() {
    // inline styling
    const style = {
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    let person = null;

    if (this.state.showPersons) {
      person = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              click={() => this.handleDeletePerson(index)}
              name={person.name}
              age={person.age}
              id={person.id}
              change={event => this.nameChangeHandler(event, person.id)}
              style={style}
            />
          ))}
        </div>
      );
      //after person, ensure that style background is red
      style.backgroundColor = "red";
    }
    let classes = []
    let personsLength = this.state.persons.length;
    if (personsLength <= 2) {
      classes.push("red")
    }
    if (personsLength <= 1) {
      classes.push("bold")
    }
    return (
      <div className="App">
        <div className={classes.join(' ')}>Hello i am a react app</div>
        <button style={style} onClick={this.handleTogglePersons}>
          Switch name
        </button>
        {/* Here we are passing state as a prop, so that we would  be able to change it */}
        {person}
      </div>
    );
  }
}
export default App;
