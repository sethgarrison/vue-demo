<template>
    <div id="app">
        <h1>Vue.js demo!!!</h1>
        <ul>
            <li>
                <router-link to="/markdown">Markdown Editor</router-link>
                <router-link to="/todo">To do list</router-link>
                <router-link to="/gallery">Gallery</router-link>
            </li>
        </ul>

        <card>
            <div slot="footer">I am a slotted thing</div>
        </card>

        <router-view></router-view>
    </div>
</template>

<script>

    import card from './card.vue';

    export default {
        name: 'app',
        components: {
            card
        },
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 0;
    }

    ul {
        margin: 0;
        padding: 0;
    }
</style>