<script lang="ts">
	const paragraphs = [
		' ...That lead me to my original degree in Mechanical Engineering and has continued through a lifetime of woodworking, home improvement projects, photography and, most importantly, Software Engineering.',
		'In my early career, writing code was a tool. I could use it to solve a problem or be more productive. Over time, software became my best outlet for producing tangible products that reached real people. ',
		"Initially, I moved from hardware production to software testing. Later, I provided development customer support and saw, first-hand, how providing customers were using our software and my fixes. I've now been in Software Engineering for over 20 years. I love the feeling of seeing customers use features that I've developed.",
        "For the past 15 years, I've been working in Data Visualization and Business Intelligence software. I've built web-based data exploration tools from the ground up, built data visualization components, worked on a desktop statistical analysis tool and everything in between. Along the way, I've written code in Java, JavaScript/TypeScript, ActionScript, C/C++, Python, etc. along with a host of libraries."
	];
</script>

<section>
	<div class="about">
		<h1>About me</h1>
		<p class="lead-text">I like to make <span style="font-style:italic">things...</span> </p>
        {#each paragraphs as para}
            <p class="main-text">{para}</p>
        {/each}
	</div>
</section>

<style>
	section {
		background-color: #2c2c2c;
		display: flex;
		flex-direction: column;
		height: 100vh;
		position: relative;
	}

	.about {
		display: flex;
		flex-direction: column;
		background-color: #3c3c3c;
		position: absolute;
        padding: 0 10vw 0 4vw;
		top: 3vh;
		bottom: 3vh;
		left: 3vw;
		right: 3vw;
		border: 2px solid #5a5a5a;
		border-radius: 1.5vw;
		box-shadow: 0.5vw 0.5vh 1.2vw 0 rgba(0, 0, 0, 0.8);
	}

	h1 {
		text-align: center;
	}

    p {
        font-size: 3vh;
        letter-spacing: 1px;
        margin: 1vh 0;
    }

    .lead-text {
        color: #bdd7ff;
    }

    .main-text {

    }
</style>
