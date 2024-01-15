<script>
	let usrCmp = 'Hill & Knowlton';
	let usrName = 'Sam Smith';
	let usrUsNm = 'ssmith';
	let usrTpe = 'Customer';
	let usrDesc =
		'Hill & Knowlton is the global strategic communications leader for transformation. A trusted partner for sustainable value creation and protection, we help brands, businesses and leaders build reputation, manage risk, and create breakthrough opportunities for growth. Founded in 1927, today’s Hill & Knowlton operates 70 offices in over 30 countries, providing advisory, public relations and creative solutions to local and global clients. Our global team offers integrated strategic services, grounded in deep sector expertise, and enabled by creativity and intelligence. Headquartered in New York, Hill & Knowlton is part of WPP, the world’s largest marketing and communications services company.';
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
	</div>
	<div class="usrDesc">
		<div class="usrCmp">{usrTpe}</div>
		<p>{usrDesc}</p>
	</div>
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
	.usrCmp {
		font-weight: 700;
		font-size: 1.3rem;
		color: #385cf5;
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
			inset -51px -5px 10px rgba(255, 255, 255, 0.8);
	}
	.usrBnr img {
		width: 100%;
		height: 100%;
		border-radius: 5%;
	}
	.usrProIm {
		height: 38vw;
		width: 38vw;
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
		margin-top: -15px;
		box-shadow:
			-1px -1px 20px rgba(0, 0, 0, 0.056),
			inset -5px -5px 10px rgba(255, 255, 255, 0.976);
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
		padding: 3px 5px;
		grid-area: three;
		box-shadow:
			-1px -1px 20px rgba(0, 0, 0, 0.056),
			inset -5px -5px 10px rgba(255, 255, 255, 0.976);
	}
	.usrDesc p {
		margin-top: 5px;
	}
</style>
