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
  id: number;
  isDone: boolean;
  task: string;
};

export function ToDosProvider({ children }: any) {
  const [isDone, setIsDone] = useState(false);

  const initialState = [
    {
      id: 1,
      isDone: isDone,
      task: "Do shopping",
    },
    {
      id: 2,
      isDone: isDone,
      task: "Prepare dinner for the next day",
    },
    {
      id: 3,
      isDone: isDone,
      task: "Pick up parcel ",
    },
    {
      id: 4,
      isDone: isDone,
      task: "Clean house a little bit",
    },
  ];

  const [todos, setTodos] = useState<Task[]>(initialState);

  const value = { todos, setIsDone, setTodos };

  return <ToDosContext.Provider value={value}>{children}</ToDosContext.Provider>;
}

export default ToDosContext;
