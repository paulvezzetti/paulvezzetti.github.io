<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let sections: Array<string> = [];
	export let selected = 'Experience';

	const dispatch = createEventDispatcher();

	function clickOn(section: string) {
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
			on:click={() => clickOn(section)}
		></button>
	{/each}
</div>

<style>
	.outer {
		display: flex;
		flex-direction: column;
		row-gap: 4px;
	}
	.circle {
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
		float: right;
		margin-right: 18px;
		margin-top: -2px;
	}

	.selected {
		background-color: rebeccapurple;
	}
</style>
