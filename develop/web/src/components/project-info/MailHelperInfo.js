
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

		blockquote {
			font-size: 1.6em;
			font-style: italic;
		}

		.special-info {
			font-weight:bold;
		}

		.color-warning {
			color: #ff0000;
		}

		.image-wrapper {
			position: relative;

			display: flex;
			justify-content: center;
			justify-items: center;
			width: 100;
		}

	</style>

	<h2>What is Mail helper ? </h2>

	<p>
		Mail helper is a personal assistant that creates Gmail Filter and Labels 
		<span class="special-info">much easier rather than "traditional way".</span>
	</p>

	<h2>Why Mail helper could be uselful ?</h2>

	<p>
		I've been using Gmail since 2010. 
		For this period of time: I unread letters reach number of 2000+. I had almost 450+ labels but this didn't help me.
		My mailbox was one big fat and dirty room 😊 😒                                             
	</p>

	<p>
		The cost of creating<span class="special-info">ONLY</span> one filter and label is between three and ten minutes
	</p>
	<p>
		<span class="color-warning">I didn't want to pay this high price !!!<span>
	</p>

	<h2>Each story began with "baby" step</h2>

	<p>
		End of 2018 I've deviced to create a simple web page which is able to covers my basic requirements: 
	</p>

	<ul>
		<li>
			Creating label and filter to requires <span class="special-info">Minumum</span> steps
		</li>
		<li>
			Reduce my unread letters
		</li>
		<li>
			Each email to have at least one filter and label
		</li>
	</ul>

	<h2>Personal achievements</h2>

	<ul>
		<li>
			For me is much easier to organize and read my email box.
		</li>
		<li>
			Gmail label meta data grows with 10 % only for two weeks (From 440 to 476 labels). This is almost 10% growth
		</li>
		<li>
			I did a discovery: Gmail Label could contains emoji !!!  
		</li>
		<li>
			I'm able to choise label background and text color much easier
		</li>
	</ul>

	<section class="image-wrapper">
		<img src="./images/mail-helper.png" width"271" height="437" />
	</section>

	<h2>Summary</h2>

	<blockquote>
		"People want to believe they make decisions rationally, 
		logically - but in reality, they make them emotionally first. 
		Then they defend those decisions with logic." - 
		<a href="https://dribbble.com/shots/2716909-Opening-screen-for-banking-App" 
			 target="_blank" title="Emotions">Jekub Reis</a>
	</blockquote>

	<p>
		Without <span class="color-warning">visual indication</span> 
		which email is helpful and which email is just a spam / garbage: I didn't very well.
	</p>
	<p>
		Each human needs challenges and achievements. 
		My progress with Mail Helper makes me more happy person when I'm using Gmail.
		I have a better knowledge how works Gmail ... and a lot of ideas how to improve Mail Helper 🤞
	</p>

	<section class="image-wrapper">
		<img src="./images/gmail-labels.png" width="283" height="275" />
	</section>

	<h2>Licence</h2>

	<p>
		Application is under MIT license.
		I'm using github to store source code: 
		<a href="https://github.com/dimitardanailov/gmail-helper"
		   target="_blank" title="Mail helper - source code">https://github.com/dimitardanailov/gmail-helper</a>
	</p>

	<h2>I need more information</h2>

	<p>
		If you need more details about this application please visit: 
		<a href="privacy.html" title="Mail Helper - Privacy">Privacy</a>
	</p>

	<h2>Contacts</h2>

	<p>
		If you need more an information or if you need a demo please send me an email: dimityr.danailov[at]gmail.com
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