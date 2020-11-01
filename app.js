// Import Module
import Model from './src/Model.js'
import View from './src/View.js'
import Controller from './src/Controller.js'

// Form Container
const form = document.querySelector('form')
const input = form.querySelector('input')

// Handling Form Submit
form.onsubmit = e => {
	e.preventDefault()

	// Add Todo To List
	app.save(input.value)
	check()

	// Reset
	input.value = ''
}

// Delete Button Container
const button = document.querySelector('button')

// Disable Button If Empty Todo
const check = () => {
	app.count() ? button.removeAttribute('disabled', 'disabled') : button.setAttribute('disabled', 'disabled')
}

// Handling Delete Button
button.onclick = () => {
	app.delete() 
	check()
}

// Get Todos From Local Storage
const todos = JSON.parse(localStorage.getItem('todos')) || []

// Initiate Model
const model = new Model(todos)

// Initiate View
const list = document.querySelector('ul')
const view = new View(list)

// Initiate Controller & Check Todo
const app = new Controller(model, view)
check()