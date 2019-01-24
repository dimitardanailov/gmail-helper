/* eslint-disable no-unused-expressions */
import {
  html,
  fixture,
  expect,
} from '@open-wc/testing'

import { FormSubmitButton } from './FormSubmitButton'

describe('form-submit-button', () => {
  const textValues = {
    defaultState: 'Default state',
    activeState: 'Active state'
  }

  let el

  beforeEach(async () => {
    el = await fixture(html`<form-submit-button .textValues=${textValues}></form-submit-button>`) 
  })

  it('form-submit-button should be define and light dom should be equal to template', async () => {
    expect(el instanceof FormSubmitButton).to.be.true

    const template = `
    <form-submit-button>
      <input type="submit" role="button" value="${textValues.defaultState}">
    </form-submit-button>`

    expect(el).dom.to.equal(template)
  })

  it('form-submit-button should handle truthy/falsy values for .disabled', async () => {
    // Active state
    el.disabled = true
    expect(el._button.getAttribute('value')).to.equal(textValues.activeState)
    expect(el._button.getAttribute('disabled')).to.equal('disabled')

    // Default state
    el.disabled = false
    expect(el._button.getAttribute('value')).to.equal(textValues.defaultState)
    expect(el._button.getAttribute('disabled')).to.null
  })
})
