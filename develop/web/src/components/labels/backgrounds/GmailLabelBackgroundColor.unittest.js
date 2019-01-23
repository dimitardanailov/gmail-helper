/* eslint-disable no-unused-expressions */
import {
  html,
  fixture,
  expect,
} from '@open-wc/testing'

import './GmailLabelBackgroundColor'

const bgColor = '#000000'

const template = `
<gmail-label-background-color role="radio" tabindex="-1" style="--bg-color:${bgColor};">
</gmail-label-background-color>
`

describe.only('gmail-label-background-color', () => {
  let el

  beforeEach(async () => {
    el = await fixture(html`<gmail-label-background-color .bgColor=${bgColor}></gmail-label-background-color`)
  })

  it('element light-dom should be equal to template variable', () => {
    expect(el).dom.to.equal(template)
  })

  it('should add a [role] to the radio', () => {
    expect(el.getAttribute('role')).to.equal('radio')
  })

  it('should tabindex to be equal to -1', () => {
    expect(el.getAttribute('tabindex')).to.equal('-1')
  })

  it('should bgColor attribute to be equal to black', () => {
    expect(el.bgColor).to.equal(bgColor)
  })
})
