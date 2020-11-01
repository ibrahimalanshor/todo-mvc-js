class Model {
	constructor(todos) {
		this.todos = todos
	}

	// Save Todos To Local Storage
	_save() {
		localStorage.setItem('todos', JSON.stringify(this.todos))
	}

	// Add New Todo
	addTodo(todo) {
		// Push Todo To Todos
		this.todos.push(todo)

		// Save Todo
		this._save()

		// Return Todos
		return this.todos

	}

	// Remove Todo
	removeTodo() {
		// Get Undone Todo
		const todos = this.todos.filter(todo => !todo.done)

		// Update Todos
		this.todos = todos

		// Save Todo
		this._save()

		// Return Todos
		return this.todos
	}

	// Toggle Done
	toggleDone(id) {
		// Get Todos
		const { todos } = this

		// Get Index Todo 
		const index = todos.findIndex(todo => todo.id == id)

		// Toggle Done
		todos[index].done = !todos[index].done

		// Save Todo
		this._save()
	}

	// Check Exists
	checkExist(name) {
		return this.todos.some(todo => todo.name === name)
	}
	
}

export default Model