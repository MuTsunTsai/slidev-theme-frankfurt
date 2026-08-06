<template>
	<Frankfurt v-if="showTopNavigation" />
	<InfoLine v-if="$slidev.configs.infoLine ?? true" />
</template>

<script setup lang="ts">
	import { computed, watchEffect } from "vue";

	const showTopNavigation = computed(() => $slidev.configs.topNavigation ?? true);

	watchEffect(() => {
		document.documentElement.classList.toggle("frankfurt-no-top-nav", !showTopNavigation.value);
	});
</script>
