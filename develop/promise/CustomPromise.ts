import { AppLogger } from '../logger/AppLogger'

export class CustomPromise {
	static loadRejection(reject: Function, err) {
		AppLogger.promiseError(err)
		reject(err)
	}
}