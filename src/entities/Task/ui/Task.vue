<template>
	<div class="task-item">
		<div>
			<label class="task-checkbox">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="10"
					height="11"
					viewBox="0 0 10 11"
					fill="none"
				>
					<path
						d="M1 5L5 10.5L9.5 1"
						stroke="#134EC1"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<input type="checkbox" v-model="task.isDone"
			/></label>
		</div>
		<div class="task-description" :title="task.task">{{ task.task }}</div>
		<div v-if="task.isDone" class="task-status active">
			<span class="status"> Выполнено </span>
		</div>

		<div v-else class="task-status">
			<span class="status"> В работе </span>
		</div>

		<div>
			<small>{{ getFormatDate(task.createdAt) }}</small>
		</div>
	</div>
</template>

<script setup lang="ts">
import { TaskItem } from '../model'
import { getFormatDate } from '../../../shared/lib/formatDate'

type Props = {
	task: TaskItem
}

const { task } = defineProps<Props>()
</script>

<style>
.task-item {
	display: grid;
	grid-template-columns: 60px 1fr 150px 130px;
	padding: 20px;

	&:hover {
		box-shadow: 0px 2px 4px #00000040;
	}

	& div {
		padding: 0 20px;
	}
}

.task-status {
	color: var(--orange-color);

	&.active {
		color: var(--blue-color);
	}
}

.task-checkbox {
	width: 20px;
	height: 20px;
	border-radius: 100%;
	border: 1px solid #16191d;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	&:has(input:checked) {
		border: 1px solid var(--blue-color);
	}

	& input,
	& svg {
		display: none;
	}
}

.task-checkbox:has(input:checked) {
	border: 1px solid var(--blue-color);

	& svg {
		display: block;
	}
}

.task-description {
	max-width: 940px;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
