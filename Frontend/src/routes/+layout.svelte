<script>
	let isPageLoaded = false;
	import { onDestroy, onMount } from 'svelte';
	import LogoPopup from '$lib/Components/LogoPopup.svelte';
	import Navbar from '$lib/Components/Navbar.svelte';

	onMount(() => {
		setTimeout(() => {
			isPageLoaded = true;
		}, 1500);
	});
	onDestroy(() => {
		isPageLoaded = false;
	});
</script>

<div class="loader" class:fadeOut={isPageLoaded}>
	{#if !isPageLoaded}
		<LogoPopup />
	{/if}
</div>

<slot />
<Navbar />

<style>
	.loader {
		opacity: 1;
		transition: opacity 0.5s ease;
	}

	.fadeOut {
		opacity: 0;
	}
</style>
