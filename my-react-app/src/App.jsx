function App() {
  // JSX Expressions
  const title = "Motivation";
  const quote = "Your future self will thank you for not giving up today.";

  // JSX Attributes
  const imageUrl = "https://placehold.co/300x150?text=Never+Give+Up";

  // JSX If Statements
  const isMotivated = true;
  let message;
  if (quote.length > 0) {
    message = "Keep going, you're doing great!";
  } else {
    message = "Add your quote first.";
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", textAlign: "center" }}>
      <h1>{title}</h1>

      <h2>JSX Expressions</h2>
      <p>{quote}</p>

      <h2>JSX Attributes</h2>
      <img src={imageUrl} alt="Never give up" />
      <p className="note" style={{ color: "green", fontSize: "20px" }}>
        This text uses className and style attributes
      </p>

      <h2>JSX If Statements</h2>
      <p>{message}</p>
      <p>{isMotivated ? "Welcome back, keep pushing!" : "Take a short rest."}</p>
    </div>
  );
}

export default App;
