const template = document.createElement('template')

template.innerHTML = `
	<style>
		:host {
			position: relative;

			display: flex;
			flex-direction: column;

			padding: 2em;
		}

		h1 {
			font-size: 2.8em;
			text-align: center;
		}
	</style>

	<h1>Mail helper</h1>
`

export class Slogan extends HTMLElement {
  constructor() {
    super()

    // Attach a shadow root to the element.
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('gh-slogan', Slogan)
