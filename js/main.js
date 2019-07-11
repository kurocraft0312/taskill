//todoアプリの部分
const vm = new Vue({
    el:'#app',
    data: {
        items: [
            {title:'ごはんを作る',isChecked:true},
            {title:'掃除をする',isChecked:true},
            {title:'買い物する',isChecked:false},
            {title:'洗濯する',isChecked:false},
            {title:'寝る',isChecked:false},
        ],
        newItemTitle:''
    },
    methods: {
        addTodo: function(newItemTitle){
            this.items.push({
                title:newItemTitle,//this.newItemTitleじゃなくなると表示がバグる「object KeyboardEvent」と描画される
                isChecked:false
            });
            this.newItemTitle = '';
            this.saveTodo();
        },
        deleteTodo: function(){
            this.items = this.items.filter(function(item){
                return item.isChecked === false;
            });
            this.saveTodo();
        },
        saveTodo: function(){
            localStorage.setItem('Items',JSON.stringify(this.items));
        },
        loadTodo: function(){
            this.items = JSON.parse(localStorage.getItem('items'));
            if(!this.items){
                this.items = [];
            }
        },
        mounted: function(){
            this.loadTodo();
        },
    }
    
})