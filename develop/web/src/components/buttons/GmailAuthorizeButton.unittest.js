import { expect } from 'chai'
import { GmailAuthorizeButton } from './GmailAuthorizeButton'

describe('gmail-authorize-button', () => {
  // Elements is responsible to hold the testing area of this unit
  let container

  // Element will hold the target custom web component
  let scratch

  // This will hold the actual element under tests
  let button

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
    scratch.appendChild(new GmailAuthorizeButton())
    await testingHelper.waitForElement('gmail-authorize-button')
    button = scratch.querySelector('gmail-authorize-button')
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

  it('gmail-authorize-button should be define', () => {
    expect(button instanceof GmailAuthorizeButton).to.be.true

    expect(button.getAttribute('role')).to.equal('button')
  })
})


