<!--App.vue是项目入口文件。-->
<template>
    <div id="app">
        <router-view></router-view>
        <main-menu></main-menu>
    </div>
</template>

<script>
    import MainMenu from './components/mainMenu.vue';

    export default {
        name: 'app',
//        data () {
//            return {
//                msg: 'Hello world'
//            }
//        },
        components:{
            MainMenu
        }
    }
</script>


<style lang="scss">
    @import "./assets/scss/style.scss";
    h2{
        color:map_get($Colors, lemon);
    }
    #app {
        height: 100%;
        width: 100%;
    }
</style>