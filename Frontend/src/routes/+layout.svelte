<script>
	let isPageLoaded = false;
	import { onDestroy, onMount } from 'svelte';
	import LogoPopup from '$lib/Components/LogoPopup.svelte';
	import Navbar from '$lib/Components/Navbar.svelte';
	import Header from '$lib/Components/Header.svelte';

	onMount(() => {
		setTimeout(() => {
			isPageLoaded = true;
		}, 1500);
	});
	onDestroy(() => {
		isPageLoaded = false;
	});
</script>

<!-- {#if !isPageLoaded}
	<div class="loader" class:fadeOut={isPageLoaded}>
		<LogoPopup />
	</div>
{/if} -->
<Header />
<div class="slot">
	<slot />
</div>
<Navbar />

<style>
	/* .loader {
		opacity: 1;
		transition: opacity 0.5s ease;
	}

	.fadeOut {
		opacity: 0;
	} */
	.slot {
		margin-bottom: 10vh;
		margin-top: 9.4vh;
	}
</style>
