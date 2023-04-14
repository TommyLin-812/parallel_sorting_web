<template>
    <div>
        <div style="margin: 5px 0">待排序数据规模：{{ param.dataQty }}</div>

        <div style="margin: 5px 0">线程数量：{{ param.threadNum }}</div>

        <div style="margin: 5px 0">执行次数：{{ param.executeTimes }}</div>

        <el-button type="primary" :loading="executing" @click="execute" style="margin: 5px 0">执行排序</el-button>

        <el-timeline>
            <el-timeline-item
                    v-for="(activity, index) in activities"
                    :key="index"
                    :timestamp="activity.timestamp">
                {{ activity.content }}
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "ExecuteView",
    data() {
        return {
            executing: false,
            param: {
                dataQty: '',
                threadNum: '',
                executeTimes: ''
            },
            activities: []
        }
    },
    mounted() {
        axios.get("http://localhost:8081/param").then((result) => {
            console.log(result.data);
            this.param = result.data.data;
        });
    },
    methods: {
        execute() {
            this.executing = true;
            axios.get("http://localhost:8081/execute").then((result) => {
                console.log(result.data);

                this.activities = result.data.data;

                this.executing = false;
                this.$message({
                    message: '执行排序已完成',
                    type: 'success'
                });
            });
        }
    }
}
</script>

<style scoped>
</style>