<template>
	<button class="add-task-btn" @click="handleOpen"></button>
</template>

<script lang="ts" setup>
const emit = defineEmits(['onOpen'])

const handleOpen = () => {
	emit('onOpen')
}
</script>

<style scoped>
.add-task-btn {
	width: 40px;
	height: 40px;
	border-radius: 100%;
	border: 1px solid var(--blue-color);
	background-color: var(--light-blue-color);
	position: relative;
	cursor: pointer;

	&::after,
	&::before {
		content: '';
		position: absolute;
		width: 20px;
		height: 2px;
		background-color: var(--blue-color);
		left: 9px;
		top: 19px;
	}
	&::before {
		rotate: 90deg;
	}
}
</style>
