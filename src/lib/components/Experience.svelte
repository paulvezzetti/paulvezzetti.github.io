<script lang="ts">
	import Carousel from './Carousel.svelte';
	import ExperienceCell from './ExperienceCell.svelte';
    import mode from '../images/mode.png';
    import jmp from '../images/jmp.png';
    import sas from '../images/sas.png';

</script>

<section>
	<h1>Experience</h1>
	<!-- <div class="experience"> -->
	<Carousel>
		<ExperienceCell
			title={'Senior Visualization Systems Engineer'}
			company={'Mode Analytics'}
			dates={'May 2021 - Present'}
			logo={mode}
			bullets={['I did this', 'I did that', 'I did some other stuff.']}
		></ExperienceCell>
		<ExperienceCell
			title={'Principle Software Engineer'}
			company={'JMP'}
			dates={'Jan 2019 - May 2021'}
			logo={jmp}
			bullets={['I did this', 'I did that', 'I did some other stuff.']}
		></ExperienceCell>
		<ExperienceCell
			title={'Principle Software Engineer'}
			company={'SAS Institute'}
			dates={'Dec 2004 - Jan 2019'}
			logo={sas}
			bullets={['I did this', 'I did that', 'I did some other stuff.']}
		></ExperienceCell>
	</Carousel>
	<!-- </div> -->
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

	.experience {
		display: flex;
		flex-direction: row;
	}

	h1 {
		text-align: center;
	}
</style>
