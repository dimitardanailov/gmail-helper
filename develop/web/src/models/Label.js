export class Label {
	get id() {
		return this._id
	}

	set id(newValue) {
		this._id = newValue
	}
	
	get name() {
    return this._name
  }

  set name(newValue) {
    this._name = newValue
	}
	
	get labelListVisibility() {
		return this._labelListVisibility
	}

	set labelListVisibility(newVaue) {
		this._labelListVisibility = newVaue
	}

	set color(newValue) {
		this._color = newValue
	}

	setResponseValues(response) {
		this.id = response.id
		this.name = response.name
		this.labelListVisibility = response.labelListVisibility
	}

	static listVisibilityOptions() {
		return [
			{
				key: 'labelHide',
				textValue: 'labelHide'
			},
			{
				key: 'labelShow',
				textValue: 'labelShow'
			},
			{
				key: 'labelShowIfUnread',
				textValue: 'labelShowIfUnread'
			}
		]
	}

	static convertRawLabelToModel(rawLabel) {
		const label = new Label()
		label.id = rawLabel.id
		label.name = rawLabel.name
		label.labelListVisibility = rawLabel.labelListVisibility

		return label
	}

	static convertRawLabelDataToModelData(rawLabels) {
		const labels = []

		rawLabels.forEach(label => {
			labels.push(Label.convertRawLabelToModel(label))
		})

		return labels
	}

	static findLabelByQuery(labels, query) {
		query = query.toLowerCase()
		const response = labels.filter(label => label.name.toLowerCase() === query)	

		return (response.length > 0) ? response[0]: null
	}
}