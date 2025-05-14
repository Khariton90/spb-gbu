<template>
	<div class="container">
		<LayoutHeader>
			<OpenDialog @on-open="openDialog" />
		</LayoutHeader>
		<TaskSearch v-model:filter-name="filterName">
			<SortByDropdown v-model:sort-by="sortBy" />
		</TaskSearch>
		<TaskList
			:task-list="taskList"
			:filter-name="filterName"
			:sort-by="sortBy"
		/>
	</div>

	<dialog class="dialog" ref="dialogRef">
		<FormTask
			@add-task="handleNewTaskAdded"
			v-model:new-task-description="newTaskDescription"
		>
			<CloseDialog @on-close="closeDialog" />
		</FormTask>
	</dialog>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { TaskItem } from '../entities/Task/model'
import { TaskList } from '../widgets/TaskList'
import { mockTaskList } from '../entities/Task/api/taskList'
import { getTasksToLocalStorage } from '../entities/Task/lib/storage'
import { SortBy } from '../features/SortByDropdown/model/types'
import { LayoutHeader } from '../widgets/LayoutHeader'
import { SortByDropdown } from '../features/SortByDropdown'
import { TaskSearch } from '../features/TaskSearch'
import { OpenDialog } from '../features/OpenDialog'
import { CloseDialog } from '../features/CloseDialog'
import { FormTask } from '../widgets/FormTask'

const dialogRef = ref<any>(null)
const newTaskDescription = ref('')
const taskList = ref<TaskItem[]>([])
const filterName = ref('')
const sortBy = ref<SortBy>(SortBy.Date)

onMounted(() => {
	const storedTasks: TaskItem[] = getTasksToLocalStorage()
	if (!storedTasks.length) {
		return (taskList.value = mockTaskList)
	}
	taskList.value = storedTasks
})

const openDialog = () => {
	if (dialogRef.value) {
		dialogRef.value.showModal()
	}
}

const closeDialog = () => {
	if (dialogRef.value) {
		dialogRef.value.close()
	}
}

const handleNewTaskAdded = (newTask: TaskItem) => {
	filterName.value = ''
	taskList.value.push(newTask)
	newTaskDescription.value = ''
	closeDialog()
}
</script>
