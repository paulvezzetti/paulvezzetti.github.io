<script lang="ts">
    import Intro from "$lib/components/Intro.svelte";
    import About from "$lib/components/About.svelte";
    import './styles.css';
</script>

<svelte:head>
	<title>Paul Vezzetti</title>
	<meta name="description" content="Personal Page for Paul Vezzetti" />
</svelte:head>


<Intro></Intro>

<About></About>

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

