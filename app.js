new Vue({
    el: '#app',
    data: {
        newTask: '',
        tasks: []
    },
    methods: {
        addTask() {
            if (this.newTask.trim() !== '') {
                this.tasks.push({ text: this.newTask, completed: false });
                this.newTask = ''; // Limpa o campo de entrada
            }
        },
        toggleTask(index) {
            this.tasks[index].completed = !this.tasks[index].completed;
        },
        deleteTask(index) {
            this.tasks.splice(index, 1);
        }
    }
});