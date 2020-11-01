class Controller {
	constructor(model, view) {
		this.model = model
		this.view = view

		// Render List
		this._render(this.model.todos)

		// Bind View Event
		this.view.toggleDone(this.handleToggleDone)
	}

	// Render Todos
	_render = todos => {
		this.view.displayTodos(todos)
	}

	// Save Todo
	save(name) {

		// Check If Empty
		if (!name) {
			alert('Empty')
			return false
		}

		// Check If Exists
		if (this.model.checkExist(name)) {
			alert('Todo Exists !!')
			return false
		}

		// Get Todos Length
		const { length } = this.model.todos

		// Todo Data
		const todo = {
			id: length ? length + 1 : 1,
			name: name,
			done: false
		}
		
		// Add Todo
		const todos = this.model.addTodo(todo)

		// Render
		this._render(todos)
	}

	// Delete Done Todo
	delete(){
		// Remove Todo
		const todos = this.model.removeTodo()

		// Render
		this._render(todos)
	}

	// Count Todo
	count(){
		return this.model.todos.length
	}

	// Handle Toggle Done
	handleToggleDone = id => {
		this.model.toggleDone(id)
	}
}

export default Controller