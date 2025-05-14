import dayjs from 'dayjs'
import { TaskItem, TaskStatus } from '../model'
import { generateUniqueId } from '../../../shared/lib/generateUniqueId'

export const mockTaskList: TaskItem[] = [
	{
		id: generateUniqueId(),
		isDone: true,
		task: 'Размещение новостей на сайте',
		status: TaskStatus.Completed,
		createdAt: dayjs('2022-04-22').toISOString(),
	},
	{
		id: generateUniqueId(),
		isDone: false,
		task: 'Внедрить Wi.fi для читателей',
		status: TaskStatus.InProgress,
		createdAt: dayjs('2022-04-22').toISOString(),
	},
	{
		id: generateUniqueId(),
		isDone: true,
		task: 'Отредактировать раздел “Доступная среда”',
		status: TaskStatus.Completed,
		createdAt: dayjs('2022-04-22').toISOString(),
	},
	{
		id: generateUniqueId(),
		isDone: false,
		task: 'Презентация “Информационные технологии”',
		status: TaskStatus.InProgress,
		createdAt: dayjs('2022-04-22').toISOString(),
	},
	{
		id: generateUniqueId(),
		isDone: false,
		task: 'Счётчики — внедрить дизайн',
		status: TaskStatus.InProgress,
		createdAt: dayjs('2022-04-22').toISOString(),
	},
	{
		id: generateUniqueId(),
		isDone: false,
		task: 'Сверстать новый layout',
		status: TaskStatus.InProgress,
		createdAt: dayjs('2022-04-22').toISOString(),
	},
	{
		id: generateUniqueId(),
		isDone: true,
		task: 'Скролл в новостях',
		status: TaskStatus.Completed,
		createdAt: dayjs('2022-04-22').toISOString(),
	},
	{
		id: generateUniqueId(),
		isDone: false,
		task: 'Форма сброса пароля',
		status: TaskStatus.InProgress,
		createdAt: dayjs('2022-04-22').toISOString(),
	},
	{
		id: generateUniqueId(),
		isDone: true,
		task: 'Внедрение модуля Chat',
		status: TaskStatus.Completed,
		createdAt: dayjs('2022-04-22').toISOString(),
	},
]
