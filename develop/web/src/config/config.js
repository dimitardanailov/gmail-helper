export const clientId = process.env.Client_ID
export const apiKey = process.env.API_KEY

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
export const scopes = [
	'https://www.googleapis.com/auth/gmail.readonly',
	'https://www.googleapis.com/auth/gmail.labels',
	'https://www.googleapis.com/auth/gmail.settings.basic'
].join(' ')

// Array of API discovery doc URLs for APIs used by the quickstart
export const discovery_docs = ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest']
