<script lang="ts">
	import { Projects, type Project } from '$lib/data/projects';
	import { onMount } from 'svelte';
	import link from '../images/link.svg';
	import link_hover from '../images/link_hover.svg';

	let selectedProject: Project | undefined;
	let linkSrc: typeof link | typeof link_hover = link;

	function onProjectSelect(projectId: number) {
		selectedProject = Projects.find((p) => p.id === projectId);
	}

	onMount(() => {
		selectedProject = Projects[0];
	});
</script>

<section>
	<h1>Projects</h1>
	<div class="dual-pane">
		<div class="project-list">
			{#each Projects as project (project.id)}
				<button
					class="project-button {project.id === selectedProject?.id ? 'selected' : ''}"
					on:click={() => onProjectSelect(project.id)}>{project.title}</button
				>
			{/each}
		</div>
		<div class="project-details">
			<img src={selectedProject?.screenshot} alt="screenshot" class="screenshot" />
			<div class="project-description">
					<p><span>{selectedProject?.owner}</span> : {selectedProject?.date}
					<a
						href={selectedProject?.link}
						on:mouseenter={() => (linkSrc = link_hover)}
						on:mouseleave={() => (linkSrc = link)}
						><img src={linkSrc} alt="link" class="link-icon" /></a
					></p>
				<p>{@html selectedProject?.description}</p>
			</div>
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
		margin: 0 5vw;
	}

	h1 {
		text-align: left;
		padding-left: 4vw;
	}

	.dual-pane {
		display: grid;
		grid-template-columns: auto 1fr;
	}

	.link-icon {
		height: 16px;
		width: 16px;
	}

	.project-list {
		display: flex;
		flex-direction: column;
		row-gap: 1vh;
	}

	.project-button {
		background: transparent;
		border: none;
		border-bottom: 1px solid transparent;
		color: #9a9a9a;
		text-align: left;
		padding: 1vh 1vw;
		margin-left: 8px;
	}

	.project-button:hover {
		border-bottom: 1px solid #6d6d6d;
	}

	.project-button:active {
		border-bottom: 1px solid #cfcfcf;
	}

	.project-button.selected {
		color: #cfcfcf;
		font-weight: 600;
		border-bottom: 1px solid #999999;
	}

	.project-details {
		display: flex;
		flex-direction: row;
		column-gap: 3vw;
		padding: 0.5vw 5vw;
		color: #333333;
	}

	.screenshot {
		height: 6vh;
		border-radius: 12px;
	}
</style>
