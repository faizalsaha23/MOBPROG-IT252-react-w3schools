import React from "react";

// React Props
class MyCar extends React.Component {
  render() {
    return <h2>My {this.props.color} {this.props.brand}!</h2>;
  }
}

function App() {
  return (
    <div className="App">
      <MyCar color="red" brand="Ferrari" />
    </div>
  );
}

export default App;
