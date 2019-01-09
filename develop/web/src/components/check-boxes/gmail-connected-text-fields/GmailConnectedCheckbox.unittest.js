import chai from 'chai'
import { GmailConnectedCheckbox } from './GmailConnectedCheckbox'

(function() {
  // const expect = chai.expect

  describe('gmail-connected-checkbox', () => {
    
    let container
    let checkbox

    before(done => {
      container = gmailComponents.before(done)
      done()
    })

    beforeEach(() => {
      container.appendChild(new GmailConnectedCheckbox())

      return gmailComponents.waitForElement('gmail-connected-checkbox')
        .then(_ => {
          checkbox = container.querySelector('gmail-connected-checkbox')
          console.log(checkbox)
        })
    })

    after(done => {
      container = gmailComponents.after(container)

      done()
    })

    it('should add a [role] to the checkbox', () => {
      console.log(container)
    })
  })

})()
