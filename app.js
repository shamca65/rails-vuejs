var app = new Vue({
    el: '#app',
    data: {
        tasks: [
            {id:1, name: 'Todo 1', description: 'This is number 1', completed: false }
            {id:2, name: 'Todo 2', description: 'This is number 2', completed: false }
            {id:3, name: 'Todo 3', description: 'This is number 3', completed: false }
            {id:4, name: 'Todo 4', description: 'This is number 4', completed: false }
        ],
        computed: {
            completedTasks: function() {
                return this.tasks.filter( item => item.completed == true );
            },
            todoTasks: function() {
                return this.tasks.filter( item => item.completed == false);
            }
        },
        message: 'hello there'
    }
})