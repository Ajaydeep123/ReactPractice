import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false); //we're using this state, so that browser knows that, user has been to input field, he may or may not enter value, but he's touched it

  const enteredNameIsValid = enteredName.trim() !== '';   //if entered value is not empty, then valid
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;  // invalid when, value is empty and user hasn't touched the field

//overall formvalidation before submission

  let formIsValid = false; 

  if (enteredNameIsValid ) {    //enteredNameIsValid && all other properties :-> if they're valid only the set formIsValid to true and then enable form submission
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredName('');
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}   // when user moves away from the input field, it looses focus and we assume that he's entered the value, before he submits the wrong value, give warning.
          value={enteredName}
        />
        {/* if the input is invalid then return the paragraph */}
        {nameInputIsInvalid && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className='form-actions'>
        {/* if formIsValid = false, then disable the submit button */}
        <button disabled={!formIsValid}>Submit</button> 
      </div>
    </form>
  );
};

export default SimpleInput;