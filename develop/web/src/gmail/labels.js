export async function listLabels() {
	const promise = new Promise(resolve => {
		gapi.client.gmail.users.labels.list({
			'userId': 'me'
		}).then(response => {
			resolve(response.result.labels)
		})
	})

	return promise
}

/**
 * Method tries to create a new label. 
 * Note: Label should doesn't exist at gmail
 * If label exists response will be equal to status code: `409` with 
 * `errorMessage`: Label name exists or conflicts
 * 
 * Resources:
 * https://developers.google.com/gmail/api/v1/reference/users/labels/create
 * https://stackoverflow.com/questions/35671807/gapi-client-gmail-users-labels-create-gives-invalidargument-error
 * 
 * @param {Label} label 
 * 
 * @returns {Object} keys are: { id, labelListVisibility, messageListVisibility, name }
 */
export async function createLabel(label) {
	const promise = new Promise((resolve, reject) => {
		gapi.client.gmail.users.labels.create({
			'userId': 'me',
			'resource': {
				'name': label.name,
				'labelListVisibility': label.labelListVisibility
			}
		}).then(response => {
			resolve(response.result)
		}).catch(error => {
			reject(error)
		})
	})

	return promise
}