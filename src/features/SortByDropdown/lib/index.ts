import dayjs from 'dayjs'
import { TaskItem } from '../../../entities/Task/model'
import { SortBy } from '../model/types'

export const getSortStatus = (status: SortBy, items: TaskItem[]) => {
	const resultItems = items.slice()

	if (status === SortBy.Date) {
		resultItems.sort((a, b) => {
			return dayjs(b.createdAt).diff(dayjs(a.createdAt))
		})
		return resultItems
	}

	if (status === SortBy.Status) {
		return resultItems.sort((a, b) => {
			if (!a.isDone) {
				return -1
			} else {
				return 1
			}
		})
	}

	return resultItems
}
