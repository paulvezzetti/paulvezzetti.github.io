<script lang="ts">
	export let title: string;
	export let company: string;
	export let dates: string;
	export let logo: string;
	export let bullets: string[];

    $: imgUrl = new URL(`../images/${logo}`, import.meta.url).href;

</script>

<div class="outer-container">
	<div class="header">
        <img src="{imgUrl}" alt="{logo}" height="32px" width="32px">
		<div>
			<p class="title-text">{title}</p>
			<p class="sub-title-text">{company}</p>
			<p class="sub-title-text">{dates}</p>
		</div>
	</div>
	<div class="bullets-container">
		<ul>
			{#each bullets as bullet}
				<li>{bullet}</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.outer-container {
		display: flex;
		flex-direction: column;
		border: 1px solid #5a5a5a;
		border-radius: 1.5vw;
		box-shadow: 0.5vw 0.5vh 1.2vw 0 rgba(0, 0, 0, 0.8);
		width: 50vw;
	}

	.header {
        display: flex;
        flex-direction: row;
        column-gap: 1vw;
		height: 5vh;
		background: linear-gradient(to bottom, #083C99, #3671BE);
		padding: 2vh;
		border-top-left-radius: 1.5vw;
		border-top-right-radius: 1.5vw;
	}

	.title-text {
		font-weight: 600;
	}

	.sub-title-text {
		font-weight: 400;
	}

	.bullets-container {
		padding: 2vh;
		min-height: 30vh;
		background-color: #5a5a5a;
		border-bottom-left-radius: 1.5vw;
		border-bottom-right-radius: 1.5vw;
	}
</style>
