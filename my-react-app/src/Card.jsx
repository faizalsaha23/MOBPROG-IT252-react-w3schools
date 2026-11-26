function Card(props) {
  return (
    <div style={{ border: "2px solid #333", padding: "16px", margin: "16px", borderRadius: "8px" }}>
      {props.children}
    </div>
  );
}

export default Card;
