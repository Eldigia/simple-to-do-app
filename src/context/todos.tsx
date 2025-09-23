import { useAtom } from "jotai";
import { createContext, useContext } from "react";
import { tasksConfigAtom } from "../store/tasksConfig";

type Task = {
  incompleted: {
    id: number;
    description: string;
  }[];
  completed: {
    id: number;
    description: string;
  }[];
};

type ContextValues = {
  tasks: Task;
  handleSetTasks({ id, isDone }: { id: number; isDone: boolean }): void;
  handleDeleteTask({ id, isDone }: { id: number; isDone: boolean }): void;
};

const ToDosContext = createContext({
  tasks: { incompleted: [], completed: [] },
  handleSetTasks: () => {},
  handleDeleteTask: () => {},
} as ContextValues);

export function useToDosContext() {
  return useContext(ToDosContext);
}

export function ToDosProvider({ children }: any) {
  const [tasks, setTasks] = useAtom(tasksConfigAtom);

  const handleSetTasks = ({ id, isDone }: { id: number; isDone: boolean }) => {
    const changedTask =
      tasks?.incompleted?.find((task) => task?.id === id) || tasks?.completed?.find((task) => task?.id === id);

    if (!changedTask?.id) return;

    if (isDone) {
      const filteredTasks = tasks?.incompleted?.filter((task) => task?.id !== id);
      const completedTasks = [changedTask, ...tasks.completed];

      setTasks({ incompleted: filteredTasks, completed: completedTasks });
    } else {
      const filteredTasks = tasks?.completed?.filter((task) => task?.id !== id);
      const incompletedTasks = [changedTask, ...tasks.incompleted];

      setTasks({ incompleted: incompletedTasks, completed: filteredTasks });
    }
  };

  const handleDeleteTask = ({ id, isDone }: { id: number; isDone: boolean }) => {
    if (isDone) {
      setTasks({ ...tasks, completed: tasks?.completed?.filter((task) => task?.id !== id) });
    } else {
      setTasks({ ...tasks, incompleted: tasks?.incompleted?.filter((task) => task?.id !== id) });
    }
  };

  const value = { tasks, handleSetTasks, handleDeleteTask };

  return <ToDosContext.Provider value={value}>{children}</ToDosContext.Provider>;
}

export default ToDosContext;
