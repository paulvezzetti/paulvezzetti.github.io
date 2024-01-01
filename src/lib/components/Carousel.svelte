<script lang="ts">
	import { onMount } from 'svelte';
	import ArrowRight from '../images/arrowRight.png';
	import ArrowLeft from '../images/ArrowLeft.png';

	let carousel;
	let scrollRightButton;
	let scrollLeftButton;
	let scrollIndex = 0;

	let childStarts: Array<number> = [];
	let childWidths: Array<number> = [];

	function countChildren() {
		if (carousel != null) {
			childStarts = [];
			childWidths = [];
			for (let i = 0; i < carousel.children.length; i++) {
				const child = carousel.children[i];
				if (child !== scrollRightButton && child !== scrollLeftButton) {
					childStarts.push(child.offsetLeft);
					childWidths.push(child.offsetWidth);
				}
			}
		}
		// console.log(`Starts: ${childStarts}`);
	}

	function scrollRight() {
		console.log('ScrollRight');
		if (scrollIndex < childStarts.length - 1) {
			scrollIndex += 1;
			const scrollPos = childStarts[scrollIndex];
			console.log(`Scrolling to item ${scrollIndex} at pos:  ${scrollPos}`);
			carousel.scrollLeft = scrollPos;
		} else {
			scrollIndex = 0;
			carousel.scrollLeft = 0;
		}
	}

    function scrollLeft() {

    }

	// get size of static descendants here
	onMount(countChildren);

	// get slot size (and static descendants) here
	// afterUpdate(countChildren);
</script>

<div class="carousel" bind:this={carousel}>
	<button class="scroll-button scroll-right" bind:this={scrollRightButton} on:click={scrollRight}
		><img class="image-button" src={ArrowRight} alt="Scroll right" /></button
	>
	<button class="scroll-button scroll-left" bind:this={scrollLeftButton} on:click={scrollLeft}
		><img class="image-button" src={ArrowLeft} alt="Scroll left" /></button
	>
	<slot />
</div>

<style>
	.carousel {
		display: flex;
		flex-direction: row;
		column-gap: 6vw;
		padding: 0 6vw;
		overflow: hidden;
	}

    .scroll-button {
		position: absolute;
		top: 50%;
		background: transparent;
		border: none;
        cursor: pointer;

    }

    .scroll-left {
        left: 0;
    }
    
	.scroll-right {
		right: 0;
	}

	.image-button {
		width: 5vw;
	}
</style>
