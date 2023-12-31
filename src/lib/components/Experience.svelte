<script lang="ts">
	import ExperienceCell from './ExperienceCell.svelte';
</script>

<section>
	<h1>Experience</h1>
	<div class="experience">
		<ExperienceCell
			title={'Principle Software Engineer'}
			company={'Mode Analytics'}
			dates={'May 2021 - Present'}
			logo={'mode.png'}
			bullets={['I did this', 'I did that', 'I did some other stuff.']}
		></ExperienceCell>
	</div>
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

	.experience {
		display: flex;
		flex-direction: row;
	}

	h1 {
		text-align: center;
	}
</style>
