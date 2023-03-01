import {
  FETCH_TODOS_STARTED,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  ADD_TODO_STARTED,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  TOGGLE_TODO_STARTED,
  TOGGLE_TODO_SUCCESS,
  TOGGLE_TODO_FAILURE,
} from '../actions/types/todo';

const initialState = {
  loading: false,
  error: null,
  todos: [],
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS_STARTED: {
      return {
        ...state,
        loading: true,
      };
    }

    case FETCH_TODOS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        todos: [...action.payload.todos],
      };
    }

    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case ADD_TODO_STARTED:
      return {
        ...state,
        loading: true,
      };

    case ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        todos: [...state.todos, action.payload],
      };

    case ADD_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case TOGGLE_TODO_STARTED:
      return {
        ...state,
        loading: true,
      };

    case TOGGLE_TODO_SUCCESS:
      const todosCopy = state.todos.slice();
      const targetTodoId = action.payload.todo.id;
      const targetTodo = todosCopy.find((todo) => todo.id === targetTodoId);

      targetTodo.completed = action.payload.todo.completed;

      return {
        ...state,
        loading: false,
        error: null,
        todos: todosCopy,
      };

    case TOGGLE_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
