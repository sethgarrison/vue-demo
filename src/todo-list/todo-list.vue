<template>
    <div id="todo-list">
        <button @click="clearCompleted">Clear completed</button>
        <input type="text" id="newToDo" @keypress.enter="addTodo">
        <ul>
            <todo v-for="(item,index) in items"
                  :item="item"
                  key="index">
            </todo>
        </ul>
    </div>
</template>

<script>
    import todo from './todo.vue';

    export default {
        name: 'todo-list',
        components: {
            todo
        },
        data: function() {
            return {
                items: [
                    {text: 'clean the house', completed: false},
                    {text: 'prepare the demo', completed: false},
                    {text: 'write a new song', completed: false}
                ]
            }
        },
        methods: {
            toggleComplete: function(index) {
                let todo = this.items[index];
                todo.completed = !todo.completed;
            },
            addTodo: function() {
                let input = document.getElementById('newToDo');
                if(input.value !== '') {
                    this.items.push({
                        text: input.value, completed: false
                    });
                }
                input.value = '';
            },
            clearCompleted: function() {
                this.items = this.items.filter((item)=>{
                    return !item.completed;
                });
            }
        }
    }
</script>

<style lang="scss">
    ul {
        list-style: none;
    }
    li {
        margin-top: 10px;
    }

    li .completed {
        color: grey;
    }
</style>