<template>
    <div>
        <el-container>
            <el-header style="font-size: 40px">并行排序模拟系统</el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu>
                        <el-menu-item>
                            <router-link to="/param">参数设置</router-link>
                        </el-menu-item>
                        <el-menu-item>
                            <router-link to="/execute">运行过程</router-link>
                        </el-menu-item>
                        <el-menu-item>排序结果</el-menu-item>
                        <el-menu-item>数据可视化</el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name: "HomeView"
}
</script>

<style scoped>

</style>