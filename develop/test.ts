import { GmailAuth } from './gmail/GmailAuth'
import { google } from 'googleapis'
import { listLabels } from './gmail/label'

(async () => {
	const content = await GmailAuth.loadCredentials()

	const oAuth2Client = await GmailAuth.authorize(JSON.parse(content.toString()))
	const gmailLabels = await listLabels(oAuth2Client)
	
	console.log(gmailLabels)
})()