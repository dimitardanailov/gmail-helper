import { GmailAuth } from './gmail/GmailAuth'
import { listLabels } from './gmail/label'
import { clientId } from './config/config'

(async () => {
	console.log(clientId)

	// const content = await GmailAuth.loadCredentials()

	// const oAuth2Client = await GmailAuth.authorize(JSON.parse(content.toString()))
	// const gmailLabels = await listLabels(oAuth2Client)
})()