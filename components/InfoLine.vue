<template>
	<footer class="absolute bottom-0 left-0 right-0 flex text-center text-white">
		<div class="flex-1 p-1" style="background:#191959">
			{{ $slidev.configs.author || "Unknown author" }}
		</div>
		<div class="flex-1 p-1" style="background:#262686">
			{{ $slidev.configs.title || "Unknown title" }}
		</div>
		<div class="flex-1 p-1" style="background:#3333B3">
			<div class="float-right">
				<SlideCurrentNo /> /
				<SlidesTotal />
			</div>
			{{ $slidev.configs.date || new Date().toLocaleDateString() }}
		</div>
	</footer>
</template>
