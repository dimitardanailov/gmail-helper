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

	static availableBackgroundColors() {
		return [
			'#000000', '#434343', '#666666', '#999999', '#cccccc', '#efefef', 
			'#f3f3f3', '#ffffff', '#fb4c2f', '#ffad47', '#fad165', '#16a766', 
			'#43d692', '#4a86e8', '#a479e2', '#f691b3', '#f6c5be', '#ffe6c7', 
			'#fef1d1', '#b9e4d0', '#c6f3de', '#c9daf8', '#e4d7f5', '#fcdee8', 
			'#efa093', '#ffd6a2', '#fce8b3', '#89d3b2', '#a0eac9', '#a4c2f4', 
			'#d0bcf1', '#fbc8d9', '#e66550', '#ffbc6b', '#fcda83', '#44b984', 
			'#68dfa9', '#6d9eeb', '#b694e8', '#f7a7c0', '#cc3a21', '#eaa041', 
			'#f2c960', '#149e60', '#3dc789', '#3c78d8', '#8e63ce', '#e07798', 
			'#ac2b16', '#cf8933', '#d5ae49', '#0b804b', '#2a9c68', '#285bac', 
			'#653e9b', '#b65775', '#822111', '#a46a21', '#aa8831', '#076239', 
			'#1a764d', '#1c4587', '#41236d', '#83334c'
		]
	}

	static availableColorColors() {
		return [
			'#000000', '#434343', '#666666', '#999999', '#cccccc', '#efefef', 
			'#f3f3f3', '#ffffff', '#fb4c2f', '#ffad47', '#fad165', '#16a766', 
			'#43d692', '#4a86e8', '#a479e2', '#f691b3', '#f6c5be', '#ffe6c7', 
			'#fef1d1', '#b9e4d0', '#c6f3de', '#c9daf8', '#e4d7f5', '#fcdee8', 
			'#efa093', '#ffd6a2', '#fce8b3', '#89d3b2', '#a0eac9', '#a4c2f4', 
			'#d0bcf1', '#fbc8d9', '#e66550', '#ffbc6b', '#fcda83', '#44b984', 
			'#68dfa9', '#6d9eeb', '#b694e8', '#f7a7c0', '#cc3a21', '#eaa041', 
			'#f2c960', '#149e60', '#3dc789', '#3c78d8', '#8e63ce', '#e07798', 
			'#ac2b16', '#cf8933', '#d5ae49', '#0b804b', '#2a9c68', '#285bac', 
			'#653e9b', '#b65775', '#822111', '#a46a21', '#aa8831', '#076239', 
			'#1a764d', '#1c4587', '#41236d', '#83334c'
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