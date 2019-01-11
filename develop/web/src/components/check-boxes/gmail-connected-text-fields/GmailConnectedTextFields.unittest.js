import { expect } from 'chai'
import { GmailConnectedTextFields } from './GmailConnectedTextFields'

describe('gmail-connected-text-fields', () => {
  // This will hold a parent element
  let container

  // This will hold the actual element under test.
  let scratch

  let connectedTextField 

  let labelTextNode = 'Label'

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
    const element = new GmailConnectedTextFields()
    element.labelTextNode = labelTextNode
    scratch.appendChild(element)
    await testingHelper.waitForElement('gmail-connected-text-fields')
    connectedTextField = scratch.querySelector('gmail-connected-text-fields')
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

  it('gmail-connected-text-fields and children should be define', () => {
    // Wrapper
    expect(connectedTextField instanceof GmailConnectedTextFields).to.be.true
    
    // First child -> Label
    expect(connectedTextField.label instanceof HTMLLabelElement).to.be.true
    expect(connectedTextField.label.innerText).to.equal(labelTextNode)

    // Second child -> GmailConnectedCheckbox
    expect(connectedTextField.checkBox.constructor.name).to.equal('GmailConnectedCheckbox')
    expect(connectedTextField.checkBox.checked).to.be.false
  })
}) 
