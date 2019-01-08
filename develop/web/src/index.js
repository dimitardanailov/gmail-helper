window.onload = function() {
  WebComponents.waitFor(async () => {
    if (!window.fetch) await require('whatwg-fetch/fetch')

    return require('./components/GmailHelper')
  })
}
