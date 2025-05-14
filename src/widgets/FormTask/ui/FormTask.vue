<template>
	<form class="form-dialog" autocomplete="off" @submit.prevent="handleSubmit">
		<div class="form-header">
			<p class="form-title">Создать новую задачу</p>
			<slot />
		</div>
		<label for="task" class="form-label">
			<span>Описание</span>
			<br />
			<input
				class="form-field"
				type="text"
				name="task"
				id="task"
				:value="newTaskDescription"
				placeholder="Введите описание"
				@input="handleChange($event)"
			/>
		</label>

		<button class="add-task-button">Создать</button>
	</form>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import { TaskStatus } from '../../../entities/Task/model'
import { generateUniqueId } from '../../../shared/lib/generateUniqueId'

type Props = {
	newTaskDescription: string
}

const { newTaskDescription } = defineProps<Props>()
const emit = defineEmits(['update:newTaskDescription', 'add-task'])

const handleSubmit = () => {
	if (!newTaskDescription) {
		return
	}

	const newTask = {
		status: TaskStatus.InProgress,
		isDone: false,
		task: newTaskDescription,
		id: generateUniqueId(),
		createdAt: dayjs().toISOString(),
	}
	emit('add-task', newTask)
}

const handleChange = (event: Event) => {
	const target = event.target as HTMLElement & { value: string }

	if ('value' in target) {
		emit('update:newTaskDescription', target.value)
	}
}
</script>

<style scoped>
.form-dialog {
	display: flex;
	flex-direction: column;
	gap: 30px;
}

.form-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: 700;
	font-size: 18px;
}

.add-task-button {
	padding: 12px 40px;
	font-size: 18px;
	color: var(--blue-color);
	cursor: pointer;
}

.form-field {
	padding: 11px 16px;
	border: 1px solid var(--border-color);
	border-radius: 8px;
	width: 100%;
}
</style>
