import type { ToDoTask } from '../../../types'

export const createNewTask = (taskTitle: string): ToDoTask => {
  return {
    id: String(Date.now()),
    title: taskTitle,
    status: 'incomplete',
  }
}
