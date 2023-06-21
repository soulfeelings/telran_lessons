import { useState } from "react";

export default function Task21_06_2023() {
  const [numbers, setNumbers] = useState({
    count: "",
    count2: "",
  });

  const input1 = (e) => {
    setNumbers({ ...numbers, count: +e.target.value || "" });
  };

  const input2 = (e) => {
    setNumbers({ ...numbers, count2: +e.target.value || "" });
  };

  return (
    <div style={{ display: "flex" }}>
      <input type="number" value={numbers.count} onChange={input1} />
      <p>+</p>
      <input type="number" value={numbers.count2} onChange={input2} />
      <p>=</p>
      <p>{numbers.count + numbers.count2}</p>
    </div>
  );
}

/**
 * Вариант с двумя стейтами
 * 

const [count, setCount] = useState(0)
const [count2, setCount2] = useState(0)

const input1 = (e) => {
  setCount(+e.target.value)
}

const input2 = (e) => {
  setCount2(+e.target.value)
}

return (
  <div>
    <input type="number" value={count} onChange={input1}/>
    <p>+</p>
    <input type="number" value={count2} onChange={input2} />
    <p>=</p>
    <p>{count + count2}</p>
  </div>
)
 * 
 */
