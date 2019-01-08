function generateTemplate(placeHolderText) {
  const template = document.createElement('template')

  template.innerHTML = `
		<style>
			:host {
				position: relative;

				display: flex;

				text-indent: 1em;

				margin-bottom: .1em;
			}

			input {
				position: relative;

				display: inline-block;
				width: 100%;
				padding: .6em 0;

				text-indent: 1em;

				border-radius: .5em;
				font-size: 1.4em;
			}
		</style>

		<input id="input" type="text" role="textbox" placeholder="${placeHolderText}" />
	`

  return template
}

export default generateTemplate