import TextInput from "../textInput/TextInput";
import Button from "../button/Button";

function TextInputForm({
  inputType,
  handleformsubmit,
  handleTextInputChange,
  handleShowHideClick,
}) {
  return (
    <form onSubmit={handleformsubmit}>
      <div>
        <TextInput
          type={inputType}
          label="Enter a word or a phrase"
          placeholder="Enter a word phrase here..."
          onChangeHandler={handleTextInputChange}
        />
      </div>

      <div>
        <Button
          styleType="warning"
          text={inputType === "password" ? "Show" : "Hide"}
          onClickHandler={handleShowHideClick}
        />
      </div>

      <div>
        <Button type="submit" styleType="primary" text="submit" />
      </div>
    </form>
  );
}

export default TextInputForm;
