
import React from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";

import { toggleTodo } from "../../store/actions/thunks/todo";

import styles from './index.module.css';

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleTodoItem = () => {
     dispatch(toggleTodo(todo.id, !todo.completed));
  }

  return (
    <li className={styles.item} onClick={toggleTodoItem}>
      {todo.completed ? "👌" : "👋"}{" "}
      <span
        className={cx({
          [styles.completed]: todo.completed,
        })}
      >
        {todo.title}
      </span>
    </li>
  );
};