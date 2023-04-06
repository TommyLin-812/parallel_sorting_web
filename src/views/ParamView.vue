<template>
    <el-container>
        <el-header style="font-size: 40px">并行排序模拟系统</el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu>
                    <el-menu-item>参数设置</el-menu-item>
                    <el-menu-item>运行过程</el-menu-item>
                    <el-menu-item>排序结果</el-menu-item>
                    <el-menu-item>数据可视化</el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <el-form :model="form" label-width="120px">
                    <el-form-item label="待排序文件路径">
                        <el-input v-model="form.file"></el-input>
                        <el-button type="primary">浏览文件</el-button>
                        <el-button type="primary">生成数据</el-button>
                    </el-form-item>
                    <el-form-item label="线程数量">
                        <el-select v-model="form.threadNum" placeholder="请选择">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">保存设置</el-button>
                    </el-form-item>
                </el-form>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    name: "ParamView",
    data() {
        return {
            form: {
                file: '',
                threadNum: ''
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
                },
            ]
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>

<style scoped>

</style>