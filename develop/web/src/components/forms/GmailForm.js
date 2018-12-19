import { GmailLabelTextBox } from '../inputs/GmailLabelTextBox'
import { FormSubmitButton } from './FormSubmitButton'
import { listLabels, createLabel } from '../../gmail/labels'

export class GmailForm extends HTMLFormElement {
	constructor() {
		super()

		this.addEventListener('submit', this.handleSubmit)
	}

	connectedCallback() {
		this.input = new GmailLabelTextBox()
		this.appendChild(this.input)

		this.submit = new FormSubmitButton()
		this.appendChild(this.submit)
	}

	async handleSubmit(e) {
		e.preventDefault()
		
		if (this.input.value.length === 0) {
			alert('Label name should have at least one character ...')
			return
		}

		await this.addLabel()
	}

	async addLabel() {
		this.submit.disabled = true

		const labels = await listLabels()
		console.log(labels)

		const label = await createLabel(this.input.value)
		console.log(label)
	}
}

customElements.define('gmail-form', GmailForm, { extends: 'form' })