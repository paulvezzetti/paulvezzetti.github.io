<script lang="ts">
    import Intro from "$lib/components/Intro.svelte";
</script>

<svelte:head>
	<title>Paul Vezzetti</title>
	<meta name="description" content="Personal Page for Paul Vezzetti" />
</svelte:head>


<Intro></Intro>
<!-- <section class="intro">
    <h1>Intro</h1>
</section> -->
<section>
    <h1>About</h1>
</section>
<section>
    <h1>Skills</h1>
</section>
<section>
    <h1>Experience</h1>
</section>
<section>
    <h1>Projects</h1>
</section>
<section>
    <h1>Contact</h1>
</section>


<style>
	section {
        background-color: #2c2c2c;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
        height: 100vh;
	}

	h1 {
		width: 100%;
        color: #d3d3d3;
	}

</style>

