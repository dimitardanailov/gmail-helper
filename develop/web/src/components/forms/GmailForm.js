import GmailLabelTextBox from '../text-fields/GmailLabelTextBox'
import GmailFilterTextBox from '../text-fields/GmailFilterTextBox'
import GmailConnectedTextFields from '../check-boxes/gmail-connected-text-fields/GmailConnectedTextFields'
import GmailSelectBox from '../select-boxs/GmailSelectBox'
import GmailLabelColorHolder from '../labels/GmailLabelColorHolder'
import FormSubmitButton from './FormSubmitButton'

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
			margin-top: 2em;
		}

		form {
			position: relative;

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
		}

		::slotted(*) {
			 margin: .3em 0;
		}

		::slotted(gmail-label-text-box),
		::slotted(gmail-filter-text-box) {
			width: 100%;
		}
	</style>

	<form>
		<slot></slot>
	</form>
`

export default class GmailForm extends HTMLElement {
  constructor() {
    super()

    // Attach a shadow root to the element.
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
		
    this.textFields = {}
  }

  connectedCallback() {
    if (!this.hasAttribute('role')) 
      this.setAttribute('role', 'form')

    this.textFields.labelName = new GmailLabelTextBox()
    this.appendChild(this.textFields.labelName)

    this.textFields.filterName = new GmailFilterTextBox()
    this.appendChild(this.textFields.filterName)

    this.appendConnectedTextFieldElement()

    this.selectBoxListVisibility = new GmailSelectBox(Label.listVisibilityOptions())
    this.appendChild(this.selectBoxListVisibility)

    this.labelColorHolder = new GmailLabelColorHolder()
    this.appendChild(this.labelColorHolder)

    this.submitButton = new FormSubmitButton()
    this.submitButton.textValues = {
      defaultState: 'Add or update gmail meta data',
      activeState: 'Waiting ...'
    }

    this.appendChild(this.submitButton)
    this.submitButton.addEventListener('click', e => this.handleSubmit(e))
  }

  appendConnectedTextFieldElement() {
    this.connectedTextFields = new GmailConnectedTextFields()
    this.connectedTextFields.labelTextNode = 'Label and filter have the same names'
    this.appendChild(this.connectedTextFields)

    // Add a "connection link" between text inputs
    this.connectedTextFields.checkBox.primaryTextField = 
			this.textFields.labelName.textBox
    this.connectedTextFields.checkBox.escortTextField = 
			this.textFields.filterName.textBox

    this.connectedTextFields.checked = true
  }

  async handleSubmit(e) {
    e.preventDefault()

    if (this.textFields.labelName.textBox.value.length === 0) {
      alert('Label name should have at least one character ...')
      return
    }

    if (this.connectedTextFields.checkBox.checked) {
      this.textFields.filterName.textBox.value = this.textFields.labelName.textBox.value
    }

    if (this.textFields.filterName.textBox.value.length === 0) {
      alert('Filter name should have at least one character ...')
      return
    }

    await this.updateGmailDatabase()

    this.resetForm()

    return false
  }

  /**
	 * Method creates or update an existing label
	 */
  async updateGmailDatabase() {
    this.submitButton.disabled = true

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
    this.submitButton.disabled = false
		
    // Text fields
    this.textFields.labelName.textBox.value = ''
    this.textFields.filterName.textBox.value = ''
		
    this.selectBoxListVisibility.selectBox.removeAttribute('selected')
    this.connectedTextFields.checked = true

    this.labelColorHolder.setDefaultColorStyles()
  }
}

customElements.define('gh-form', GmailForm)
