import Vue from 'vue'
import VueRouter from 'vue-router';
import ExecuteView from "@/views/ExecuteView.vue";
import ResultView from "@/views/ResultView.vue";
import TestDataView from "@/views/TestDataView.vue";
import MissionView from "@/views/MissionView.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/mission',
        name: 'mission',
        component: MissionView
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
