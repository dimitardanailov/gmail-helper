import GmailLabelColor from './GmailLabelColor'
import { AbstractRadioGroup } from '../../radio-buttons/AbstractRadioGroup'

import { Label } from '../../../models/Label'

import store from '../../../redux/store'
import { setLabelColor } from '../../../redux/actions'

const template = document.createElement('template')

template.innerHTML = `
	<style>
		:host {
			position: relative;

			display: block;
		}

		span {
			position: relative;

			display: block;
			margin-bottom: 5px;

			text-align: center;
			font-size: 1.6em;
		}

		div {
			position: relative;

			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
		}
	</style>

	<span>
		Choose a label text color:
	</span>

	<div>
		<slot></slot>
	</div>
`

export class GmailLabelColorGroup extends AbstractRadioGroup {
  constructor() {
    super()

    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() { 
    if (!this.hasAttribute('role')) 
      this.setAttribute('role', 'radiogroup')

    const colors = Label.availableColorColors()

    colors.forEach(color => {
      this.appendChild(new GmailLabelColor(color))
    })

    this.querySelector('[role="radio"]').setAttribute('tabindex', 0)

    this.onclick = e => this._onClick(e)
    this.addEventListener('keydown', e => this._onKeyDown(e))
  }

  /**
	 * Mark the passed in node as being checked by setting `aria-checked=true`,
	 * and make it focusable by setting `tabindex=0`.
	 */
  _checkNode(node) {
    node.setAttribute('aria-checked', 'true')
    node.tabIndex = 0

    store.dispatch(setLabelColor(node.color))
  }
}

customElements.define('gmail-label-color-group', GmailLabelColorGroup)
