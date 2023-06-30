import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";

/**
 * padding 10px
 * border-radius: 13px;
 * border: 2px solid yellow
 */

const Text = () => {
  return <p>Text</p>;
};

const Avatar = () => {
  return (
    <img
      src="https://img.freepik.com/free-photo/a-cupcake-with-a-strawberry-on-top-and-a-strawberry-on-the-top_1340-35087.jpg"
      style={{ width: "40px", height: "40px", borderRadius: "50%" }}
    />
  );
};

// Wrapper

const YellowWrapper = (props) => {
  return (
    <div
      style={{
        padding: "10px",
        borderRadius: "13px",
        border: "2px solid yellow",
        display: "inline-block",
      }}
    >
      {props.children}
    </div>
  );
};

// useMemo и useCallback

function App() {
  const [s, setS] = useState(true);
  const [dificultCalculation, setDificultCalculation] = useState(0);
  const getName = useCallback(() => {}, []);
  console.log(getName);
  // const dificultCalculation = useMemo(() => {
  //   console.log("useMemo WORK");
  //   for (let index = 0; index < 2_000_000_000; index++) {}

  //   return Math.random();
  // }, []);

  useEffect(() => {
    const calc = () => {
      console.log("useMemo WORK");
      for (let index = 0; index < 2_000_000_000; index++) {}

      return Math.random();
    };
    setDificultCalculation(calc());
  }, []);

  // console.log(s);
  return (
    <div>
      <YellowWrapper>
        <Avatar />
      </YellowWrapper>
      <YellowWrapper>
        <Text />
      </YellowWrapper>
      <Avatar />
      <Text />
      <p>{dificultCalculation}</p>
      <button onClick={() => setS(!s)}>WLKNWLKRNGLKWRNGLKNWRG</button>
    </div>
  );
}

export default App;
