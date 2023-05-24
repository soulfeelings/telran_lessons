import React from "react";
import "./Button.css";

export default function Button() {
  const showAlert = () => alert("Я самый крутой программист в Aстане!");

  return (
    <button className="ButtonGreen" onClick={showAlert}>
      PLUS
    </button>
  );
}
