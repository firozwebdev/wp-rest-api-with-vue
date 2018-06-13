//var app = Vue.extend({});

var postList = Vue.extend({
    template: "#post-list-template"
});

const routes = [
    { path: '/', component: postList }
];

const router = new VueRouter({
    routes: routes
});


const app = new Vue({
    router
}).$mount('#app');