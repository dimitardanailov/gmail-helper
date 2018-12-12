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
		return 'test';
	}
}
