<template>
    <li>
        <input type="checkbox" v-model="item.completed">
        <span :class="{completed: item.completed}">{{ item.text }}</span>
    </li>
</template>

<script>
    export default {
        name: 'todo',
        props: ['item']
    }
</script>

<style>
    li .completed {
        color: grey;
    }
</style>