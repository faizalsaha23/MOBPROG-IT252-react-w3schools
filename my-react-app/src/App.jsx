function App() {
  const name = "Faizal Saha";
  const a = 5;
  const b = 10;
  const imageUrl = "https://placehold.co/150";
  const isLoggedIn = true;

  let message;
  if (a > b) {
    message = "a is bigger than b";
  } else {
    message = "b is bigger than a";
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React JSX Intro</h1>
      <p>Hello, this is JSX!</p>

      <h2>JSX Expressions</h2>
      <p>My name is {name}</p>
      <p>
        {a} + {b} = {a + b}
      </p>

      <h2>JSX Attributes</h2>
      <img src={imageUrl} alt="placeholder" />
      <p className="note" style={{ color: "blue", fontSize: "20px" }}>
        This text uses className and style attributes
      </p>

      <h2>JSX If Statements</h2>
      <p>{message}</p>
      <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
    </div>
  );
}

export default App;
