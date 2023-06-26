import { useState, useEffect } from "react";

export default function TextComponent() {
  const [state, setState] = useState("");
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        setState(json.title);
      });
  }, [value2]);

  console.log("render");

  return (
    <div>
      <input
        placeholder="НЕ РЕАГИРУЙ НА ИЗМЕНЕНИЯ"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <input
        placeholder="ОТПРАВЛЯЙ ФЕЧ"
        value={value2}
        onChange={(e) => {
          setValue2(e.target.value);
        }}
      />
      <div>{state}</div>
    </div>
  );
}
