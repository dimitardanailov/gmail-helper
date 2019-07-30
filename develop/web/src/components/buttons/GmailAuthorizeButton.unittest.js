/* eslint-disable no-unused-expressions */
import {
  fixture,
  expect,
} from '@open-wc/testing'

import { GmailAuthorizeButton } from './GmailAuthorizeButton'

describe('gh-authorize-button', () => {
  it('gh-authorize-button should be define', async () => {
    const el = await fixture('<gh-authorize-button></gh-authorize-button>') 

    expect(el instanceof GmailAuthorizeButton).to.be.true
    expect(el.getAttribute('role')).to.equal('button')
  })
})


