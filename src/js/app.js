window.todoStore = {
    todos: JSON.parse(localStorage.getItem('todo-store') || '[]'),
    
    isToggledAll: JSON.parse(localStorage.getItem('isToggledAll') || 'false'),

    save() {
        localStorage.setItem('todo-store', JSON.stringify(this.todos))
    }
}
window.todoApp = () => {
    return {
        ...todoStore,
        newTodo: '',
        editingTodo: null,
        filter: 'all',

        addNewTodo() {
            if (this.newTodo.trim() !== '') {
                this.todos.push({
                    id: Date.now(),
                    title: this.newTodo,
                    completed: false,
                })
                this.save()
    
                this.newTodo = ''
            }
        },

        deleteTodo(todo) {
            this.todos.splice(this.todos.indexOf(todo), 1)
            this.save()
        },

        editTodo(todo) {
            this.editingTodo = todo
            todo.oldTitle = todo.title

            this.save()
        },

        completeEditTodo(todo) {
            if (todo.title.trim() === '') {
                this.removeTodo(todo)
            }
            this.editingTodo = null

            this.save()
        },

        cancelEditTodo(todo) {
            this.editingTodo = null
            todo.title = todo.oldTitle
            delete todo.oldTitle

            this.save()
        },

        toggleAll() {
            this.todos.map(todo => todo.completed = !this.isToggledAll)
            localStorage.setItem('isToggledAll', JSON.stringify(!this.isToggledAll))
            this.save()
        },

        // clearCompleted() {
        //     this.completedTodos.map(todo => this.removeTodo(todo))
        // },

        get activeTodos() {
            return this.todos.filter(todo => !todo.completed)
        },

        get completedTodos() {
            return this.todos.filter(todo => todo.completed)
        },

        get filteredTodos() {
            return {
                all: this.todos,
                active: this.activeTodos,
                completed: this.completedTodos
            }[this.filter];
        }
    }
}