import React, { useState } from 'react';
// import { useDispatch } from "react-redux";
// import { createTodo } from "../../store/actions/thunks/todo";
import { useAddTodoMutation } from '../../services/todo';
import styles from './index.module.css';

export const AddTodo = () => {
  // const dispatch = useDispatch();
  const [addTodo, { isLoading }] = useAddTodoMutation();

  const [value, setValue] = useState('');

  const onInputChange = (evt) => {
    setValue(evt.target.value);
  };

  const handleAddTodo = () => {
    // dispatch(createTodo(value));
    addTodo({
      title: value,
      completed: false,
    });
    setValue('');
  };

  return (
    <div>
      <input type="text" value={value} onChange={onInputChange} />
      <button
        className={styles.addButton}
        onClick={handleAddTodo}
        disabled={isLoading}
      >
        Add todo
      </button>
    </div>
  );
};
