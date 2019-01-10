import { expect } from 'chai'
import { GmailConnectedCheckbox } from './GmailConnectedCheckbox'

describe('gmail-connected-checkbox', () => {
  // This will hold a parent element
  let container

  // This will hold the actual element under test.
  let scratch

  let checkbox

  before(done => {
    container = testingHelper.before()

    done()
  })

  beforeEach(done => {
    scratch = document.createElement('div')
    container.appendChild(scratch)

    done()
  })

  beforeEach(function() {
    scratch.appendChild(new GmailConnectedCheckbox())
    return testingHelper.waitForElement('gmail-connected-checkbox')
      .then(_ => {
        checkbox = scratch.querySelector('gmail-connected-checkbox')
      })
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

  it('should add a [role] to the checkbox', function() {
    expect(checkbox.getAttribute('role')).to.equal('checkbox')
  })

  it('should add a [tabindex] to the checkbox', function() {
    expect(checkbox.getAttribute('tabindex')).to.equal('0')
  })
})  
