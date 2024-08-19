import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  let formIsVaid;

  if (enteredNameIsValid) {
    formIsVaid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const inputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">Name should not be empty!</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsVaid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
