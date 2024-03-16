import type { UnwrapNestedRefs, Ref } from "vue";
import type { SlidevContext } from "@slidev/client/modules/context";

declare global {
	// These will be injected in every component
	const $slidev: UnwrapNestedRefs<SlidevContext>;
	const $renderContext: Ref<string>;
}

declare module 'vue' {
	interface ComponentCustomProperties {
		$slidev: UnwrapNestedRefs<SlidevContext>;
		$renderContext: string;
	}
}

declare module '@slidev/types' {
	interface SlidevConfig {
		infoLine?: boolean;
		date?: string;
		author?: string;
	}
}
