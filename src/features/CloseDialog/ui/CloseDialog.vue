<template>
	<button class="close-dialog" type="button" @click="handleClose">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="8"
			height="8"
			viewBox="0 0 8 8"
			fill="none"
		>
			<path
				d="M1 1L4 4M7 7L4 4M4 4L7 1M4 4L1 7"
				stroke="white"
				stroke-linecap="round"
			/>
		</svg>
	</button>
</template>

<script lang="ts" setup>
const emit = defineEmits(['onClose'])

const handleClose = () => {
	emit('onClose')
}
</script>

<style scoped>
.close-dialog {
	width: 22px;
	height: 22px;
	border: none;
	background-color: var(--blue-color);
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	font-size: 12px;
	cursor: pointer;
}
</style>
