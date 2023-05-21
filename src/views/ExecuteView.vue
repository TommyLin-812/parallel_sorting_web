<template>
    <div>
        <!--参数设置表单-->
        <el-form :model="paramForm" ref="paramForm" label-position="top">
            <!--数据规模-->
            <el-form-item label="待排序数据规模">
                <el-slider v-model="paramForm.dataQty" :min=100 :max=10000000 :step=100
                           :marks="marks" show-input :show-input-controls=false></el-slider>
            </el-form-item>

            <!--线程数量（1~10）-->
            <el-form-item label="线程数量" prop="threadNum">
                <el-input-number v-model="paramForm.threadNum" :min=1 :max=15 size="small"></el-input-number>
            </el-form-item>

            <!--运行次数-->
            <el-form-item label="运行次数" prop="executeTimes">
                <el-input-number v-model="paramForm.executeTimes" :min=1 :max=10 size="small"></el-input-number>
            </el-form-item>

            <!--是否保存结果-->
            <el-form-item label="是否保存排序结果" prop="saveResult">
                <el-radio-group v-model="paramForm.saveResult">
                    <el-radio :label="true">是</el-radio>
                    <el-radio :label="false">否</el-radio>
                </el-radio-group>
            </el-form-item>

            <!--按钮-->
            <el-form-item>
                <el-button type="primary" :loading="submitting" @click="onSubmit" style="margin: 5px">保存设置
                </el-button>
                <el-button type="primary" :loading="executing" @click="execute" style="margin: 5px">执行排序
                </el-button>
            </el-form-item>
        </el-form>

        <div v-if="executeData.length>0">
            <div v-for="(data, index) in executeData" :key="index">
                <h3>第{{ index + 1 }}轮操作</h3>
                <el-table :data="data" border :default-sort="{prop: 'id', order: 'ascending'}">
                    <el-table-column prop="id" label="线程号"></el-table-column>
                    <el-table-column prop="startTime" label="开始时间"></el-table-column>
                    <el-table-column prop="endTime" label="结束时间"></el-table-column>
                    <el-table-column prop="costTime" label="执行时间(单位：毫秒)"></el-table-column>
                    <el-table-column prop="content" label="任务描述"></el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "ExecuteView",
    data() {
        return {
            submitting: false,
            executing: false,
            executeData: [],
            paramForm: {
                dataQty: 1000000,
                threadNum: 4,
                executeTimes: 1,
                saveResult: false
            },
            marks: {
                100: '1百个',
                1000000: '1百万个',
                10000000: '1千万个'
            }
        }
    },
    mounted() {
        axios.get("http://localhost:8081/param").then((result) => {
            console.log(result.data);
            this.paramForm = result.data.data;
        });
    },
    methods: {
        onSubmit() {
            this.submitting = true;

            axios.post("http://localhost:8081/param", {
                dataQty: this.paramForm.dataQty,
                threadNum: this.paramForm.threadNum,
                executeTimes: this.paramForm.executeTimes,
                saveResult: this.paramForm.saveResult
            }).then(()=>{
                this.submitting = false;
                this.$message({
                    message: '保存设置成功',
                    type: 'success'
                });
            });
        },
        execute() {
            this.executing = true;

            axios.get("http://localhost:8081/execute").then((result) => {
                console.log(result.data);

                this.executeData = result.data.data;

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