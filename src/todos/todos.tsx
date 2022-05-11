import { createContext, useContext, useState } from "react";

const ToDosContext = createContext({});

export function useToDosContext() {
  return useContext(ToDosContext);
}

export function ToDosProvider({ children }: any) {
  const [isDone, setIsDone] = useState(false);

  const initialState = [
    {
      isDone: isDone,
      task: "Do shopping",
    },
    {
      isDone: isDone,
      task: "Clean house a little bit",
    },
    {
      isDone: isDone,
      task: "Prepare for date",
    },
    {
      isDone: isDone,
      task: "Go to hairdresser",
    },
  ];

  const [todos, setTodos] = useState(initialState);

  const value = { todos, setIsDone, setTodos };

  return <ToDosContext.Provider value={value}>{children}</ToDosContext.Provider>;
}

export default ToDosContext;
