import { expect } from 'chai'
import { GmailFilterTextBox } from './GmailFilterTextBox'

describe('gmail-filter-text-box', () => {
  // Elements is responsible to hold the testing area of this unit
  let container

  // Element will hold the target custom web component
  let scratch

  // This will hold the actual element under tests
  let textBoxWrapper

  before(done => {
    container = testingHelper.before()

    done()
  })

  beforeEach(done => {
    scratch = document.createElement('div')
    container.appendChild(scratch)

    done()
  })

  beforeEach(async () => {
    scratch.appendChild(new GmailFilterTextBox())
    await testingHelper.waitForElement('gmail-filter-text-box')
    textBoxWrapper = scratch.querySelector('gmail-filter-text-box')
  })

  afterEach(done => {
    scratch = null

    done()
  })

  after(done => {
    container = testingHelper.after(container)
    scratch = null

    done()
  })

  it('gmail-filter-text-box and child should be define', () => {
    expect(textBoxWrapper instanceof GmailFilterTextBox).to.be.true

    // expect(button.getAttribute('role')).to.equal('button')
  })
})
