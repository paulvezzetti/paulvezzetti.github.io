<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let sections: Array<string> = [];
	export let selected = 'Experience';

	const dispatch = createEventDispatcher();

	function clickOn(section: string) {
		console.log(`Clicked on ${section}`);
		dispatch('setSection', {
			section: section
		});
	}
</script>

<div class="outer">
	{#each sections as section, index}
		<button
			class="circle {section === selected ? 'selected' : ''}"
            data-section={section}
			style="top:{index * 20}px"
			on:click={() => clickOn(section)}
		></button>
		<!-- <p>{section}</p> -->
	{/each}
</div>

<style>
	.outer {
		position: relative;
	}
	.circle {
		position: absolute;
		height: 16px;
		width: 16px;
		border: 3px solid #c7c7c7;
		border-radius: 10px;
		background: transparent;
		padding: 0;
		cursor: pointer;
	}
	.circle:hover::before {
		content: attr(data-section);
		color: #c7c7c7;
		position: absolute;
		right: 18px;
		top: -2px;
	}

	.selected {
		background-color: rebeccapurple;
	}
</style>
