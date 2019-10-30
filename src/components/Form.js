import React from "react";
import useControlledComponent from '../hooks/useControlledComponent'

const Form = () => {
  const [firstName, setFirstName, onFirstNameChange] = useControlledComponent('')
  const [lastName, setLastName, onLastNameChange] = useControlledComponent('')

  return (
    <form>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" value={firstName} onChange={onFirstNameChange} />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" value={lastName} onChange={onLastNameChange} />
      </div>
    </form>
  );
}

export default Form;
