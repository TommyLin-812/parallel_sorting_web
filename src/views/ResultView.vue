<template>
    <div>
        <el-button type="primary" id="button" @click="getSortedData" style="margin: 10px 0">查看排序结果
        </el-button>

        <el-input type="textarea" id="sortedData" v-model="sortedData" :rows=30></el-input>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "ResultView",
    data() {
        return {
            sortedData: ''
        }
    },
    methods: {
        getSortedData() {
            const button = document.getElementById("button");
            button.loading = true;
            axios.get("http://localhost:8081/result", {responseType: 'blob'}).then((result) => {
                const blob = new Blob([result.data]);

                console.log(blob);

                const reader = new FileReader()
                reader.onload = function readFileCompleted() {
                    document.getElementById("sortedData").value = reader.result;
                    reader.abort();
                    button.loading = false;
                };
                reader.readAsText(blob);
            })
        }
    }
}
</script>

<style scoped>

</style>