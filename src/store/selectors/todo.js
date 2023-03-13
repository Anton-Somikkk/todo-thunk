const todoSelector = (store) => store.todo;

export const todosSelector = (store) => {
  console.log(store);
  return todoSelector(store)?.todos || [];
};

export const todosLoadingSelector = (store) => todoSelector(store)?.loading;

export const todosErrorSelector = (store) => todoSelector(store)?.error;

