function generateTemplate(placeHolderText) {
	const template = document.createElement('template')

	template.innerHTML = `
		<style>
			:host {
				position: relative;

				display: flex;

				margin-bottom: .1em;
			}

			input {
				position: relative;

				padding: .6em 0;

				border-radius: .5em;
				font-size: 1.4em;
			}
		</style>

		<input type="text" role="textbox" placeholder="${placeHolderText}" />
	`

	return template
}

export default generateTemplate