window.onload = function() {
	WebComponents.waitFor(async () => {
		// if (!window.fetch) await import('whatwg-fetch/fetch')

		return require('./components/GmailHelper')
	})
}