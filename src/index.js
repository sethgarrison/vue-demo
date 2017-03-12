import Vue from 'vue';
import VueRouter from 'vue-router';

//COMPONENTS
import App from './App.vue';
import markdown from './markdown-editor/markdown.vue';
import todo from './todo-list/todo-list.vue';
import gallery from './gallery/gallery.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/markdown', component: markdown },
    { path: '/todo', component: todo},
    { path: '/gallery', component: gallery},
];

const router = new VueRouter({
    routes
});

new Vue({
    render: createElement => createElement(App),
    router
}).$mount('#app');