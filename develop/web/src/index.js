import { GmailHelper } from './components/GmailHelper'

window.onload = function() {
	let helper = new GmailHelper()
	document.getElementById('app')
		.appendChild(helper)
}