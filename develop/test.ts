import { GmailAuth } from './gmail/GmailAuth'
import { listLabels } from './gmail/label'

(async () => {
	const oAuth2Client = await GmailAuth.authorize()
	const gmailLabels = await listLabels(oAuth2Client)
	console.log(gmailLabels)
})()