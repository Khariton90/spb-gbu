<template>
	<section class="tasks-section">
		<div class="tasks-table-header">
			<div></div>
			<div>Описание</div>
			<div>Статус</div>
			<div>Дата</div>
		</div>

		<div class="tasks-table-body" v-if="taskList.length">
			<Task v-for="item of sortedFilteredItems" :task="item" :key="item.id" />
		</div>
		<div class="tasks-table-body" v-else>
			<h2>Результатов нет</h2>
		</div>
	</section>
</template>

<script lang="ts" setup>
import { TaskItem } from '../../../entities/Task/model'
import { Task } from '../../../entities/Task'
import { computed, watch } from 'vue'
import { getFilteredTaskList } from '../../../features/TaskSearch/lib'
import { getSortStatus } from '../../../features/SortByDropdown/lib'
import { SortBy } from '../../../features/SortByDropdown/model/types'

type Props = {
	taskList: TaskItem[]
	filterName: string
	sortBy: SortBy
}

const { taskList, filterName, sortBy } = defineProps<Props>()

const filteredItems = computed(() => {
	return getFilteredTaskList(filterName, taskList)
})

const sortedFilteredItems = computed(() => {
	return getSortStatus(sortBy, filteredItems.value)
})

watch(
	() => taskList,
	newValue => {
		if (newValue.length) {
			localStorage.setItem('tasks', JSON.stringify(newValue))
		}
	},
	{ deep: true }
)
</script>

<style scoped lang="css">
.tasks-table-header {
	display: grid;
	grid-template-columns: 60px 1fr 150px 130px;
	padding: 20px;
	width: 100%;

	& div {
		padding: 0 20px;
	}

	& div:not(:last-child) {
		border-right: 1px solid #c4c4c4;
	}
}
</style>
