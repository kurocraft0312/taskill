//ローカルストレージ API 
var STORAGE_KEY = 'todos-vuejs-demo'
var todoStorage = {
    fetch: function() {
        var todos = JSON.parse(
            localStorage.getItem(STORAGE_KEY) || '[]'
        )
        todos.forEach(function(todo, index){
            todo.id = index
        })
        todoStorage.uid = todos.length
        return todos
    },
    save:function(todos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    }
}

//todoアプリの部分
const app = new Vue({
    el:'#app',
    data: {
        // items: [
        //     {"id":1,"comment":"新しいToDo1","state":0},
        //     {"id":2,"comment":"新しいToDo2","state":0}
        // ]
    },
    methods: {

    }
})