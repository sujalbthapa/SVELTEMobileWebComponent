<script>
	let mailSenderUsrName = 'John Wick';
	let mailSenderUsrUsNm = 'jwick';
	let mailSenderUsrEm = 'jwick@hk.com';
	let notiDate = '01/16/2024 - 06:54';
	let mailTitl = 'Regarding recent changes to the website';
	let notiMsg =
		'Founded in 1927, today’s Hill & Knowlton operates 70 offices in over 30 countries, providing advisory, public relations and creative solutions to local and global clients. Our global team offers integrated strategic services, grounded in deep sector expertise, and enabled by creativity and intelligence.';
</script>

<div class="notiMainContain">
	<div class="notiIcn">
		<i class="bx bx-envelope"></i>
	</div>
	<div class="notiUsrPro">
		<div class="notiUsrImg">
			<img src="/HKLogo.png" alt="Logo" />
		</div>
		<div class="notiUsrNam">
			<p>
				{mailSenderUsrName}<br /><span
					><a href="/{mailSenderUsrUsNm}/profile">@{mailSenderUsrUsNm}</a></span
				>
				<span>|| {notiDate}</span>
			</p>
		</div>
	</div>
	<div class="notiMsg">
		<div class="notiMsgTitl">
			<h3>Subject : {mailTitl}</h3>
			<h4>From : {mailSenderUsrEm}</h4>
		</div>
		<div class="notiMsgTxt">
			<p>{notiMsg}</p>
		</div>
	</div>
</div>

<style>
	.notiIcn {
		position: absolute;
		right: 10px;
		top: 28px;
		font-size: 2.4rem;
		color: #0e1e65;
	}
	a {
		text-decoration: none;
	}
	a,
	a::before,
	a::after,
	a:active {
		color: #395df5;
	}
	.notiMainContain {
		position: relative;
		padding: 10px;
		box-shadow:
			-1px -1px 20px rgba(0, 0, 0, 0.156),
			inset -5px -5px 10px rgba(255, 255, 255, 0.976);
		border-radius: 5px;
	}
	.notiUsrPro {
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.notiUsrImg {
		border-radius: 50%;
		width: 13vw;
		height: 13vw;
		border: 1px solid aliceblue;
		margin-right: 20px;
	}
	.notiUsrImg img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.notiUsrNam p {
		font-size: 1.2rem;
		font-weight: 600;
	}
	.notiUsrNam span {
		color: gray;
		font-size: 0.72rem;
		font-weight: 300;
	}
	.notiUsrNam span a {
		font-size: 0.95rem;
		font-weight: 400;
	}
</style>
