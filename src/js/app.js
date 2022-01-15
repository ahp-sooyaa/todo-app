let todoApp = () => {
    return {
        tasks: [],
        newTask: '',

        addNewTask() {
            this.tasks.push({title: this.newTask})
        }
    }
}