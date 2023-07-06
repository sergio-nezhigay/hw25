import React from "react";
import { nanoid } from "nanoid";
import "./Form.css";

export default function Form({ isOpen, onCancel, addContact }) {
  const onSubmit = (e) => {
    e.preventDefault();
    addContact({
      id: nanoid(),
      name: e.target.name.value,
      username: e.target.username.value,
      phone: e.target.phone.value,
    });
    e.target.reset();
  };

  return (
    <>
      {isOpen && (
        <div className="formContainer">
          <form onSubmit={onSubmit}>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="username" placeholder="Surname" />
            <input type="text" name="phone" placeholder="Number" />
            <div className="buttonContainer">
              <button type="submit">Submit</button>
              <button type="button" onClick={onCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
