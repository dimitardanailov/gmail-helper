import { GmailAuth } from './gmail/GmailAuth'
import { google } from 'googleapis'

(async () => {
	const content = await GmailAuth.loadCredentials()

	const oAuth2Client = await GmailAuth.authorize(JSON.parse(content.toString()))

	console.log(oAuth2Client)
})()