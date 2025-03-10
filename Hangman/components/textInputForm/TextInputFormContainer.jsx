import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {
  const [inputType, setInputType] = useState("password");
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  function handleformsubmit(event) {
    event.preventDefault();
    console.log("Form Submitted", value);
    if (value) {
      navigate("/play", { state: { wordSelected: value } });
    }
    // navigate("/play", { state: { value } }, console.log(value)); navigation of value
  }

  function handleTextInputChange(event) {
    console.log("Text input changed");
    console.log(event.target.value);
    setValue(event.target.value);
  }

  function handleShowHideClick() {
    console.log("Show/Hide button clicked");
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
    console.log(inputType);
  }

  return (
    <TextInputForm
      inputType={inputType}
      handleformsubmit={handleformsubmit}
      handleTextInputChange={handleTextInputChange}
      handleShowHideClick={handleShowHideClick}
    />
  );
}

export default TextInputFormContainer;
