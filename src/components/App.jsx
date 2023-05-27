import React, { useState } from "react";

function App() {
  const [TextArea, SetTextArea] = useState(``);
  const [UpdateText, SetUpdateText] = useState(TextArea);
  const isOver = false;

  function Update() {
    SetUpdateText(TextArea);
  }

  return (
    <div className="container">
      <h1>Hello,{UpdateText} </h1>
      <input
        onChange={function TextArea(event) {
          SetTextArea(event.target.value);
        }}
        type="text"
        placeholder="What's your name?"
      />
      <button
        onClick={function clicked() {
          console.log(`clicked`);
          Update();
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
