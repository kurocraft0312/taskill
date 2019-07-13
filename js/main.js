//todoアプリの部分
const vm = new Vue({
    el:'#app',
    data: {
        btnDisplay:false,//デフォルトはTodo追加欄を非表示
        items: [],
        newItemTitle:''
    },
    methods: {
        displayTodo: function(){//テキストボックスの表示操作
            this.btnDisplay = true;
        },
        addTodo: function(newTitle){
            this.items.push({
                title:newTitle,
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
            localStorage.setItem('items',JSON.stringify(this.items));
        },
        loadTodo: function(){
            this.items = JSON.parse(localStorage.getItem('items'));
            if(!this.items){
                this.items = [];
            }
        },
    },
        mounted: function(){
            this.loadTodo();
        },
})