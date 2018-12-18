import { clientId, apiKey, scopes, discovery_docs } from '../config/config'

export function initClient() {
	return gapi.client.init({
		apiKey: apiKey,
		clientId: clientId,
		discoveryDocs: discovery_docs,
		scope: scopes
	})
}