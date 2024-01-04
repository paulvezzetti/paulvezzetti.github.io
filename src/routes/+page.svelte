<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Intro from '$lib/components/Intro.svelte';
	import SectionScroller from '$lib/components/SectionScroller.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import './styles.css';

	let scroller: HTMLElement | undefined;
	let sections = ['Intro', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];
	let selectedSection = sections[0];

	function changeSection(event) {
		const section = event.detail.section;
		console.log('Handled section change: ' + section);
		selectedSection = sections.find((s) => s === section) ?? section;

		const sectionIndex = sections.indexOf(section);
		if (sectionIndex >= 0 && scroller != null) {
			const scrollPos = sectionIndex * scroller.clientHeight;
			// scroller.scrollTop = scrollPos;
			scroller.scrollTo({
                top: scrollPos,
                left: 0,
				behavior: 'smooth'
			});
		}
	}
</script>

<svelte:head>
	<title>Paul Vezzetti</title>
	<meta name="description" content="Personal Page for Paul Vezzetti" />
</svelte:head>

<div class="scroller" bind:this={scroller}>
	<Intro></Intro>

	<About></About>

	<Skills></Skills>

	<Experience></Experience>
	<section>
		<h1>Projects</h1>
	</section>
	<section>
		<h1>Contact</h1>
	</section>
	<div class="main-scroller">
		<SectionScroller {sections} selected={selectedSection} on:setSection={changeSection}
		></SectionScroller>
	</div>
</div>

<style>
	section {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 100vh;
		scroll-snap-align: start;
	}

	h1 {
		width: 100%;
		color: #d3d3d3;
	}

	.scroller {
		overflow-y: scroll;
		overflow-x: hidden;
		scroll-snap-type: y mandatory;
		height: 100vh;
	}

	.main-scroller {
		position: absolute;
		top: 50%;
		right: 40px;
	}
</style>
