import { atomWithStorage } from "jotai/utils";

type Task = {
  id: number;
  description: string;
};

const initialTasks: {
  incompleted: Task[];
  completed: Task[];
} = {
  incompleted: [
    {
      id: 1,
      description: "Do shopping",
    },
    {
      id: 2,
      description: "Prepare dinner for the next day",
    },
    {
      id: 3,
      description: "Pick up parcel ",
    },
    {
      id: 4,
      description: "Clean house a little bit",
    },
  ],
  completed: [],
};

export const tasksConfigAtom = atomWithStorage("tasks", initialTasks, undefined, {
  getOnInit: true,
});
