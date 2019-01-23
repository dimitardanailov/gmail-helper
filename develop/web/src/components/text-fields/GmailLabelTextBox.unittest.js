/* eslint-disable no-unused-expressions */
import {
  fixture,
  expect,
} from '@open-wc/testing'

import { GmailLabelTextBox } from './GmailLabelTextBox'

describe('gmail-label-text-box', () => {
  it('gmail-label-text-box and child should be define', async () => {
    const el = await fixture('<gmail-label-text-box></gmail-label-text-box>') 
    expect(el instanceof GmailLabelTextBox).to.be.true
  })
})
