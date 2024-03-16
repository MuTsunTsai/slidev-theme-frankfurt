import { ShikiSetupReturn, defineShikiSetup } from '@slidev/types/dist/index.mjs'

export default defineShikiSetup(async () => {
	return {
		theme: {
			dark: 'dark-plus',
			light: 'light-plus',
		},
	} as ShikiSetupReturn;
});
