<script>
    import Escape from '../../modules/EscapeCode';
    import LessonMock from '../../assets/mock/lessons-html';

    export default {
        data () {
            return {
                htmls: Escape(LessonMock.demoCode)
            }
        },
    }
</script>

<template>
    <div class="point-item">
        <Card shadow>
            <h1 slot="title">HTML</h1>
            <article>
                <section>
                    <h2>什么是html? <a class="section-cursor">#</a></h2>
                    <p>html的基本结构</p>
                    <p>所有的网页都是以Html为基础，嵌入的其他语言
                        <span>例子：script标签，style标签</span>
                    </p>
                </section>
                <section>
                    <p v-html="htmls"></p>
                </section>
                <section>
                    <h2>标签 <a class="section-cursor">#</a></h2>
                    <ul>
                        <li>
                            <!--<label ></label>-->
                            <p class="li-label-normal">标签的意义：HTML 使用标记标签来描述网页，通常都是开标签和闭标签成对使用；（有些特殊的如</p>
                        </li>
                        <li>
                            <p  class="li-label-normal">html: 网页主体</p>
                        </li>
                        <li>
                            <p  class="li-label-normal">
                                body: 文档主体<span class="p-detail"> （某种意义上的网页主体，因为页面需要渲染的内容节点都得包含在body节点内,除了已废弃的&lt; frameset&gt;）</span></p>
                        </li>
                    </ul >
                </section>
                <section>
                    <h2>属性 <a class="section-cursor">#</a></h2>
                    <p>常用属性</p>
                </section>
                <section>
                    <h2>属性 <a class="section-cursor">#</a></h2>
                    <p>常用属性</p>
                </section>
                <section>
                    <h2>属性 <a class="section-cursor">#</a></h2>
                    <p>常用属性</p>
                </section>
            </article>
        </Card>
    </div>
</template>