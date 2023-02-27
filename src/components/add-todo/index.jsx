import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../store/actions/thunks/todo";

import styles from "./index.module.css";

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const onInputChange = (evt) => {
    setValue(evt.target.value);
  };

  const handleAddTodo = () => {
    dispatch(createTodo(value));
    setValue("");
  };

  return (
    <div>
      <input type="text" value={value} onChange={onInputChange} />
      <button className={styles.addButton} onClick={handleAddTodo}>
        Add todo
      </button>
    </div>
  );
};