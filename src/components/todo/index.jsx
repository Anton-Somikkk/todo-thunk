import React from 'react';
// import { useDispatch } from "react-redux";
import cx from 'classnames';
import { useUpdateTodoMutation } from '../../services/todo';
// import { toggleTodo } from "../../store/actions/thunks/todo";

import styles from './index.module.css';

export const Todo = ({ todo }) => {
  // const dispatch = useDispatch();
  const [updateTodo, { isLoading }] = useUpdateTodoMutation();
  const { id, title, completed } = todo;

  const toggleTodoItem = () => {
    // dispatch(toggleTodo(todo.id, !todo.completed, todo.title));
    updateTodo({ id, completed: !completed });
  };

  return (
    <li
      className={cx(styles.item, {
        [styles.loading]: isLoading,
      })}
      onClick={toggleTodoItem}
    >
      {completed ? '👌' : '👋'}{' '}
      <span
        className={cx({
          [styles.completed]: completed,
        })}
      >
        {title}
      </span>
    </li>
  );
};

// <li className={styles.item} onClick={toggleTodoItem}>
//   {todo.completed ? '👌' : '👋'}{' '}
//   <span
//     className={cx({
//       [styles.completed]: todo.completed,
//     })}
//   >
//     {todo.title}
//   </span>
// </li>
