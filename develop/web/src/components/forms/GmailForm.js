import { GmailLabelTextBox } from '../text-fields/GmailLabelTextBox'
import { GmailFilterTextBox } from '../text-fields/GmailFilterTextBox'
import { GmailConnectedTextFields } from '../check-boxes/GmailConnectedTextFields'
import { FormSubmitButton } from './FormSubmitButton'
import { GmailSelectBox } from '../select-boxs/GmailSelectBox'
import { createLabel } from '../../gmail/labels'
import { createFilter } from '../../gmail/filters'
import { Label } from '../../models/Label'

import store from '../../redux/store'
import { addLabels, GMAIL_LABELS } from '../../redux/actions'

export class GmailForm extends HTMLFormElement {
	constructor() {
		super()

		this.textFields = {}
		this.addEventListener('submit', this.handleSubmit)
	}

	connectedCallback() {
		this.textFields.labelName = new GmailLabelTextBox()
		this.appendChild(this.textFields.labelName)

		this.textFields.filterName = new GmailFilterTextBox()
		this.appendChild(this.textFields.filterName)

		this.appendConnectedTextFieldElement()

		this.selectBoxListVisibility = new GmailSelectBox(Label.listVisibilityOptions())
		this.appendChild(this.selectBoxListVisibility)

		this.submit = new FormSubmitButton()
		this.submit.textValues = {
			defaultState: 'Create a new label',
			activeState: 'Waiting ...'
		}
		this.appendChild(this.submit)
	}

	appendConnectedTextFieldElement() {
		this.connectedTextFields = new GmailConnectedTextFields()
		this.connectedTextFields.labelTextNode = 'Label and filter have the same names'
		this.connectedTextFields.primaryTextField = this.textFields.labelName
		this.connectedTextFields.escortTextField = this.textFields.filterName

		this.appendChild(this.connectedTextFields)

		this.connectedTextFields.setChecked(true)
	}

	async handleSubmit(e) {
		e.preventDefault()
		
		if (this.textFields.labelName.value.length === 0) {
			alert('Label name should have at least one character ...')
			return
		}

		if (this.connectedTextFields.checkbox.checked) {
			this.textFields.filterName.value = this.textFields.labelName.value

			if (this.textFields.filterName.value.length === 0) {
				alert('Filter name should have at least one character ...')
			}
		}

		await this.addLabel()

		this.resetForm()
	}

	async addLabel() {
		this.submit.disabled = true

		const label = new Label()
		label.name = this.textFields.labelName.value
		label.labelListVisibility = this.selectBoxListVisibility.value

		const labelResponse = await createLabel(label)
		label.setResponseValues(labelResponse)

		const filterName = this.textFields.filterName.value
		const filter = await createFilter(filterName, label.id)
		console.log(filter)
	}

	resetForm() {
		this.submit.disabled = false
		
		// Text fields
		this.textFields.labelName.value = ''
		this.textFields.filterName.value = ''
		
		this.selectBoxListVisibility.removeAttribute('selected')
		this.connectedTextFields.setChecked(true)
	}
}

customElements.define('gmail-form', GmailForm, { extends: 'form' })