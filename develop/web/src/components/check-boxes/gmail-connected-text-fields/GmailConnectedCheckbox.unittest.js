import { expect } from 'chai'
import { GmailConnectedCheckbox } from './GmailConnectedCheckbox'

describe('gmail-connected-checkbox', () => {
  // Elements is responsible to hold the testing area of this unit
  let container

  // Element will hold the target custom web component
  let scratch

  // This will hold the actual element under tests
  let checkbox

  before(done => {
    container = testingHelper.before()

    done()
  })

  beforeEach(done => {
    scratch = document.createElement('div')
    container.appendChild(scratch)

    done()
  })

  beforeEach(async () => {
    scratch.appendChild(new GmailConnectedCheckbox())
    await testingHelper.waitForElement('gmail-connected-checkbox')
    checkbox = scratch.querySelector('gmail-connected-checkbox')
  })

  afterEach(done => {
    scratch = null

    done()
  })

  after(done => {
    container = testingHelper.after(container)
    scratch = null

    done()
  })

  it('should add a [role] to the checkbox', () => {
    expect(checkbox.getAttribute('role')).to.equal('checkbox')
  })

  it('should add a [tabindex] to the checkbox', () => {
    expect(checkbox.getAttribute('tabindex')).to.equal('0')
  })

  it('should toogle [checked], [aria-checked] and update input fields when calling _toggleChecked', () => {
    // Default state
    expect(checkbox.checked).to.be.false

    addTextFields(checkbox, scratch)

    checkbox._toggleChecked(checkbox.checked)
    expect(checkbox.getAttribute('aria-checked')).to.equal('true')
    expect(checkbox.checked).to.be.true
    expect(checkbox.escortTextField.style.display).to.equal('none')     
  })

  it('should hide or remove display none for escortTextField', () => {
    // Default state
    expect(checkbox.checked).to.be.false
    
    addTextFields(checkbox, scratch)

    // Checked 
    checkbox.checked = true
    checkbox._updateTextFieldsStyle()
    expect(checkbox.escortTextField.style.display).to.equal('none')

    // Unchecked
    checkbox.checked = false
    checkbox._updateTextFieldsStyle()
    expect(checkbox.escortTextField.style.display).to.equal('block')
  })

  describe('checked', () => {
    it('should toggle [checked] and [aria-checked] when setting .checked', () => {
      // Default state
      expect(checkbox.checked).to.be.false
      
      // Checked 
      checkbox.checked = true
      expect(checkbox.getAttribute('aria-checked')).to.equal('true')
      expect(checkbox.checked).to.be.true

      // Unchecked 
      checkbox.checked = false
      expect(checkbox.getAttribute('aria-checked')).to.equal('false')
      expect(checkbox.checked).to.be.false
    })

    it('should handle truthy/falsy values for .checked', () => {
      // Default state
      expect(checkbox.checked).to.be.false

      // checked attribute is equal to '0'
      checkbox.checked = '0'
      expect(checkbox.getAttribute('aria-checked')).to.equal('true')
      expect(checkbox.hasAttribute('checked')).to.be.true
      expect(checkbox.checked).to.be.true

      // checked attribute is equal to undefined
      checkbox.checked = undefined
      expect(checkbox.getAttribute('aria-checked')).to.equal('false')
      expect(checkbox.hasAttribute('checked')).to.be.false
      expect(checkbox.checked).to.be.false

      // checked attribute is equal to 1
      checkbox.checked = 1
      expect(checkbox.getAttribute('aria-checked')).to.equal('true')
      expect(checkbox.hasAttribute('checked')).to.be.true
      expect(checkbox.checked).to.be.true
    })

    it('should toggle .checked, [aria-checked] when setting [checked]', () => {
      // Default state
      expect(checkbox.hasAttribute('checked')).to.be.false

      // Set attribute checked equal to checked
      checkbox.setAttribute('checked', '')
      expect(checkbox.getAttribute('aria-checked')).to.equal('true')
      expect(checkbox.checked).to.be.true

      // Remove attribute checked
      checkbox.removeAttribute('checked')
      expect(checkbox.getAttribute('aria-checked')).to.equal('false')
      expect(checkbox.checked).to.be.false
    })
  })

  describe('disabled', () => {
    it('should toggle [disabled], [aria-disabled], and [tabindex] when setting .disabled', () => {
      // Default state
      expect(checkbox.disabled).to.be.false
      
      // Disable checkbox
      checkbox.disabled = true
      expect(checkbox.getAttribute('aria-disabled')).to.equal('true')
      expect(checkbox.hasAttribute('tabindex')).to.be.false
      expect(checkbox.disabled).to.be.true

      // Enable checkbox
      checkbox.disabled = false
      expect(checkbox.getAttribute('aria-disabled')).to.equal('false')
      expect(checkbox.getAttribute('tabindex')).to.equal('0')
      expect(checkbox.disabled).to.be.false
    })

    it('should handle truthy/falsy values for .disabled', () => {
      // Default state
      expect(checkbox.disabled).to.be.false

      // Set disabled attribute to be equal to zero
      checkbox.disabled = '0'
      expect(checkbox.getAttribute('aria-disabled')).to.equal('true')
      expect(checkbox.disabled).to.be.true

      // Set disabled attribute to be equal to undefined
      checkbox.disabled = undefined
      expect(checkbox.getAttribute('aria-disabled')).to.equal('false')
      expect(checkbox.hasAttribute('disabled')).to.be.false
      expect(checkbox.disabled).to.be.false

      // Set disabled attribute to be equal to '1'
      checkbox.disabled = 1
      expect(checkbox.getAttribute('aria-disabled')).to.equal('true')
      expect(checkbox.hasAttribute('disabled')).to.be.true
      expect(checkbox.disabled).to.be.true
    })

    it('should toggle .disabled, [aria-disabled] when setting [disabled]', () => { 
      // Default state
      expect(checkbox.hasAttribute('disabled')).to.be.false
      
      // Set attribute disabled
      checkbox.setAttribute('disabled', '')
      expect(checkbox.getAttribute('aria-disabled')).to.equal('true')
      expect(checkbox.disabled).to.be.true

      // Remove attribute disabled
      checkbox.removeAttribute('disabled');
      expect(checkbox.getAttribute('aria-disabled')).to.equal('false')
      expect(checkbox.disabled).to.be.false
    })
  })
})  

/**
 * Functions appends two text fields and create connection bridge between them and checkbox
 * 
 * @param {GmailConnectedCheckbox} _checkbox 
 * @param {HTMLElement} _scratch 
 */
function addTextFields(_checkbox, _scratch) {
  // Primary text field
  const _primaryTextField = document.createElement('input')
  _scratch.appendChild(_primaryTextField)
  _checkbox.primaryTextField = _primaryTextField

  // Escrot Text field
  const _escortTextField = document.createElement('input')
  _scratch.appendChild(_escortTextField)
  _checkbox.escortTextField = _escortTextField
}
