import Vue from 'vue'
import VueRouter from 'vue-router';
import ParamView from "@/views/ParamView.vue";
import ExecuteView from "@/views/ExecuteView.vue";
import ResultView from "@/views/ResultView.vue";
import TestDataView from "@/views/TestDataView.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/param',
        name: 'param',
        component: ParamView
    },
    {
        path: '/execute',
        name: 'execute',
        component: ExecuteView
    },
    {
        path: '/result',
        name: 'result',
        component: ResultView
    },
    {
        path: '/testdata',
        name: 'testdata',
        component: TestDataView
    }
]

const router = new VueRouter({
    routes
})

export default router
