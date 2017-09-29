<script>
    import Escape from '../modules/escapeHtml';


    let htmls = Escape(`
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>菜鸟教程(runoob.com)</title>
            </head>
            <body>
                <h1 id="articleId">我的第一个标题</h1>

                <p class="article-text">我的第一个段落。</p>
            </body>
        </html>
    `);


    export default {
        data () {
            return {
                pointPage: 0,
                htmls: htmls,
                setting: {
                    autoplay: false,
                    autoplaySpeed: 2000,
                    dots: 'inside',
                    trigger: 'click',
                    arrow: 'hover'
                }
            }
        },
    }
</script>
<template>

        <Row class="layout">
            <i-col span="4" class="layout-left">
                <Menu class="layout-menu" active-name="1">
                    <MenuItem name="1">
                        Html
                    </MenuItem>
                    <MenuItem name="2">
                        评论管理
                    </MenuItem>
                    <MenuItem name="3">
                        用户留存
                    </MenuItem>
                    <MenuItem name="4">
                        流失用户
                    </MenuItem>
                </Menu>
            </i-col>
            <i-col span="20" class="layout-main">
                <Carousel class="power-point" v-model="pointPage">
                    <CarouselItem>
                        <div class="point-item">
                            <Card shadow>
                                <p slot="title">Html</p>
                                <p v-html="htmls">

                                </p>
                                <p>卡片内容</p>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="point-item">
                            <Card shadow>
                                <p slot="title">使用阴影效果的卡片</p>
                                <p>卡片内容</p>
                                <p>卡片内容</p>
                                <p>卡片内容</p>
                            </Card>
                        </div>
                    </CarouselItem>
                </Carousel>

            </i-col>
        </Row>
</template>
<style lang="scss" scoped>
     @import "../assets/scss/style.scss";

    .layout {
        height: 100%;
        width: 100%;
        overflow: hidden;
        border: map_get($Borders,box);
        background: map_get($Colors,milka);
        .layout-left,.layout-main,.layout-menu {
            height: inherit;
        }
        .layout-menu {
            width: auto !important;
        }
        .layout-main {

            .power-point {
                width: 100%;
                height: inherit;
            }
            .point-item {
                padding: map_get($Spaces,1);
                height: inherit
            }
        }
    }

    /*.layout-nav{*/
        /*width: 100%;*/
        /*margin: 0 auto;*/
    /*}*/
    /*.layout-assistant{*/
        /*width: 300px;*/
        /*margin: 0 auto;*/
        /*height: inherit;*/
    /*}*/
    /*.layout-breadcrumb{*/
        /*padding: 10px 15px 0;*/
    /*}*/
    /*.layout-content{*/
        /*min-height: 200px;*/
        /*margin: 15px;*/
        /*overflow: hidden;*/
        /*background: #fff;*/
        /*border-radius: 4px;*/
    /*}*/
    /*.layout-content-main{*/
        /*padding: 10px;*/
    /*}*/
    /*.layout-copy{*/
        /*text-align: center;*/
        /*padding: 10px 0 20px;*/
        /*color: #9ea7b4;*/
    /*}*/
</style>