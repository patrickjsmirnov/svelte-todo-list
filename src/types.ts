export type ToDoTaskStatus = "complete" | "incomplete";

export type ToDoTask = {
  id: string;
  title: string;
  status: ToDoTaskStatus;
};
