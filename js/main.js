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
        addTodo: function(){
            this.items.push({
                title:this.newItemTitle,
                isChecked:false
            });
            this.newItemTitle = '';
        },
    }
})