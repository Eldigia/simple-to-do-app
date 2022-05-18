import { createContext, useContext, useState } from "react";

type ContextValues = {
  todos: Task[];
  setTodos(todos: Task[]): void;
};

const ToDosContext = createContext({
  todos: [],
  setTodos: () => {},
} as ContextValues);

export function useToDosContext() {
  return useContext(ToDosContext);
}

type Task = {
  isDone: boolean;
  task: string;
};

export function ToDosProvider({ children }: any) {
  const [isDone, setIsDone] = useState(false);

  const initialState = [
    {
      isDone: isDone,
      task: "Do shopping",
    },
    {
      isDone: isDone,
      task: "Prepare dinner for the next day",
    },
    {
      isDone: isDone,
      task: "Pick up parcel ",
    },
    {
      isDone: isDone,
      task: "Clean house a little bit",
    },
  ];

  const [todos, setTodos] = useState<Task[]>(initialState);

  const value = { todos, setIsDone, setTodos };

  return <ToDosContext.Provider value={value}>{children}</ToDosContext.Provider>;
}

export default ToDosContext;
