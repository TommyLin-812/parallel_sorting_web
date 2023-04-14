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
                <el-input-number v-model="paramForm.threadNum" :min=1 :max=10></el-input-number>
            </el-form-item>

            <!--运行次数-->
            <el-form-item label="运行次数" prop="executeTimes">
                <el-input-number v-model="paramForm.executeTimes" :min=1 :max=10></el-input-number>
            </el-form-item>

            <!--保存设置按钮-->
            <el-form-item>
                <el-button type="primary" @click="onSubmit" :loading="submitting">保存设置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

import axios from "axios";

export default {
    name: "ParamView",
    data() {
        return {
            submitting: false,
            paramForm: {
                dataQty: 1000000,
                threadNum: 4,
                executeTimes: 1
            },
            marks: {
                100: '1百个',
                1000000: '1百万个',
                10000000: '1千万个'
            }
        }
    },
    methods: {
        onSubmit() {
            this.submitting = true;
            axios.post("http://localhost:8081/param", {
                dataQty: this.paramForm.dataQty,
                threadNum: this.paramForm.threadNum,
                executeTimes: this.paramForm.executeTimes
            }).then((result) => {
                console.log(result.data);
                this.submitting = false;
                this.$message({
                    message: '保存设置成功',
                    type: 'success'
                });
            });
        }
    },
    mounted() {
        axios.get("http://localhost:8081/param").then((result) => {
            console.log(result.data.data);
            this.paramForm = result.data.data;
        });
    }
}
</script>

<style scoped>

</style>