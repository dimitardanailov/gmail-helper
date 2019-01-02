function generateTemplate(buttonText) {
	const template = document.createElement('template')

	template.innerHTML = `
		<style>
			:host {
				position: relative;
				cursor: pointer;

				display: flex;
				padding: .5em;

				background: #000;
				color: #fff;
				font-size: 1.3em;

				border-radius: 5px;
			}

			:host:hover {
				background: #fff;
				color: #000;
				border: .1em solid #000;
			}
		</style>
		
		<span>${buttonText}</span>
	`

	return template
}

export default generateTemplate