/* eslint-disable no-unused-expressions */
import {
  html,
  fixture,
  expect,
} from '@open-wc/testing'

import './GmailLabelColor'

const color = '#000000'

const template = `
<gmail-label-color role="radio" style="--color:${color};" tabindex="-1">
</gmail-label-color>`

describe('gmail-label-color', () => {
  let el

  beforeEach(async () => {
    el = await fixture(html`<gmail-label-color .color=${color}></gmail-label-color`)
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

  it('should color attribute to be equal to black', () => {
    expect(el.color).to.equal(color)
  })
})
