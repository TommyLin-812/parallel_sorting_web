<template>
    <div>
        <el-input type="file" style="margin: 10px 0"></el-input>
        <el-button type="primary" :loading="loading" @click="getSortedData" style="margin: 10px 0">查看排序结果</el-button>
        <el-input type="textarea" autosize style="margin: 10px 0"></el-input>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "ResultView",
    data() {
        return {
            loading: false
        }
    },
    methods: {
        getSortedData() {
            this.loading=true;
            axios.get("http://localhost:8081/result").then((result)=>{
                console.log(result.data);

            })
        }
    }
}
</script>

<style scoped>

</style>