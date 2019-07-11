//todoアプリの部分
const vm = new Vue({
    el:'#app',
    data: {
    //     counter:0
    // },
    // methods: {
    //     add:function(){
    //         this.counter++
    //     },
        items: [
            {title:'ごはんを作る',isChecked:true},
            {title:'掃除をする',isChecked:true},
            {title:'買い物する',isChecked:false},
            {title:'洗濯する',isChecked:false},
            {title:'寝る',isChecked:false},
        ]
    },
})