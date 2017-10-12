<script>
    import MenuList from '../components/menu.vue';
    import Router  from 'vue-router';

    export default {
        components:{
            MenuList
        },
        data (){
            return {
                showMenu: true
            }
        },
        methods:{
            toggleMenu: function (show) {
                let _this = this;
                let $menu = document.querySelector('.layout-menu');
                let $board = document.querySelector('.layout-main');
                if(_this.showMenu) {
                    $menu.style.opacity = "0";
                    $board.style.marginLeft = "0px";
                }else{
                    $menu.style.opacity = "1";
                    $board.style.marginLeft = "200px";
                }
                _this.showMenu = !_this.showMenu;
            }
        },
        mounted: function () {

            let vRoot = this;

            window.onkeydown = function (e) {
                if(e.keyCode === 107)
                    vRoot.toggleMenu();


            };
        }
    }
</script>
<template>
        <div class="layout">
            <div class="layout-menu">
                <Menu-list></Menu-list>
            </div>
            <div class="layout-main">
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
                width: inherit !important;
                min-height: inherit !important;
            }
        }

        .layout-main {
            margin-left: $widthMenu;
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