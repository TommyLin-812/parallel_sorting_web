<template>
    <div>
        <el-row>
            <el-col>
                <div>待排序数据规模：{{ param.dataQty }}</div>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <div>线程数量：{{ param.threadNum }}</div>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <div>执行次数：{{ param.executeTimes }}</div>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <el-button type="primary" :loading="executing" @click="execute">执行排序</el-button>
            </el-col>
        </el-row>
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
            }
        }
    },
    mounted() {
        axios.get("http://localhost:8081/param").then((result) => {
            console.log(result.data);
            this.param = result.data.data;
        });
    },
    methods: {
        execute(){
            this.executing=true;
            axios.get("http://localhost:8081/execute").then((result) => {
                console.log(result.data);
                this.executing=false;
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
.el-row {
    margin: 10px 0;
}
</style>