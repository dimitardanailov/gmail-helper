import { expect } from 'chai'
import { GmailSelectBox } from './GmailSelectBox'
import { Label } from '../../models/Label'

describe.only('gmail-select-box', () => {
  // Elements is responsible to hold the testing area of this unit
  let container

  // Element will hold the target custom web component
  let scratch

  // This will hold the actual element under tests
  let selectBoxWrapper

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
    scratch.appendChild(
      new GmailSelectBox(Label.listVisibilityOptions())
    )

    await testingHelper.waitForElement('gmail-select-box')
    selectBoxWrapper = scratch.querySelector('gmail-select-box')
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

  it('gmail-select-box should be define and option values should be equal to Label data', () => {
    // Wrapper
    expect(selectBoxWrapper instanceof GmailSelectBox).to.be.true

    // Select box
    expect(selectBoxWrapper._selectBox instanceof HTMLSelectElement).to.be.true
    
    // Options
    const options = Label.listVisibilityOptions()
    expect(selectBoxWrapper._selectBox.childNodes)
      .to.have.lengthOf(options.length)

    const option = selectBoxWrapper._selectBox.childNodes[0]
    expect(option instanceof HTMLOptionElement).to.be.true
    expect(option.getAttribute('value'))
      .to.equal(options[0]['key'])
  })
})  
