
const template = document.createElement('template')

template.innerHTML = `
	<style>
		:host {
			position: relative;

			display: block;
			margin-bottom: 10px;
		}

		h2 {
			font-size: 2em;
		}

		p, ul {
			font-size: 1.6em;
		}

		.special-info {
			font-weight:bold;
		}

		.color-warning {
			color: #ff0000;
		}

	</style>

	<h2>What is Mail helper ? </h2>

	<p>
		Mail helper is a personal asistance that creates Gmail Filter and Labels 
		<span class="special-info">much easier rather than "typical way".</span>
	</p>

	<h2>Why Mail helper could be uselful ?</h2>

	<p>
		I'm using Gmail since 2010 and for this period of time:
	</p>

	<ul>
		<li>label meta grows to 450+ labels</li>
		<li>unread letters were 2000+</li>
	</ul>

	<p>
		and the results was: <span class="color-warning">I didn't want to open my mailbox.</span> 
		<br/>
		Why ?
		<br/>
		Without <span class="color-warning">visual indication</span> 
		which email is helpful and which email is just a spam / garbage: 
		My feelings were like I should open an "<span>uncleaning / durty room</span>".
	</p>

	<p>
		End of 2018 I've deviced to create a simple web page which is able to create 
		Gmail label and filter <span class="special-info">for less than of minute</span>.
	</p>

	<h2>Personal achievements</h2>

	<p>
		<span class="special-info">For me is much easier to organize and read my email box</span>.
		<br/>
		I'm able much faster to scan and reduce "junk" email data.
	</p>

	<p>
		Gmail label meta data grows with 10 % only for two weeks (From 440 to 476 labels). 
	</p>

	<p>
		If you need more details about this application please visit: 
		<a href="privacy.html" title="Mail Helper - Privacy">Privacy</a>
	</p>
`

export class MailHelperInfo extends HTMLElement {
	constructor() {
		super()

		// Attach a shadow root to the element.
		this.attachShadow({mode: 'open'})
		this.shadowRoot.appendChild(template.content.cloneNode(true))
	}
}

customElements.define('mail-helper-info', MailHelperInfo)