import React, { useState, useRef } from "react";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHamdler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHamdler}
        />
      )}
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes["input-group"]}>
            <label htmlFor="userName">Username</label>
            <input type="text" id="userName" ref={nameInputRef} />
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input type="number" id="age" ref={ageInputRef} />
          </div>
          <Button type="submit"> Add User </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
