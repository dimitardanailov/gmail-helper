import { GmailAuth } from './GmailAuth'
import { CustomPromise } from '../promise/CustomPromise'

/**
 * Lists the labels in the user's account.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
export async function listLabels(auth) {
  const gmail = GmailAuth.authMe(auth)

	const promise = new Promise((resolve, reject) => {
		gmail.users.labels.list({ userId: 'me' }, (err, res) => {
      if (err) {
        CustomPromise.loadRejection(reject, `The API returned an error: ${err}`)
      }

      resolve(res.data.labels)
    })
  })
  
  return promise
}