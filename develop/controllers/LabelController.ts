// Routing Controllers Annotations
import { JsonController, Get, Controller, Param } from "routing-controllers";

import { GmailAuth } from '../gmail/GmailAuth'

@JsonController()
// Create a controller prefix for each end point
@Controller('/labels')
export class LabelController {

	constructor() {
	}

	@Get('/')
	async getAll() {
		const content = await GmailAuth.loadCredentials()
		const f = function() { return 1 }

		const promise = await GmailAuth.authorize(JSON.parse(content.toString()), f)

		return content;
	}
}
