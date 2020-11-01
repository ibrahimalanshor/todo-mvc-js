class View {
	constructor(list) {
		this.list = list
	}

	// Display All Todo
	displayTodos(todos) {
		// Get List
		const { list } = this

		// Remove List Data
		while (list.firstChild) {
			list.firstChild.remove()
		}

		// Check Todo Count
		if (todos.length) {
			// Display All Todo
			todos.forEach(todo => this.createTodo(todo))
		} else {
			// Create Li Element
			const li = document.createElement('li')
			li.textContent = 'Empty'

			// Display Empty Todo
			this.list.append(li)
		}

	}

	createTodo(todo) {
		// Deconstructuring Todo
		const { id, name, done } = todo

		// Create li
		const li = document.createElement('li')

		// Create Checkbox
		const checkbox = document.createElement('input')
		checkbox.id = id
		checkbox.setAttribute('type', 'checkbox')
		done ? checkbox.setAttribute('checked', 'checked') : null

		// Create Label
		const label = document.createElement('label')
		label.textContent = name
		label.setAttribute('for', id)

		// Create Button
		const button = document.createElement('button')
		button.textContent = '-'

		// Append Element To Li
		li.append(checkbox, label)

		// Append Li To List
		this.list.append(li)
	}

	// Toggle Done
	toggleDone(handler) {
		// Binding Change Event
		this.list.onchange = e => {
			// Get Id Todo
			const { id } = e.target

			// Run Handler
			handler(id)
		}
	}
	
}

export default View