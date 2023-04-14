<template>
    <div id="app">
        <el-container style="height: 800px; border: 1px solid #eee">
            <el-header style="text-align: center; font-size: 40px; background-color: #B3C0D1;">并行排序模拟系统
            </el-header>

            <el-container>
                <el-aside width="200px">
                    <el-menu>
                        <router-link to="/param">
                            <el-menu-item>
                                <el-link :underline="false">参数设置</el-link>
                            </el-menu-item>
                        </router-link>

                        <router-link to="/execute">
                            <el-menu-item>
                                <el-link :underline="false">运行过程</el-link>
                            </el-menu-item>
                        </router-link>

                        <router-link to="/result">
                            <el-menu-item>
                                <el-link :underline="false">排序结果</el-link>
                            </el-menu-item>
                        </router-link>

                        <router-link to="/testdata">
                            <el-menu-item>
                                <el-link :underline="false">数据可视化</el-link>
                            </el-menu-item>
                        </router-link>
                    </el-menu>
                </el-aside>

                <el-main>
                    <router-view style="margin: 0 30px"></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
</script>

<style>
</style>
