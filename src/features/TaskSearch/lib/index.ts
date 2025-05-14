import { TaskItem, TaskStatus } from '../../../entities/Task/model'
import { getFormatDate } from '../../../shared/lib/formatDate'

export const getFilteredTaskList = (filter: string, list: TaskItem[]) => {
	const nameToLowerCase = filter.toLowerCase()

	if (nameToLowerCase === TaskStatus.Completed) {
		return list.filter((item: TaskItem) => item.isDone)
	}

	if (nameToLowerCase === TaskStatus.InProgress) {
		return list.filter(item => !item.isDone)
	}

	return list.filter(item => {
		const itemToLowerCase = item.task.toLocaleLowerCase()
		const matchesName = itemToLowerCase.includes(nameToLowerCase)

		const itemDate = getFormatDate(item.createdAt)
		const matchesDate = itemDate.includes(filter)
		return matchesName || matchesDate
	})
}
