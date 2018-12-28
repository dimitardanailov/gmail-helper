import { GmailLabelTextBox } from '../text-fields/GmailLabelTextBox'
import { GmailFilterTextBox } from '../text-fields/GmailFilterTextBox'
import { GmailConnectedTextFields } from '../check-boxes/GmailConnectedTextFields'
import { GmailSelectBox } from '../select-boxs/GmailSelectBox'
import { GmailLabelColorHolder } from '../labels/GmailLabelColorHolder'
import { FormSubmitButton } from './FormSubmitButton'
import { createLabel } from '../../gmail/labels'
import { createFilter } from '../../gmail/filters'
import { Label } from '../../models/Label'

import store from '../../redux/store'
import { addLabel, GMAIL_LABELS } from '../../redux/actions'

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

		this.labelColorHolder = new GmailLabelColorHolder()
		this.appendChild(this.labelColorHolder)

		this.submit = new FormSubmitButton()
		this.submit.textValues = {
			defaultState: 'Add or update gmail meta data',
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

		await this.updateGmailDatabase()

		this.resetForm()
	}

	/**
	 * Method creates or update an existing label
	 */
	async updateGmailDatabase() {
		this.submit.disabled = true

		// Trim 
		this.textFields.labelName.value.trim()
		this.textFields.filterName.value.trim()

		let label
		label = Label.findLabelByQuery(
			GMAIL_LABELS, 
			this.textFields.labelName.value
		)

		if (!label) label = await this.createGmailLabel()

		const filterName = this.textFields.filterName.value
		await createFilter(filterName, label.id)
	}

	async createGmailLabel() {
		const label = new Label()
		label.name = this.textFields.labelName.value
		label.labelListVisibility = this.selectBoxListVisibility.value
		label.backgroundColor = store.getState()['labelBackgroundColor']
		label.textColor = store.getState()['labelColor']

		const labelResponse = await createLabel(label)
		label.setResponseValues(labelResponse)

		store.dispatch(addLabel(label))

		return label
	}

	resetForm() {
		this.submit.disabled = false
		
		// Text fields
		this.textFields.labelName.value = ''
		this.textFields.filterName.value = ''
		
		this.selectBoxListVisibility.removeAttribute('selected')
		this.connectedTextFields.setChecked(true)

		this.labelColorHolder.setDefaultColorStyles()
	}
}

customElements.define('gmail-form', GmailForm, { extends: 'form' })