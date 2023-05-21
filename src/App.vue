<template>
    <div id="app">
        <el-container style="height: 800px">
            <el-header style="text-align: center; font-size: 40px; background-color: #B3C0D1;">并行排序模拟系统
            </el-header>

            <el-container>
                <el-aside width="200px">
                    <el-menu>
                        <router-link to="/mission">
                            <el-menu-item>
                                <el-link :underline="false">任务查看</el-link>
                            </el-menu-item>
                        </router-link>

                        <router-link to="/execute">
                            <el-menu-item>
                                <el-link :underline="false">并行排序</el-link>
                            </el-menu-item>
                        </router-link>

                        <router-link to="/result">
                            <el-menu-item>
                                <el-link :underline="false">结果查看</el-link>
                            </el-menu-item>
                        </router-link>

                        <router-link to="/testdata">
                            <el-menu-item>
                                <el-link :underline="false">结果分析</el-link>
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
