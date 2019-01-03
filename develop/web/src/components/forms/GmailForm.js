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

const template = document.createElement('template')

template.innerHTML = `
	<style>
		:host {
			position: relative;
			
			display: flex;
			padding: 4em 2em;
		}

		form {
			position: relative;

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			margin: 1em;

			border: 1px solid red;
		}
	</style>

	<slot></slot>
`

export class GmailForm extends HTMLElement {
	constructor() {
		super()

		// Attach a shadow root to the element.
		this.attachShadow({mode: 'open'})
		this.shadowRoot.appendChild(template.content.cloneNode(true))
		
		this.textFields = {}
	}

	connectedCallback() {
		this.createFormElement()

		this.textFields.labelName = new GmailLabelTextBox()
		this.form.appendChild(this.textFields.labelName)

		this.textFields.filterName = new GmailFilterTextBox()
		this.form.appendChild(this.textFields.filterName)

		this.appendConnectedTextFieldElement()

		this.selectBoxListVisibility = new GmailSelectBox(Label.listVisibilityOptions())
		this.form.appendChild(this.selectBoxListVisibility)

		this.labelColorHolder = new GmailLabelColorHolder()
		this.form.appendChild(this.labelColorHolder)

		this.submit = new FormSubmitButton()
		this.submit.textValues = {
			defaultState: 'Add or update gmail meta data',
			activeState: 'Waiting ...'
		}
		this.form.appendChild(this.submit)
	}

	createFormElement() {
		this.form = document.createElement('form')
		this.appendChild(this.form)

		this.addEventListener('submit', this.handleSubmit)
	}

	appendConnectedTextFieldElement() {
		this.connectedTextFields = new GmailConnectedTextFields()
		this.connectedTextFields.labelTextNode = 'Label and filter have the same names'
		this.connectedTextFields.primaryTextField = this.textFields.labelName.textBox
		this.connectedTextFields.escortTextField = this.textFields.filterName.textBox

		this.form.appendChild(this.connectedTextFields)

		this.connectedTextFields.setChecked(true)
	}

	async handleSubmit(e) {
		e.preventDefault()
		
		if (this.textFields.labelName.textBox.value.length === 0) {
			alert('Label name should have at least one character ...')
			return
		}

		if (this.connectedTextFields.checkbox.checked) {
			this.textFields.filterName.textBox.value = this.textFields.labelName.textBox.value

			if (this.textFields.filterName.textBox.value.length === 0) {
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
		this.textFields.labelName.textBox.value.trim()
		this.textFields.filterName.textBox.value.trim()

		let label
		label = Label.findLabelByQuery(
			GMAIL_LABELS, 
			this.textFields.labelName.textBox.value
		)

		if (!label) label = await this.createGmailLabel()

		const filterName = this.textFields.filterName.textBox.value
		await createFilter(filterName, label.id)
	}

	async createGmailLabel() {
		const label = new Label()
		label.name = this.textFields.labelName.textBox.value
		label.labelListVisibility = this.selectBoxListVisibility.selectBox.value
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
		this.textFields.labelName.textBox.value = ''
		this.textFields.filterName.textBox.value = ''
		
		this.selectBoxListVisibility.selectBox.removeAttribute('selected')
		this.connectedTextFields.setChecked(true)

		this.labelColorHolder.setDefaultColorStyles()
	}
}

customElements.define('gmail-form', GmailForm)