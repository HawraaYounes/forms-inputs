import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setNameIsValid(false);
      console.log("gggggggggggd")
      return;
    }
    console.log(enteredName);
    setNameIsValid(true);
  };

  const inputClasses = nameIsValid ? "form-control" : "form-control invalid";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      {!nameIsValid && <p className="error-text">Name should not be empty!</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
