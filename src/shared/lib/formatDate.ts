import dayjs from 'dayjs'

const FORMAT_DATE = 'DD.MM.YYYY'

export const getFormatDate = (date: string | Date) => {
	return dayjs(date).format(FORMAT_DATE)
}
