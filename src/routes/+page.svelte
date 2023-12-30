<script lang="ts">
	import Intro from '$lib/components/Intro.svelte';
	import About from '$lib/components/About.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import './styles.css';
</script>

<svelte:head>
	<title>Paul Vezzetti</title>
	<meta name="description" content="Personal Page for Paul Vezzetti" />
</svelte:head>

<div class="scroller">
	<Intro></Intro>

	<About></About>

	<Skills></Skills>

	<section>
		<h1>Experience</h1>
	</section>
	<section>
		<h1>Projects</h1>
	</section>
	<section>
		<h1>Contact</h1>
	</section>
</div>

<style>
	section {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 100vh;
		scroll-snap-align: start;
	}

	h1 {
		width: 100%;
		color: #d3d3d3;
	}

	.scroller {
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
        height: 100vh;
	}
</style>
