<script>
	let user = 'sujalbthapa';
</script>

<nav class="navBar">
	<div class="navLogout">
		<a href="/logout" target="_self"><i class="bx bx-log-out"></i></a>
	</div>
	<div class="navEmail">
		<a href="/{user}/email" target="_self"><i class="bx bx-envelope"></i></a>
	</div>
	<div class="navHome">
		<a href="/" target="_self"><i class="bx bx-home"></i></a>
	</div>
	<div class="navNoti">
		<a href="/notifications" target="_self"><i class="bx bx-bell"></i></a>
	</div>
	<div class="navProfile">
		<a href="/{user}/profile" target="_self"><i class="bx bx-face"></i></a>
	</div>
</nav>

<style>
	.navBar {
		height: 8.5vh;
		width: 100vw;
		background-color: whitesmoke;
		position: fixed;
		bottom: 0;
		left: 0;
		box-shadow:
			1px -1px 8px #1516708b,
			inset -1px -1px 8px #ffffff;
		border-radius: 40px 40px 0 0;

		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 2.2rem;
	}
	a,
	a::after,
	a::before {
		text-decoration: none;
		color: #151670;
	}
	a:active {
		color: #3b5bf3;
	}
	.navBar div {
		cursor: pointer;
	}
</style>
