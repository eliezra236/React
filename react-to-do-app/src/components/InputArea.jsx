import React from "react";

function InputArea(props) {
  const [inputText, setInputText] = React.useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function clearInput() {
    setInputText("");
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.addItem(inputText);
          clearInput();
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
