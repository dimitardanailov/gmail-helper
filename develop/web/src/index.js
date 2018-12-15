require('./GmailHelper')

window.onload = function() {
	const body = document.getElementsByTagName('body')[0]
	body.appendChild(document.createElement('gmail-helper'))
}