<template>
	<header class="absolute top-0 left-0 right-0 flex shadow-md shadow-black text-sm px-4 -mx-4" style="background:black">
		<div v-for="(sec, i) in sections" class="flex-1 py-1 px-3"
			 :class="sec[1].includes($slidev.nav.currentPage - 1) ? 'text-white' : 'text-stone'" :key="i">
			<div>{{ sec[0] || "&emsp;" }}</div>
			<div>
				<span v-for="p in sec[1]" :key="p">
					<Link :to="p + 1" style="color:unset">{{ $slidev.nav.currentPage == p + 1 ? "●" : "○" }}</Link>
				</span>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
	import { computed } from "vue";

	import type { SlideInfoBase } from "@slidev/types";

	const sections = computed(() => {
		const result: [string, number[]][] = [];
		let pages: number[] = [];
		let title = "";
		for(let i = 1; i < $slidev.nav.slides.length; i++) {
			const slide = $slidev.nav.slides[i];
			const section = (slide.meta?.slide as SlideInfoBase)?.frontmatter?.section;
			if(section && section != title) {
				if(pages.length > 0) result.push([title, pages]);
				pages = [];
				title = section;
			}
			pages.push(i);
		}
		result.push([title, pages]);
		return result;
	});
</script>