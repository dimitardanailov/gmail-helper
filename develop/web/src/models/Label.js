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
}