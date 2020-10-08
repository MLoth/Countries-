<template>
	<HeaderBar />
	<router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderBar from '@/presentations/shared/components/HeaderBar.vue';

export default defineComponent({
	components: {
		HeaderBar,
	},

	setup() {
		return {};
	},
});
</script>

<style>
body,
html {
	@apply bg-white; /* tailwind directive */
}
</style>
