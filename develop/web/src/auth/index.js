import MailHelperRouter from '../components/router/MailHelperRouter'
import { clientId, apiKey, scopes, discovery_docs } from '../config/config'

class Auth {
  constructor(outlet) {
    this.outlet = outlet
    
    gapi.client.init({
      apiKey: apiKey,
      clientId: clientId,
      discoveryDocs: discovery_docs,
      scope: scopes
    })
      .then(() => this.setAuthListeners())
      .catch(error => {
        console.error(error)
      })
  }

  /**
	 * Initializes sets up sign-in state listeners.
	 */
  setAuthListeners() {
     // Listen for sign-in state changes.
     gapi.auth2.getAuthInstance().isSignedIn
      .listen(isSignedIn => this.updateSigninStatus(isSignedIn))

    // Handle the initial sign-in state.
    this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get())
  }

  /**
	 *  Called when the signed in status changes, to update the UI
	 *  appropriately. After a sign-in, the API is called.
	 */
  async updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      MailHelperRouter.loadHomePage()
    } else {
      MailHelperRouter.loadIntroPage()
    }

    MailHelperRouter.init(this.outlet)
  }
}

export default Auth
