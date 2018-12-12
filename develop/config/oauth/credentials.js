import { clientId, clientSecret } from '../config'

export const credentials = {
	installed : {
		client_id: clientId,
		project_id: 'gmailhelper-1539435616356',
		auth_uri: 'https://accounts.google.com/o/oauth2/auth',
		token_uri: 'https://www.googleapis.com/oauth2/v3/token',
		auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
		client_secret: clientSecret,
		redirect_uris: [
			'urn:ietf:wg:oauth:2.0:oob',
			'http://localhost'
		]
	}
}