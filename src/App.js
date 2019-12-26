import React, { Component } from "react";
import PropTypes from "prop-types";
const Person = ({ img, name, age }) => {
  return (
    <div>
      <img src={img} alt="person" />
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
    </div>
  );
};

Person.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  age: PropTypes.number
};
class ListPerson extends Component {
  state = {
    people: [
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/med/men/74.jpg",
        name: "Mae",
        age: 30
      },
      {
        id: 2,
        img: "https://randomuser.me/api/portraits/med/men/75.jpg",
        name: "Nils",
        age: 33
      },
      {
        id: 3,
        img: "https://randomuser.me/api/portraits/med/men/45.jpg",
        name: "James",
        age: 23
      },
      {
        id: 4,
        img: "https://randomuser.me/api/portraits/med/men/90.jpg",
        name: "Evan",
        age: 40
      }
    ]
  };

  render() {
    return (
      <div>
        {this.state.people.map(person => (
          <Person
            key={person.id}
            img={person.img}
            name={person.name}
            age={person.age}
          />
        ))}
      </div>
    );
  }
}

class App1 extends Component {
  render() {
    return (
      <div>
        {" "}
        <ListPerson />
      </div>
    );
  }
}
export default App1;
