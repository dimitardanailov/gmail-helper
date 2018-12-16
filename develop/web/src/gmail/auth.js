import { google } from 'googleapis'
// import { credentials } from '../config/oauth/credentials'

export function authenticationURL() {
	// const { client_secret, client_id, redirect_uris } = credentials.installed

	const oauth2Client = new google.auth.OAuth2(
		'client_id',
		'client_secret',
		'redirect_uris'
	);

	const scopes = 'https://www.googleapis.com/auth/gmail.readonly'

	const url = oauth2Client.generateAuthUrl({
		// 'online' (default) or 'offline' (gets refresh_token)
		access_type: 'offline',
	
		// If you only need one scope you can pass it as a string
		scope: scopes
	})

	return url
}