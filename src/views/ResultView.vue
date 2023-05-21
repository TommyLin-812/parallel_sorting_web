<template>
    <div>
        <h1>排序结果</h1>
        <el-pagination layout="total, prev, pager, next, jumper" background :page-size="50" :total="total"
                       style="margin: 10px 0" @current-change="handleCurrentChange"></el-pagination>
        <el-table :data="sortedData" border style="width: 50%">
            <el-table-column prop="num" label="数据"></el-table-column>
        </el-table>
    </div>
</template>

<script>

import axios from "axios";

export default {
    name: "ResultView",
    data() {
        return {
            sortedData: [{num: 1}],
            total: 0
        }
    },
    methods: {
        handleCurrentChange(val) {
            axios.get("http://localhost:8081/result/"+val).then((result)=>{
                this.sortedData=result.data.data;
            })
        }
    },
    mounted() {
        axios.get("http://localhost:8081/param").then((result)=>{
            this.total=result.data.data.dataQty;
        });

        axios.get("http://localhost:8081/result/1").then((result)=>{
            this.sortedData=result.data.data;
        });
    }
}
</script>

<style scoped>

</style>