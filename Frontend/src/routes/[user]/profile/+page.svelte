<script>
	let usrCmp = 'Nepal College Of Information Technology';
	let usrName = 'Sujal Bikram Thapa';
	let usrUsNm = 'sujalbthapa';
	let usrTpe = 'Customer';
</script>

<section class="usrProfile">
	<div class="usrImgs">
		<div class="usrBnr">
			<img src="banner.jpg" alt="" />
		</div>
		<div class="usrProIm">
			<img src="HKLogo.png" alt="" />
		</div>
	</div>
	<div class="usrNmUr">
		<div class="usrCmp">{usrCmp}</div>
		<div class="usrName">{usrName}</div>
		<div class="usrUsNm">@{usrUsNm}</div>
		<div class="usrTyp">{usrTpe}</div>
	</div>
	<div class="usrDesc"></div>
</section>

<style>
	.usrProfile {
		padding: 10px;
		height: 78vh;
		display: grid;
		grid-template-rows: 1fr 1fr 3fr;
		grid-template-areas:
			'one'
			'two'
			'three';
		gap: 10px;
	}
	.usrImgs {
		grid-area: one;
		padding: 10px;
		height: 30vh;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.usrBnr {
		height: 20vh;
		width: 100%;
		border-radius: 5%;
		box-shadow:
			3px 3px 10px rgba(0, 0, 0, 0.442),
			inset -5px -5px 10px rgba(255, 255, 255, 0.8);
	}
	.usrBnr img {
		width: 100%;
		height: 100%;
		border-radius: 5%;
	}
	.usrProIm {
		height: 40vw;
		width: 40vw;
		border-radius: 50%;
		position: absolute;
		top: 35%;
		box-shadow:
			2px 2px 10px rgba(0, 0, 0, 0.442),
			inset -5px -5px 10px rgba(255, 255, 255, 0.8);
	}
	.usrProIm img {
		height: 100%;
		border-radius: 50%;
	}
	.usrNmUr {
		grid-area: two;
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 10px;
		border-radius: 15px;
		box-shadow:
			3px -3px 10px rgba(0, 0, 0, 0.153),
			inset -5px -5px 10px rgba(255, 255, 255, 0.976);
		margin-top: -15px;
	}
	.usrCmp {
		font-weight: 700;
		font-size: 1.3rem;
		color: #385cf5;
	}
	.usrTyp {
		color: #385cf5;
		font-weight: 900;
	}
	.usrName {
		font-weight: 600;
		font-size: 1.25rem;
		color: #0c0851;
	}
	.usrUsNm {
		font-weight: 500;
		font-size: 1.05rem;
		color: gray;
	}
	.usrDesc {
		padding: 5px;
		grid-area: three;
		border-radius: 15px;
		box-shadow:
			3px 3px 10px rgba(0, 0, 0, 0.159),
			inset -5px -5px 10px rgba(255, 255, 255, 0.976);
	}
</style>
