window.todoStore = {
    todos: JSON.parse(localStorage.getItem('todo-store') || '[]'),
    
    setWatchers() {
        this.$watch('todos', () => {
            localStorage.setItem('todo-store', JSON.stringify(this.todos))
        })

        this.$watch('selectedTheme', () => {
            localStorage.theme = this.selectedTheme
            if(this.selectedTheme == 'dark') {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        })
    }
}

window.todoApp = () => {
    return {
        ...todoStore,
        newTodo: '',
        editingTodo: null,
        filter: 'all',
        selectedTheme: localStorage.theme,

        addNewTodo() {
            if (this.newTodo.trim() !== '') {
                this.todos.push({
                    id: Date.now(),
                    title: this.newTodo,
                    completed: false,
                })
    
                this.newTodo = ''
            }
        },

        deleteTodo(todo) {
            this.todos.splice(this.todos.indexOf(todo), 1)
        },

        editTodo(todo) {
            this.editingTodo = todo
            todo.oldTitle = todo.title
        },

        completeEditTodo(todo) {
            if (todo.title.trim() === '') {
                this.removeTodo(todo)
            }
            this.editingTodo = null
        },

        cancelEditTodo(todo) {
            this.editingTodo = null
            todo.title = todo.oldTitle
            delete todo.oldTitle
        },

        toggleAll() {
            let isAllCompleted = this.isAllCompleted
            this.todos.map(todo => todo.completed = !isAllCompleted)
        },

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
        },

        get isAllCompleted() {
            return this.todos.length === this.completedTodos.length
        },

        // get isDarkTheme() {
        //     return localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        // }
    }
}