<template>
	<header class="flex justify-between items-center w-full max-w-6xl mx-auto py-8 px-4">
		<router-link class="text-4xl font-semibold text-alpha opacity-75 hover:opacity-100" to="/">
			Countries Explorer
		</router-link>

		<nav class="flex">
			<router-link class="text-lg font-light" to="/">Home</router-link>
			<router-link class="text-lg font-light ml-8" to="/about">About</router-link>
		</nav>
	</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	setup() {
		return {};
	},
});
</script>
