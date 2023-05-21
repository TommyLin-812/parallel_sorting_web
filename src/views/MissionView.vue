<template>
  <div>
    <h1>待排序数据</h1>
    <el-pagination layout="total, prev, pager, next, jumper" background :page-size="50" :total="10000000"
                   style="margin: 10px 0" @current-change="handleCurrentChange"></el-pagination>
    <el-table :data="tableData" border style="width: 50%">
      <el-table-column prop="num" label="数据"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MissionView",
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    handleCurrentChange(val) {
      axios.get("http://localhost:8081/mission/" + val).then((result) => {
        this.tableData = result.data.data;
      })
    }
  },
  mounted() {
    axios.get("http://localhost:8081/mission/" + 1).then((result) => {
      this.tableData = result.data.data;
    });
  }
}
</script>

<style scoped>
</style>