<script>
	import { popupState } from '../../store';
	import { Notifications, acts } from '@tadashi/svelte-notification';
	import { navigate } from 'svelte-navigator';
	let Email = '';
	let Password = '';
	let isPswCrt = false;
	let isUsrCrt = false;
	let isDivVisible = false;

	function checkPassword() {
		isUsrCrt = Email === 'sujalbthapa@gmail.com';
		isPswCrt = Password === '123456';
		if (!isPswCrt && !isUsrCrt) {
			//showNotification('danger', 'Incorrect Username or Password');
		} else {
			showNotification('success', 'Logged In');
			navigate('/');
		}
	}
	import { onMount } from 'svelte';

	function showNotification(mode, msg) {
		acts.add({
			mode: { mode },
			message: { msg },
			lifetime: 3 // Optional: Set the duration in seconds
		});
	}
	const clearParams = () => {
		const url = new URL(window.location.href);
		url.search = '';
		window.history.replaceState({}, document.title, url.href);
	};

	onMount(() => {
		clearParams();
	});
</script>

<title>Hill & Knowlton - Login</title>

<!-- {#if isDivVisible}
	<PasswordPopup {Message} />
	{setTimeout(location.reload(), 900000)}
{/if} -->
<section>
	<div class="mainContainer">
		<header class="containerHeader">
			<div class="containerLogo">
				<figure class="containerImg">
					<img src="HKLogo.png" alt="HK Logo" />
				</figure>
				<p>Hill <span>&</span> Knowlton</p>
			</div>
		</header>
		<main class="containerBody">
			<div class="containerTitle">Login into Your Account</div>
			<form on:submit={checkPassword}>
				<div class="inputGroup">
					<input
						type="text"
						autocomplete="off"
						class="input"
						id="Email"
						name="Email"
						bind:value={Email}
						required
					/>
					<label for="Email" class="label">Email</label>
				</div>
				<div class="inputGroup">
					<input
						type="password"
						autocomplete="off"
						class="input"
						id="Password"
						name="Password"
						bind:value={Password}
						required
					/>
					<label for="Password" class="label">Password</label>
				</div>
				<button type="submit" class="btn"> Login </button>
			</form>
		</main>
		<footer class="containerFoot">
			<p>Don't Have An Account? <a href="/signup">Sign-Up Now</a></p>
		</footer>
	</div>
</section>

<style>
	a {
		text-decoration: none;
	}
	section {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 80vh;
	}
	.mainContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: auto;
	}
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
		font-size: 1.15rem;
	}
	.containerLogo span {
		font-weight: 100;
	}
	.containerTitle {
		margin-top: -10px;
		font-size: 1.3rem;
		font-weight: 600;
	}
	.containerBody {
		margin-top: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.containerBody form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.inputGroup {
		margin-top: 25px;
		font-size: 1rem;
		position: relative;
	}
	.input {
		width: 70vw;
		border: 0px;
		padding: 1rem;
		border-radius: 10px;
		transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
		box-shadow:
			1.5px 1.5px 8px #00000041,
			inset -2px -2px 8px hsl(0, 0%, 100%);
	}
	.label {
		position: absolute;
		top: 0.9rem;
		left: 0.7rem;
		pointer-events: none;
		transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
	}
	.input:focus {
		outline: none;
	}
	.input:is(:focus, :valid) ~ label {
		transform: translateY(-110%) scale(0.9);
		padding-inline: 0.3rem;
		background-color: white;
	}
	.btn {
		-webkit-border-radius: 10;
		-moz-border-radius: 10;
		border-radius: 10px;
		color: #ffffff;
		font-size: 1rem;
		background: #151670;
		padding: 8px 30px;
		font-weight: 700;
		text-decoration: none;
		margin-top: 20px;
		box-shadow: 1.5px 1.5px 3px #1516708b;
	}

	.btn:hover,
	.btn:focus,
	.btn:active {
		background: #385cf5;
		text-decoration: none;
	}

	@media only screen and (min-width: 768px) {
		.containerImg {
			width: 8em;
			height: 6.5em;
		}
		.btn {
			font-size: 1.5rem;
			padding: 8px 60px;
		}
		.inputGroup {
			font-size: 1.2rem;
		}
		.input {
			width: 60vw;
			padding: 1.3rem;
			border-radius: 10px;
			box-shadow:
				2.5px 2.5px 8px #00000041,
				inset -2px -2px 8px hsl(0, 0%, 100%);
		}
		.label {
			position: absolute;
			top: 1rem;
			font-size: 1.4rem;
		}
		.containerLogo p {
			font-size: 1.6rem;
		}
		.containerTitle {
			margin-top: -10px;
			font-size: 1.7rem;
		}
		.containerFoot p {
			font-size: 1.3rem;
		}
	}
</style>
