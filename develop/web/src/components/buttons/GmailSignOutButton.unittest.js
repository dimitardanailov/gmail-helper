/* eslint-disable no-unused-expressions */
import {
  fixture,
  expect,
} from '@open-wc/testing'

import { GmailSignOutButton } from './GmailSignOutButton'

describe('gmail-sign-out-button', () => {
  it('gmail-sign-out-button should be define', async () => {
    const el = await fixture('<gmail-sign-out-button></gmail-sign-out-button>') 

    expect(el instanceof GmailSignOutButton).to.be.true
    expect(el.getAttribute('role')).to.equal('button')
  })
})
