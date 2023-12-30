<script lang="ts">
	import SkillChart from '$lib/components/SkillChart.svelte';

	let divWidth = 0;
	let divHeight = 0;
	let headerHeight = 0;

	$: chartWidth = divWidth * 0.75;
	$: chartHeight = divHeight * 0.8;
</script>

<section>
	<div class="skills">
		<h1 bind:clientHeight={headerHeight}>Skills</h1>
		<div class="skills-content" bind:clientWidth={divWidth} bind:clientHeight={divHeight}>
			<SkillChart inputWidth={chartWidth} inputHeight={chartHeight}></SkillChart>
			<p>
				My skills are always evolving as I continue to learn new languages and libraries. My most
				current skills are honed toward my current responsibilities.
			</p>
		</div>
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

	h1 {
		text-align: center;
	}
</style>
