<script lang="ts">
	import SkillChart from '$lib/components/SkillChart.svelte';

	let divWidth = 0;
	let divHeight = 0;
	let headerHeight = 0;

	$: chartWidth = divWidth * 0.65;
	$: chartHeight = divHeight * 0.8;
</script>

<section>
	<h1 bind:clientHeight={headerHeight}>Skills</h1>
	<div class="skills-content" bind:clientWidth={divWidth} bind:clientHeight={divHeight}>
		<SkillChart inputWidth={chartWidth} inputHeight={chartHeight}></SkillChart>
		<p class="skills-text">
			My skills are always evolving as I continue to learn new languages, libraries and techniques.
			I'm always seeking to improve and deepen my understanding of software engineering. My most
			current skills are honed toward my recent work responsibilities.
		</p>
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
		margin: 0 5vw;
	}

	.skills {
		display: flex;
		flex-direction: column;
		background-color: #3c3c3c;
		position: absolute;
		padding: 0 10vw 0 4vw;
		top: 3vh;
		bottom: 3vh;
		left: 3vw;
		right: 3vw;
		border: 2px solid #5a5a5a;
		border-radius: 1.5vw;
		box-shadow: 0.5vw 0.5vh 1.2vw 0 rgba(0, 0, 0, 0.8);
	}

	.skills-content {
		display: flex;
		flex-direction: row;
		height: 100%;
	}

	.skills-text {
		font-size: 2vh;
		margin-right: 5vw;
	}

	h1 {
		text-align: left;
		padding-left: 4vw;
	}
</style>
