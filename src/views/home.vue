<script>
    import MenuList from '../components/menu.vue';
    import Router  from 'vue-router';

    export default {
        components:{
            MenuList
        }
    }
</script>
<template>
        <div class="layout" >
            <div  class="layout-menu">
                <Menu-list></Menu-list>
            </div>
            <div  class="layout-main">
                <router-view></router-view>
            </div>
        </div>
</template>
<style lang="scss" scoped>
     @import "../assets/scss/style.scss";
    $widthMenu:  200px;

    .layout {
        border: $b-box;
        background: $c-milka;
        position: relative;;
        .layout-main {
            height: auto;
        }

        .layout-menu {
            position: fixed;
            left:0;
            top:0;
            min-height: 100vh ;
            width:  $widthMenu !important;
            &>ul {
                width: inherit;
                min-height: inherit;
            }
        }

        .layout-main {
            margin-left: calc(#{$widthMenu} + 5*#{$s-small});
            .point-item {
                padding: $s-small;
                width: 100%;
                height: auto;
                min-height: 99.5vh;
                box-sizing: border-box;
            }
        }
    }

</style>