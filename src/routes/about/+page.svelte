<main>
	<h1>ABOUT</h1>
	<hr />
	<img
		src="https://media.giphy.com/media/uk3R91z24SoUZ27WTh/giphy.gif"
		alt="goodbye"
	/>
	<p>Hey there!</p>
	<p />
	<p>
		I'm Master Le. And I've got.... too many focking websites and apps... and projects... and ideas...
		And so, THIS site will be my little spot to write about ongoing tingz that involve coding or webdev.
	</p>
	<p>
		It's been... such an interesting ride, and if I don't document these tingz now... then how will I roast
		myself in the future when I look back in the future as I reminisce my coding days and think... "Boi, wat da hail, boy?"
		and don't hesitate 
	</p>
	<p>
		Anyway, have fun getting lost in the multitude of sites I've got hosted that somehow... someway... connect and/or lead back to this 
		one. And for the folks that never pick up a book in their entire life and will likely get bored reading all dis 
		shit (honestly I could too--I get bored writing it sometimes man), 
		just click <a href="https://mast3rle.mmm.page/" target="_blank" title="null" rel="noopener noreferrer">on dis link</a> 
		for the same content but presented in with more fun buttons and colors and less boring ass words; enjoy your first Master Le rabbit hole!
	</p>
	<p>Take care, bai.</p>
	<p>
		Best regards, <br />
		Master Le
	</p>
</main>

<style lang="scss">
	main {
		min-height: 100vh;
		height: 100%;
		max-width: 800px;
	}

	@font-face {
		font-family: 'Monument Extended';
		src: url('/fonts/Monument/MonumentExtended-Regular.woff2') format('woff2'), url('/fonts/Monument/MonumentExtended-Regular.woff') format('woff');
		font-weight: bold;
		font-style: normal;
		font-display: swap;
	}

	h1 {
		font-size: 2rem;
		margin-bottom: 3rem;
		text-align: center;
		font-family: 'Monument Extended', sans-serif !important;
		width: 100%;
		display: block;
		color: hsl(170, 36%, 55%);
	}

	hr {
		border-color: $clr-fg-5;
		margin-block: 2rem;
		width: 100%;
	}

	img {
		float: right;
		margin: 0 1.5rem 1.5rem 1.5rem;
		border-radius: 3rem;
		@media screen and (max-width: $tablet) {
			float: none;
			border-radius: 1rem;
			margin-inline: auto;
		}
	}

	s {
		text-decoration: line-through wavy;
		text-decoration-color: $accent-05;
	}

	p {
		display: block;
		font-size: 1.25rem;
		margin-bottom: 1.6rem;
		hyphens: auto;
		color: $clr-fg-4;
		filter: brightness(1.1);
		line-height: 1.5;
		font-family: 'Larsseit', $body-font, sans-serif;
		span {
			color: $clr-fg-450;
		}
	}

	p {
		font-size: 19px;
		font-family: $body-font;

		@media screen and (max-width: $tablet) {
			font-size: 17px;
		}
	}
</style>
