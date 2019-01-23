/* eslint-disable no-unused-expressions */
import {
  fixture,
  expect,
} from '@open-wc/testing'

import { GmailAuthorizeButton } from './GmailAuthorizeButton'

describe('gmail-authorize-button', () => {
  it('gmail-authorize-button should be define', async () => {
    const el = await fixture('<gmail-authorize-button></gmail-authorize-button>') 

    expect(el instanceof GmailAuthorizeButton).to.be.true
    expect(el.getAttribute('role')).to.equal('button')
  })
})


