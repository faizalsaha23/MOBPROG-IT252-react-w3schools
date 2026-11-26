import { useState, useEffect, useContext, useRef, useReducer, useCallback, useMemo, createContext } from "react";

const ThemeContext = createContext("light");

function reducer(state, action) {
  if (action === "add") return state + 1;
  return state;
}

function Hooks() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "Count: " + count;
  }, [count]);

  const theme = useContext(ThemeContext);

  const inputRef = useRef(null);

  const [num, dispatch] = useReducer(reducer, 0);

  const sayHi = useCallback(() => alert("Hi Faizal!"), []);

  const double = useMemo(() => count * 2, [count]);

  return (
    <div>
      <h2>React Hooks</h2>

      <p>useState: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>

      <p>useEffect: tab title changes to Count: {count}</p>

      <p>useContext: theme is {theme}</p>

      <input ref={inputRef} placeholder="useRef" />
      <button onClick={() => inputRef.current.focus()}>Focus</button>

      <p>useReducer: {num}</p>
      <button onClick={() => dispatch("add")}>Add</button>

      <button onClick={sayHi}>useCallback</button>

      <p>useMemo (double): {double}</p>
    </div>
  );
}

export default Hooks;
