<script lang="ts">
	import Carousel from './Carousel.svelte';
	import ExperienceCell from './ExperienceCell.svelte';
	import { Experiences } from '$lib/data/experience';
</script>

<section>
	<h1>Experience</h1>
	<Carousel>
		{#each Experiences as experience}
			<ExperienceCell
				title={experience.title}
				company={experience.company}
				dates={experience.dates}
				logo={experience.logo}
				bullets={experience.bullets}
			></ExperienceCell>
		{/each}
	</Carousel>
</section>

<style>
	section {
		background-color: #2c2c2c;
		display: flex;
		flex-direction: column;
		height: 100vh;
		position: relative;
		scroll-snap-align: start;
	}

	h1 {
		text-align: center;
	}
</style>
