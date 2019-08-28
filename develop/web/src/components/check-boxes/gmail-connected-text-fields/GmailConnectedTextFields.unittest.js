/* eslint-disable no-unused-expressions */
import {
  fixture,
  expect,
} from '@open-wc/testing'

import GmailConnectedTextFields from './GmailConnectedTextFields'

describe('gmail-connected-text-fields', () => {

  const labelTextNode = 'Label'

  it('gmail-connected-text-fields and children should be define', async () => {
    const el = await fixture(`<gmail-connected-text-fields></gmail-connected-text-fields>`) 
    el.labelTextNode = labelTextNode

    // Wrapper
    expect(el instanceof GmailConnectedTextFields).to.be.true
    
    // First child -> Label
    expect(el.label instanceof HTMLLabelElement).to.be.true
    expect(el.label.innerText).to.equal(labelTextNode)

    // Second child -> GmailConnectedCheckbox
    expect(el.checkBox.constructor.name).to.equal('GmailConnectedCheckbox')
    expect(el.checkBox.checked).to.be.false
  })
}) 
