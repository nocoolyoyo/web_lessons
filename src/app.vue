<!--App.vue是项目入口文件。-->
<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: 'app'
    }
</script>
<style lang="scss">
    #app {
        width: 100%;
        overflow: hidden;
    }
</style>