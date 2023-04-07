import Vue from 'vue'
import VueRouter from 'vue-router';
import ParamView from "@/views/ParamView.vue";
import ExecuteView from "@/views/ExecuteView.vue";
import HomeView from "@/views/HomeView.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        children: [
            {
                path: 'param',
                name: 'param',
                component: ParamView
            },
            {
                path: 'execute',
                name: 'execute',
                component: ExecuteView
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
