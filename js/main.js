//todoアプリの部分
const vm = new Vue({
    el:'#app',
    data: {
        //itemsにリストを配列として並べ、dataオプションで表示する
        items: [
            {title:'項目1',id:1},
            {title:'項目2',id:2},
            {title:'項目3',id:3},
        ]
    },
})