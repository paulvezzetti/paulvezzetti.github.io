<script lang="ts"></script>

<section class="intro">
	<div class="main-block">
		<p class="subtle">Hello! My name is</p>
		<p class="attention">Paul Vezzetti</p>
	</div>
    <div class="detail">
        <div class="left-bar"></div>
        <p class="long-text">
            I am a Front-End software engineer specializing in Data Visualization for Business
            Intelligence and Data Exploration applications.
        </p>
    </div>
</section>

<style>
	section {
		background-color: #2c2c2c;
		display: flex;
        flex-direction: column;
		height: 100vh;
        scroll-snap-align: start;
	}

	.intro {
        position: relative;
		background-image: url('../images/abstract-background.png');
		background-size: cover;
        scroll-snap-align: start;
	}

	.main-block {
		margin-left: 10vw;
        margin-top: 5vh;
		display: flex;
		flex-direction: column;
	}

	.subtle {
        font-family: 'Courier New', Courier, monospace;
		font-size: 1.6vw;
	}

	.attention {
		font-size: 10vw;
	}

    .detail {
        display: flex;
        column-gap: 10px;
        position: absolute;
        left: 10vw;
        bottom: 10vh;
    }

	.left-bar {
        width: 4px;
        background: linear-gradient(to bottom, #a09cd0, #0831ff);
	}

	.long-text {
		font-size: 2vw;
		color: #f3f3f3;
        max-width: 60vw;
        letter-spacing: 1.5px;

	}
</style>
