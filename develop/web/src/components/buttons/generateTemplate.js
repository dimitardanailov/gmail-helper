function generateTemplate(buttonText) {
	const template = document.createElement('template')

	template.innerHTML = `
		<style>
			:host {
				position: relative;

				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;
			}

			span {
				position: relative;
				cursor: pointer;

				padding: 1em;

				background: #000;
				color: #fff;
				font-size: 1.4em;

				border-radius: 12.5%;

				border: .1em solid #fff;
			}

			span:hover {
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