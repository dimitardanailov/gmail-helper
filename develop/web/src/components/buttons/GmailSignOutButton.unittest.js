import { expect } from 'chai'
import { GmailSignOutButton } from './GmailSignOutButton'

describe('gmail-sign-out-button', () => {
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
    scratch.appendChild(new GmailSignOutButton())
    await testingHelper.waitForElement('gmail-sign-out-button')
    button = scratch.querySelector('gmail-sign-out-button')
  })

  afterEach(done => {
    scratch = null

    done()
  })

  it('gmail-sign-out-button should be define', () => {
    expect(button instanceof GmailSignOutButton).to.be.true

    expect(button.getAttribute('role')).to.equal('button')
  })
})
