<script lang="ts">
	import { onMount } from 'svelte';
	import ArrowRight from '../images/arrowRight.png';
	import ArrowLeft from '../images/ArrowLeft.png';

	let carousel: HTMLElement;
	let scrollRightButton: HTMLElement;
	let scrollLeftButton: HTMLElement;
	let scrollIndex = 0;

	let childStarts: Array<number> = [];
	let childWidths: Array<number> = [];

	let canScrollLeft = false;
	let canScrollRight = false;

	function countChildren() {
		if (carousel != null) {
			childStarts = [];
			childWidths = [];
			for (let i = 0; i < carousel.children.length; i++) {
				const child = carousel.children[i] as HTMLElement;
				if (child !== scrollRightButton && child !== scrollLeftButton) {
					childStarts.push(child.offsetLeft);
					childWidths.push(child.offsetWidth);
				}
			}
		}
		// console.log(`Starts: ${childStarts}`);
	}

	function scrollRight() {
		const scrollDelta = carousel.clientWidth;
		const nextScrollPos = carousel.scrollLeft + scrollDelta;

		const lastVisibleChildIndex = childStarts.reduce((result, start, index) => {
			const childEndPos = start + childWidths[index];
			if (childEndPos <= nextScrollPos) {
				return index;
			}
			return result;
		}, 0);

		// Align to end of last visible
		const endPos = childStarts[lastVisibleChildIndex] + childWidths[lastVisibleChildIndex];
		carousel.scrollLeft = endPos;

		setCanScroll();
	}

	function scrollLeft() {
		// Find the first child which isn't fully visible
		const firstNonVisibleChildIndex = childStarts.reduce((result, start, index) => {
			if (start < carousel.scrollLeft) {
				return index;
			}
			return result;
		}, 0);

		// Find the start of the next child. That will be our end position
		const endPos = childStarts[firstNonVisibleChildIndex + 1];

		const scrollDelta = carousel.clientWidth;
		carousel.scrollLeft = endPos - scrollDelta;

		setCanScroll();
	}

	function setCanScroll() {
		// Determine if first/last item is fully visible

		canScrollLeft = carousel.scrollLeft >= childStarts[0];

		const lastChildIndex = childStarts.length - 1;
		const lastChildEnd = childStarts[lastChildIndex] + childWidths[lastChildIndex];
		canScrollRight = carousel.scrollLeft + carousel.clientWidth <= lastChildEnd;
	}

	// get size of static descendants here
	onMount(() => {
		countChildren();
		setCanScroll();
		window.addEventListener('resize', countChildren);
	});
</script>

<div class="carousel" bind:this={carousel}>
	{#if canScrollLeft}
		<button class="scroll-button scroll-left" bind:this={scrollLeftButton} on:click={scrollLeft}
			><img class="image-button" src={ArrowLeft} alt="Scroll left" /></button
		>
	{/if}
	{#if canScrollRight}
		<button class="scroll-button scroll-right" bind:this={scrollRightButton} on:click={scrollRight}
			><img class="image-button" src={ArrowRight} alt="Scroll right" /></button
		>
	{/if}
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
		transform: translateY(-50%);
		background: transparent;
		border: none;
		cursor: pointer;
	}

	.scroll-left {
		left: 0;
	}

	.scroll-right {
		right: 12px;
	}

	.image-button {
		width: 4vw;
	}
</style>
