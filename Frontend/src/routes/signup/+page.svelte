<script>
	import { navigate } from 'svelte-navigator';
	$: typeChosen = false;
	$: type = 'Customer';
	let isDivVisible = false;

	let Username = '';
	let Password = '';
	let Message = 'Username Already Taken';
	import { onMount } from 'svelte';

	// const clearParams = () => {
	// 	const url = new URL(window.location.href);
	// 	url.search = '';
	// 	window.history.replaceState({}, document.title, url.href);
	// };

	// onMount(() => {
	// 	clearParams();
	// });
	function selectType(value) {
		type = value;
		typeChosen = true;
	}
	function changeType() {
		type = type === 'Employee' ? 'Customer' : 'Employee';
		typeChosen = false;
	}
	function isVowel(char) {
		return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
	}
</script>

<title>Hill & Knowlton - Signup</title>

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
		{#if typeChosen}
			<main class="containerBody">
				<div class="containerTitle">Create Your <span>{type}</span> Account</div>
				<form method="post">
					<div class="inputGroup">
						<input
							type="text"
							autocomplete="off"
							class="input"
							id="Username"
							name="Username"
							bind:value={Username}
							required
						/>
						<label for="Username" class="label">Username</label>
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
					<button type="submit" class="btn"> Signup </button>
				</form>
			</main>
			<footer class="containerFoot">
				<p>Already Have An Account? <a href="/login">Login Now</a></p>
				<p>
					Not {isVowel(type[0]) ? 'An ' : 'A '}{type}?
					<a href="/signup" on:click={changeType}>Go Back</a>
				</p>
			</footer>
		{:else}
			<main class="containerBody">
				<div class="containerTitle">Choose User Type</div>
				<form method="post">
					<div class="inputButtons">
						<div class="radioOne">
							<input type="radio" bind:group={type} value="Customer" />
							<label for="contactChoice1">Customer</label>
						</div>
						<div class="radioOne">
							<input type="radio" bind:group={type} value="Employee" />
							<label for="contactChoice1">Employee</label>
						</div>
					</div>
					<button class="btn" on:click={() => selectType(type)}> Select </button>
				</form>
			</main>
			<footer class="containerFoot">
				<p>Already Have An Account? <a href="/login">Login Now</a></p>
			</footer>
		{/if}
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
	.inputButtons {
		display: flex;
		margin-top: 20px;
		align-items: center;
		gap: 30px;
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
	.containerTitle span {
		background-color: #151670;
		padding: 1px 9px;
		color: white;
		border-radius: 7px;
		font-weight: 200;
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
		font-weight: 700;
		background: #151670;
		padding: 8px 30px;
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
	.containerFoot {
		text-align: center;
		line-height: -2px;
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
