<template>
	<div class="item">
		<header v-if="title">{{ title }}</header>
		<main>
			<slot></slot>
		</main>
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		title?: string;
	}>();
</script>
