/* eslint-disable no-unused-expressions */
import {
  html,
  fixture,
  expect,
} from '@open-wc/testing'

import { GmailSelectBox } from './GmailSelectBox'

import { Label } from '../../models/Label'

describe('gmail-select-box', () => {
  
  it.only('gmail-select-box should be define and option values should be equal to Label data', async () => {
    const options = Label.listVisibilityOptions()
    const el = await fixture(html`<gmail-select-box .optionValues=${options}></gmail-select-box`)

    // Wrapper
    expect(el instanceof GmailSelectBox).to.be.true

    // Select box
    expect(el.selectBox instanceof HTMLSelectElement).to.be.true
    
    // Options
    expect(el.selectBox.childNodes).to.have.lengthOf(options.length)

    const option = el.selectBox.childNodes[0]
    expect(option instanceof HTMLOptionElement).to.be.true
    expect(option.getAttribute('value')).to.equal(options[0]['key'])
  })
})  
