<template>
	<label for="sort-by" class="sort-by">
		<span>Сортировать по:</span>
		<select
			name="sort-by"
			:value="sortBy"
			id="sort-by"
			@change="handleChange($event)"
		>
			>
			<option :value="SortBy.Date">Дата</option>
			<option :value="SortBy.Status">Статус</option>
		</select>
	</label>
</template>

<script lang="ts" setup>
import { SortBy } from '../model/types'

type Props = {
	sortBy: SortBy
}

const { sortBy } = defineProps<Props>()
const emit = defineEmits(['update:sortBy'])

const handleChange = (event: Event) => {
	const target = event.target as HTMLElement & { value: SortBy }

	if ('value' in target) {
		emit('update:sortBy', target.value)
	}
}
</script>

<style scoped>
.sort-by {
	display: flex;
	align-items: center;
	gap: 15px;

	& select {
		border: none;
		background-color: transparent;
	}
}
</style>
