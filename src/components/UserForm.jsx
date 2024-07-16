import React, { useEffect, useRef, useState } from "react";
import useInput from "../hooks/useInput";

const UserForm = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(` user is ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input ref={inputRef} type="text" {...bindFirstName} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" {...bindLastName} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default UserForm;
