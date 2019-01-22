import { expect } from 'chai'
import { GmailLabelBackgroundColor } from './GmailLabelBackgroundColor'

const bgColor = '#000000'

describe('gmail-label-background-color', () => {
  // Elements is responsible to hold the testing area of this unit
  let container

  // Element will hold the target custom web component
  let scratch

  // This will hold the actual element under tests
  let radio

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
    scratch.appendChild(new GmailLabelBackgroundColor(bgColor))
    await testingHelper.waitForElement('gmail-label-background-color')
    radio = scratch.querySelector('gmail-label-background-color')
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

  it('should add a [role] to the radio', () => {
    expect(radio.getAttribute('role')).to.equal('radio')
  })

  it('should tabindex to be equal to -1', () => {
    expect(radio.getAttribute('tabindex')).to.equal('-1')
  })

  it('should bgColor attribute to be equal to black', () => {
    expect(radio._bgColor).to.equal(bgColor)
  })
})
