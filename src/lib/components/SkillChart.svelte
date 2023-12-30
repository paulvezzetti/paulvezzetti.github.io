<script lang="ts">
	import * as d3 from 'd3';
	import { onMount } from 'svelte';

	const skills: Array<{ skill: String; level: Number }> = [
		{ skill: 'Angular', level: 4 },
		{ skill: 'Typescript', level: 4 },
		{ skill: 'JavaScript', level: 4 },
		{ skill: 'HTML/CSS', level: 4 },
		{ skill: 'C/C++', level: 3 },
		{ skill: 'HTML/CSS', level: 4 },
		{ skill: 'GIT', level: 4 },
		{ skill: 'Svelte', level: 1 },
		{ skill: 'D3', level: 1 }
	];

	export let inputWidth = 0;
	export let inputHeight = 0;

	const marginTop = 20;
	const marginRight = 20;
	const marginBottom = 30;
	const marginLeft = 10;

	const tickLabels = ['None', 'Aware of', 'Beginner', 'Advanced', 'Expert'];
	const gradColors = ['#3671BE', '#2B64B5', '#1F57AC', '#1449A2', '#083C99'];

	let vis;

	onMount(() => {
		redraw();
		window.addEventListener('resize', redraw);
	});

	function redraw() {
		d3.select(vis).html(null);

		// Create the scales.
		const x = d3
			.scaleLinear()
			.domain([0, d3.max(skills, (skill: { skill: String; level: Number }) => skill.level) + 0.5])
			.range([marginLeft, inputWidth - marginRight]);

		const y = d3
			.scaleBand()
			.domain(d3.map(skills, (skill: { skill: String; level: Number }) => skill.skill))
			.rangeRound([marginTop, inputHeight - marginBottom])
			.padding(0.1);

		// Create the plot area
		const svg = d3
			.select(vis)
			.append('svg')
			.attr('width', inputWidth + marginLeft + marginRight)
			.attr('height', inputHeight + marginTop + marginBottom)
			.append('g')
			.attr('transform', `translate(${[marginLeft, marginTop]})`);

		// Generate gradients
		gradColors
			.forEach((color, index) => {
				var grad = svg
					.append('defs')
					.append('linearGradient')
					.attr('id', `grad${index}`)
					.attr('x1', '0%')
					.attr('x2', '100%')
					.attr('y1', '0%')
					.attr('y2', '0%');

				grad
					.selectAll('stop')
					.data([gradColors[0], color])
					.enter()
					.append('stop')
					.style('stop-color', function (d) {
						return d;
					})
					.attr('offset', function (d, i) {
						return 100 * i + '%';
					});
			});

		// Create the bars
		svg
			.append('g')
			// .attr('fill', '#67a1f9')
			.attr('stroke', '#f3f3f3')
			.selectAll()
			.data(skills)
			.join('rect')
			.attr('x', x(0))
			.attr('y', (d) => y(d.skill))
			.attr('width', (d) => x(d.level) - x(0))
			.attr('height', y.bandwidth())
			.style('fill',(d) => `url(#grad${d.level})`);

		// Append a label for each skill.
		svg
			.append('g')
			.attr('fill', '#d3d3d3')
			.attr('text-anchor', 'start')
			.selectAll()
			.data(skills)
			.join('text')
			.attr('x', x(0))
			.attr('y', (d) => y(d.skill) + y.bandwidth() / 2)
			.attr('dy', '0.35em')
			.attr('dx', 16)
			.text((d) => d.skill);

		// Create the x-axis
		svg
			.append('g')
			.attr('transform', `translate(0,${inputHeight - marginBottom})`)
			.attr('color', '#d3d3d3')
			.call(
				d3
					.axisBottom(x)
					.ticks(5)
					.tickFormat((d, i) => tickLabels[d])
			)
			.call((g) => g.select('.domain').remove());

		// Create the y-axis
		// svg
		// 	.append('g')
		// 	.attr('transform', `translate(${marginLeft},0)`)
		// 	.attr('color', '#d3d3d3')
		// 	.call(d3.axisLeft(y).tickSizeOuter(0));
	}
</script>

<div id="vis" bind:this={vis}></div>
