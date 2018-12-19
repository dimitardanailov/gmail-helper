import { GmailLabelTextBox } from '../inputs/GmailLabelTextBox'
import { FormSubmitButton } from './FormSubmitButton'
import { GmailSelectBox } from '../selectbox/GmailSelectBox'
import { listLabels, createLabel } from '../../gmail/labels'
import { listFilters, createFilter } from '../../gmail/filters'
import { Label } from '../../models/Label'

export class GmailForm extends HTMLFormElement {
	constructor() {
		super()

		this.addEventListener('submit', this.handleSubmit)
	}

	connectedCallback() {
		this.textFieldName = new GmailLabelTextBox()
		this.appendChild(this.textFieldName)

		this.selectBoxListVisibility = new GmailSelectBox(Label.listVisibilityOptions())
		this.appendChild(this.selectBoxListVisibility)

		this.submit = new FormSubmitButton()
		this.appendChild(this.submit)
	}

	async handleSubmit(e) {
		e.preventDefault()
		
		if (this.textFieldName.value.length === 0) {
			alert('Label name should have at least one character ...')
			return
		}

		await this.addLabel()

		this.resetForm()
	}

	async addLabel() {
		this.submit.disabled = true

		// const labels = await listLabels()
		// console.log(labels)

		const label = new Label()
		label.name = this.textFieldName.value
		label.labelListVisibility = this.selectBoxListVisibility.value

		const labelResponse = await createLabel(label)
		label.setResponseValues(labelResponse)

		const filter = await createFilter(label.name, label.id)
		console.log(filter)

		const filters = await listFilters()
		console.log(filters)
	}

	resetForm() {
		this.submit.disabled = false
		this.textFieldName.value = ''
		this.selectBoxListVisibility.removeAttribute('selected')
	}
}

customElements.define('gmail-form', GmailForm, { extends: 'form' })