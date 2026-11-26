import React from "react";

// 1. React Class Component
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car! (Class Component)</h2>;
  }
}

// 2. React Props
class Bike extends React.Component {
  render() {
    return <h2>I am a {this.props.color} Bike!</h2>;
  }
}

// 3. React Destructuring Props
function Student({ name, course }) {
  return <h2>{name} is taking {course}.</h2>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello MOBPROG-IT252 World!</h1>
      <h2>Happy 2026 SoCITFest!</h2>
      <h3>Faizal Saha</h3>

      <hr />

      <h3>React Class Components</h3>
      <Car />

      <h3>React Props</h3>
      <Bike color="red" />

      <h3>React Destructuring Props</h3>
      <Student name="Faizal Saha" course="BSIT 252" />
    </div>
  );
}

export default App;
