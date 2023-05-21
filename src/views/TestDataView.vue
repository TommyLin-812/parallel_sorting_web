<template>
  <div>
    <el-container>
      <el-header>
        <el-form :inline="true">
          <el-form-item label="数据规模">
            <el-select v-model="dataQty" :loading="selectLoading">
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="dataVisualize" :loading="loading">查看数据图表</el-button>
          </el-form-item>
        </el-form>
      </el-header>

      <!--用于放置图表-->
      <el-main>
        <div id="main" style="width: 800px;height:500px;"></div>
        <div v-if="bestThreadNum>0">对于该情况比较合适的线程数量为{{ bestThreadNum }}</div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
import * as echarts from 'echarts';

export default {
  name: "TestDataView",
  data() {
    return {
      selectLoading: true,
      loading: false,
      dataQty: '',
      options: [],
      chart: '',
      bestThreadNum: 0,
      minCostTime: 0
    }
  },
  mounted() {
    axios.get("http://localhost:8081/dataqty").then((result) => {
      console.log(result.data);
      let i;
      for (i = 0; i < result.data.data.length; i++) {
        this.options.push({value: result.data.data[i], label: result.data.data[i]});
      }
      this.selectLoading = false;

      this.chart = echarts.init(document.getElementById('main'));
    });
  },
  methods: {
    dataVisualize() {
      this.loading = true;
      axios.get("http://localhost:8081/testdata/" + this.dataQty).then((result) => {
        console.log(result.data);
        const option = {
          legend: {},
          tooltip: {},
          xAxis: {type: 'category', name: '线程数量', data: [1,2,3,4,5,6,7,8,9,10]},
          yAxis: {type: 'value', name: '执行时间'},
          series: [{type: 'line', data: []}]
        };

        let i;
        for (i = 0; i < result.data.data.length; i++) {
          if (i === 0) this.minCostTime = result.data.data[i].costTime;
          else if (result.data.data[i].costTime < this.minCostTime) {
            this.minCostTime = result.data.data[i].costTime;
            this.bestThreadNum = result.data.data[i].threadNum;
          }

          option.series[0].data.push({
            name: result.data.data[i].threadNum,
            value: result.data.data[i].costTime
          })
        }

        option.series[0].data[this.bestThreadNum-1].itemStyle={color: '#00ff00'};

        this.chart.setOption(option);
        this.loading = false;
        this.$message({
          message: '已获取实验数据',
          type: 'success'
        });
      });
    }
  }
}
</script>

<style scoped>
</style>