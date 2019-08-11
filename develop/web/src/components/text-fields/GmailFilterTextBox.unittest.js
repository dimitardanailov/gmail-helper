/* eslint-disable no-unused-expressions */
import {
  fixture,
  expect,
} from '@open-wc/testing'

import GmailFilterTextBox from './GmailFilterTextBox'

describe('gmail-filter-text-box', () => {
  it('gmail-filter-text-box and child should be define', async () => {
    const el = await fixture('<gmail-filter-text-box></gmail-filter-text-box>') 
    expect(el instanceof GmailFilterTextBox).to.be.true
  })
})
