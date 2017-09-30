<script>
    import Escape from '../modules/escapeHtml';
    import LessonMock from '../assets/mock/lessons-html';




    export default {
        data () {
            return {
                pointPage: 0,
                htmls: Escape(LessonMock.demoCode)
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
                        CSS
                    </MenuItem>
                    <MenuItem name="3">
                        JS
                    </MenuItem>
                    <MenuItem name="4">
                        浏览器
                    </MenuItem>
                    <MenuItem name="4">
                        前端框架
                    </MenuItem>
                </Menu>
            </i-col>
            <i-col span="20" class="layout-main">
                <Carousel class="power-point" v-model="pointPage">
                    <CarouselItem>
                        <div class="point-item">
                            <Card shadow>
                                <h1 slot="title">课程1</h1>
                                <article>
                                    <section>
                                        <h2>什么是html?</h2>

                                        <div>
                                            <ul>
                                                <li>1.html学术简称超文本标记语言,是因为基于浏览器解析用的说明语言</li>
                                            </ul>
                                        </div>


                                    </section>
                                    <section>
                                        <p>html的基本结构</p>
                                        <p v-html="htmls"></p>
                                    </section>

                                    <section>http://www.css88.com/book/css/</section>
                                </article>
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

        .layout-left,
        .layout-main,
        .layout-menu {
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
                padding: map_get($Spaces,small);
                height: inherit
            }
        }
    }

</style>