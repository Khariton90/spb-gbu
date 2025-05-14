import { TaskItem } from '../model'

const TASK_ITEMS = 'tasks'

export const saveTasksToLocalStorage = (items: TaskItem[]) => {
	localStorage.setItem(TASK_ITEMS, JSON.stringify(items))
}

export const getTasksToLocalStorage = (): TaskItem[] => {
	const items = localStorage.getItem(TASK_ITEMS)
	if (items) {
		return JSON.parse(items)
	}

	return []
}

export const clearTasksInLocalStorage = () => {
	localStorage.removeItem(TASK_ITEMS)
}
