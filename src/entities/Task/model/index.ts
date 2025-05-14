export enum TaskStatus {
	InProgress = 'в работе',
	Completed = 'выполнено',
}

export interface TaskItem {
	id: number
	isDone: boolean
	task: string
	status: TaskStatus
	createdAt: string
}
