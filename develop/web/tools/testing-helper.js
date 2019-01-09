window.gmailComponents = {}

/**
 * `waitForElement` waits for the browser to load the defination of the custom element
 * with the name `elementName`
 * 
 * @returns a promise that resolves when the element has been defined.                                           
 */
window.gmailComponents.waitForElement = function(elementName) {
  return customElements.whenDefined(elementName)
}

/**
 * `before` is a wrapper for Mocha's `before()` function and adds a "testing area"
 * to the DOM. The container can be used to inject markup for 
 * the custom element that is supposed to be tested.
 */
window.gmailComponents.before = function() {
  const container = document.createElement('div')
  document.body.appendChild(container)

  return container
}

/**
 * `after` cleans up the "testing area" added by `before()`.
 */
window.gmailComponents.after = function(container) {
  container.remove()
  
  return null
}

