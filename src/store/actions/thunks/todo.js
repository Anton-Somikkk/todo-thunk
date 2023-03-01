import axios from 'axios';

import {
  fetchTodosStarted,
  fetchTodosSuccess,
  fetchTodosFailure,
  addTodoStarted,
  addTodoSuccess,
  addTodoFailure,
  toggleTodoStarted,
  toggleTodoSuccess,
  toggleTodoFailure,
} from '../creators/todo';

const BASE_URL = 'https://api.fake.rest/e00809e7-6d05-421f-9eff-ae304107cb56';

export const fetchTodos = () => async (dispatch) => {
  dispatch(fetchTodosStarted());

  try {
    const { data } = await axios.get(BASE_URL);

    dispatch(fetchTodosSuccess(data));
  } catch (error) {
    dispatch(fetchTodosFailure(error));
  }
};

export const createTodo = (title) => async (dispatch) => {
  dispatch(addTodoStarted());

  try {
    const { data } = await axios.post(BASE_URL, {
      title,
      completed: false,
    });

    dispatch(addTodoSuccess(data));
  } catch (error) {
    dispatch(addTodoFailure(error));
  }
};

export const toggleTodo = (id, completed, title) => async (dispatch) => {
  dispatch(toggleTodoStarted());

  try {
    const { data } = await axios.put(`${BASE_URL}/${id}`, {
      completed,
      id,
      title,
    });

    dispatch(toggleTodoSuccess(data));
  } catch (error) {
    dispatch(toggleTodoFailure(error));
  }
};
