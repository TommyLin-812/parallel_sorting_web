<template>
    <div>
        <el-container style="height: 500px; border: 1px solid #eee">
            <el-header style="text-align: center; font-size: 40px; background-color: #B3C0D1;">并行排序模拟系统</el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu>
                        <el-menu-item>
                            <router-link to="/param">参数设置</router-link>
                        </el-menu-item>
                        <el-menu-item>
                            <router-link to="/execute">运行过程</router-link>
                        </el-menu-item>
                        <el-menu-item>
                            <router-link to="/result">排序结果</router-link>
                        </el-menu-item>
                        <el-menu-item>
                            <router-link to="/testdata">数据可视化</router-link>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view style="margin: 0 30px"></router-view>
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