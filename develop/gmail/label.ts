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

/**
 * Add a new Label to user's mailbox.
 *
 * @param  {String} userId User's email address. The special value 'me'
 * can be used to indicate the authenticated user.
 * @param  {String} newLabelName Name of the new Label.
 * @param  {Function} callback Function to call when the request is complete.
 */
function createLabel(auth) {
  const gmail = google.gmail({version: 'v1', auth});
  gmail.users.labels.create({
    'userId': 'me',
    'label': {
      'name': 'HelloWorld'
    }
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    
    console.log(res);
  });
}