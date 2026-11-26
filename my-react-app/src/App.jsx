import Card from "./Card";

function App() {
  return (
    <div>
      <h3>React Props Children</h3>

      <Card>
        <h2>Card 1</h2>
        <p>This text is the children of the Card.</p>
      </Card>

      <Card>
        <h2>Card 2</h2>
        <p>Different children, same Card!</p>
      </Card>
    </div>
  );
}

export default App;
