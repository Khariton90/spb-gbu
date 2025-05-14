<template>
	<header class="header">
		<h1 class="title">To do list</h1>
		<slot />
	</header>
</template>

<style>
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 34px 0;
}
</style>
