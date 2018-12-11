import fs = require('fs');
import readline = require('readline')
import { google } from 'googleapis'
import { CustomPromise } from '../promise/CustomPromise';
import { resolve } from 'url';
import { AppLogger } from '../logger/AppLogger';
import { rejects } from 'assert';

const TOKEN_PATH = 'token.json'

export class GmailAuth {

	static async loadCredentials(): Promise<Object> {
		const location = 'credentials.json'

		// Load client secrets from a local file.
		const promise = new Promise((resolve, reject) => {
			fs.readFile(location, (err, content) => {
				if (err) { 
					CustomPromise.loadRejection(reject, err)
					return
				}

				resolve(content)
			})
		})

		return promise
	}

	/**
 	* Create an OAuth2 client with the given credentials, and then execute the
  * given callback function.
  * @param {Object} credentials The authorization client credentials.
  * @param {function} callback The callback to call with the authorized client.
  */
  static async authorize(credentials) {
		const { client_secret, client_id, redirect_uris} = credentials.installed
		const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0])

		const promise = new Promise((resolve, reject) => {
			// Check if we have previously stored a token.
			fs.readFile(TOKEN_PATH, (err, token) => {
				if (err) { 
					// return getNewToken(oAuth2Client)
					reject(err)
					return
				}

				resolve(oAuth2Client)
			})
		})

		return promise
	}
}

/**
 * Get and store new token after prompting for user authorization
 * 
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 */
function getNewToken(oAuth2Client) {
	// If modifying these scopes, delete token.json.
	const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly']

	const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
	})
	
	AppLogger.info(`Authorize this app by visiting this url: ${authUrl}`)

	const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
	})

	rl.question('Enter the code from that page here: ', code => {
    rl.close();
		
		console.log(code)
  })
}