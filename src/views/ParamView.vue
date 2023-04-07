<template>
    <div>
        <!--参数设置表单-->
        <el-form :model="paramForm" ref="paramForm" label-width="140px">
            <!--文件路径-->
            <el-form-item label="待排序文件路径" prop="file" :rules="[{required: true, message: '请选择文件路径！'}]">
                <el-input type="file" v-model="paramForm.file"></el-input>
                <el-button type="primary" @click="createDataDialogVisible=true">生成数据</el-button>
            </el-form-item>
            <!--线程数量（1~10）-->
            <el-form-item label="线程数量" prop="threadNum" :rules="[{required: true, message: '请选择线程数量！'}]">
                <el-select v-model="paramForm.threadNum" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <!--保存设置按钮-->
            <el-form-item>
                <el-button type="primary" @click="onSubmit">保存设置</el-button>
            </el-form-item>
        </el-form>

        <!--生成随机数据对话框-->
        <el-dialog title="生成随机数据" :visible.sync="createDataDialogVisible">
            <el-form :model="createDataForm" ref="createDataForm" label-width="140px">
                <el-form-item label="数据规模" prop="dataQTY"
                              :rules="[{required:true, message:'请输入数据规模！',trigger:'blur'},{type: 'number', message: '数据规模必须为数字值'}]">
                    <el-input v-model.number="createDataForm.dataQTY"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="createDataDialogVisible=false">取消</el-button>
                <el-button type="primary" @click="handleCreateData">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>

// import axios from "axios";

export default {
    name: "ParamView",
    data() {
        return {
            createDataDialogVisible: false,
            paramForm: {
                file: '',
                threadNum: ''
            },
            createDataForm: {
                dataQTY: ''
            },
            options: [
                {
                    value: 1,
                    label: '1'
                }, {
                    value: 2,
                    label: '2'
                }, {
                    value: 3,
                    label: '3'
                }, {
                    value: 4,
                    label: '4'
                }, {
                    value: 5,
                    label: '5'
                }, {
                    value: 6,
                    label: '6'
                }, {
                    value: 7,
                    label: '7'
                }, {
                    value: 8,
                    label: '8'
                }, {
                    value: 9,
                    label: '9'
                }, {
                    value: 10,
                    label: '10'
                }
            ]
        }
    },
    methods: {
        onSubmit() {
            this.$refs["paramForm"].validate((valid) => {
                if (valid) {
                    alert("submit!");
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        handleCreateData() {
            this.$refs["createDataForm"].validate((valid) => {
                if (valid) {
                    alert("submit!");
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}
</script>

<style scoped>

</style>