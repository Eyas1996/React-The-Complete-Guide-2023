import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+userAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(userName, userAge);
    setUserName("");
    setUserAge("");
  };

  const nameChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setUserAge(e.target.value);
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
            <input
              type="text"
              id="userName"
              onChange={nameChangeHandler}
              value={userName}
            />
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input
              type="number"
              id="age"
              onChange={ageChangeHandler}
              value={userAge}
            />
          </div>
          <Button type="submit"> Add User </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
