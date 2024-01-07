<script lang="ts">
	import { Projects, type Project } from '$lib/data/projects';
    import { onMount } from 'svelte';

	let selectedProject: Project | undefined;

	function onProjectSelect(projectId: number) {
		selectedProject = Projects.find((p) => p.id === projectId);
	}

    onMount(() => {
        selectedProject = Projects[0];
    })

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
            <img src={selectedProject?.screenshot} alt="screenshot" class="screenshot">
            <div class="project-description">
                <p>{selectedProject?.title ?? 'Missing Title'}</p>
                <p>{@html selectedProject?.description}</p>
            </div>
		</div>
	</div>

	<!-- <Carousel>
		{#each Projects as project}
			<ProjectCell
				title={project.title}
				owner={project.owner}
				date={project.date}
				link={project.link}
				description={project.description}
			></ProjectCell>
		{/each}
	</Carousel> -->
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
		border-bottom: 1px solid #999999;
	}

	.project-button:active {
		border-bottom: 1px solid #cfcfcf;
	}

	.project-button.selected {
        color: #cfcfcf;
		font-weight: 600;
	}

	.project-details {
        display: flex;
        flex-direction: row;
        column-gap: 3vw;
        padding: 0.5vw 3vw;
		color: #333333;
	}

    .screenshot {
        height: 6vh;
        border-radius: 12px;
    }
</style>
