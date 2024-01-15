<script>
	//export let Message = '';
</script>

<section class="popSection">
	<div class="popContainer">
		<header class="containerHeader">
			<div class="containerLogo">
				<figure class="containerImg">
					<img src="HKLogo.png" alt="HK Logo" />
				</figure>
				<p>Hill <span>&</span> Knowlton</p>
			</div>
		</header>
	</div>
</section>

<style>
	.containerLogo {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.containerImg {
		width: 5em;
		height: 3.5em;
	}
	.containerImg img {
		width: 100%;
		height: auto;
	}
	.containerLogo p {
		font-weight: 900;
		font-size: 1.9rem;
	}
	.containerLogo span {
		font-weight: 100;
	}
	.popSection {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		background-color: white;
		z-index: 999;
	}
	.popContainer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		position: absolute;
		width: 70vw;
		height: 90vw;
		font-weight: 700;
		font-size: 1.5em;
		border-radius: 40px;
		box-shadow:
			20px 20px 45px hsla(0, 0%, 0%, 0.405),
			inset 20px 20px 50px #4f6ffc16;
	}
</style>
