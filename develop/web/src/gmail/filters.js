/**
 * https://developers.google.com/gmail/api/v1/reference/users/settings/filters
 */

export async function listFilters() {
  const promise = new Promise(resolve => {
    gapi.client.gmail.users.settings.filters.list({
      'userId': 'me'
    }).then(response => {
      resolve(response.result.filter)
    })
  })

  return promise
}

export async function createFilter(query, labelId) {
  const promise = new Promise((resolve, reject) => {
    gapi.client.gmail.users.settings.filters.create({
      'userId': 'me',
      'resource': {
        'action': {
          'addLabelIds': [labelId]
        },
        'criteria': {
          'query': query
        }
      }
    }).then(response => {
      resolve(response.result)
    }).catch(error => {
      reject(error)
    })
  })

  return promise
}