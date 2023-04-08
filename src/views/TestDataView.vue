<template>
    <div>
        <el-container>
            <el-header>
                <el-select v-model="dataQty" :loading="selectLoading" style="margin: 0 10px">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <el-button type="primary" style="margin: 0 10px" @click="dataVisualize" :loading="loading">
                    查看数据图表
                </el-button>
            </el-header>
            <el-main>
                <div id="main" style="width: 600px;height:400px;"></div>
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
            dataset: []
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
        });
    },
    methods: {
        dataVisualize() {
            this.loading = true;
            axios.get("http://localhost:8081/testdata/" + this.dataQty).then((result) => {
                console.log(result.data);
                let i;
                for (i = 0; i < result.data.data.length; i++) {
                    this.dataset.push({
                        threadNum: result.data.data[i].threadNum,
                        costTime: result.data.data[i].costTime
                    })
                }
                const Chart = echarts.init(document.getElementById('main'));

                var option = {
                    legend: {},
                    tooltip: {},
                    dataset: {
                        // 提供一份数据。
                        source: this.dataset
                    },
                    // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
                    xAxis: {type: 'category'},
                    // 声明一个 Y 轴，数值轴。
                    yAxis: {},
                    // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
                    series: [{type: 'line'}]
                };

                Chart.setOption(option);
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