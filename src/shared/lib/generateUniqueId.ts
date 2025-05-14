function idGenerator(): () => number {
	let counter = new Date().getUTCMilliseconds()

	return function generateUniqueId(): number {
		return ++counter
	}
}

export const generateUniqueId = idGenerator()
