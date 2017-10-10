<script>
    import Escape from '../../modules/EscapeCode'
    import LessonMock from '../../assets/mock/lessons-HtmlDOM'

    export default {
        data () {
            return {
                htmlCode: Escape(LessonMock.htmlCode),
                attrCode: Escape(LessonMock.attrCode)
            }
        },
    }
</script>

<template>
    <div class="point-item">
        <Card shadow>
            <h1 slot="title">Javascript</h1>
            <article>
                <section>
                    <h2>Javascript <a class="section-cursor">#</a></h2>
                    <ul class="label-ul">
                        <li>
                            <p>所有的网页都是以Html这样的文本标记语言为基础，嵌入的其他语言<span class="p-detail"> （script标签，style标签）</span></p>
                        </li>
                    </ul >
                </section>

                <section>
                    <h2>DOM <a class="section-cursor">#</a></h2>
                    <p class="li-label-normal">由浏览器根据标记语言解析抽象出的对象，自带的api可通过js进行一系列Dom操作。</p>
                </section>

                <section>
                    <h3>结构图</h3>
                    <p v-html="htmlCode"></p>
                    <p><img src="../../assets/imgs/dom-tree.png"></p>
                </section>
                <section>
                    <h2>标签 <a class="section-cursor">#</a></h2>
                    <ul class="label-ul">
                        <li>
                            <p> 标签的意义：HTML 使用标记标签来描述网页，标签通常都是开标签和闭标签成对使用；</p>
                        </li>
                        <li>
                            <p>html: 网页主体</p>
                        </li>
                        <li>
                            <p>body: 渲染主体<span class="p-detail"> （某种意义上的网页主体，因为HTML标准页面需要渲染的内容节点都得包含在body节点内）</span></p>
                        </li>
                    </ul >
                </section>
                <section>
                    <h2>属性 <a class="section-cursor">#</a></h2>
                    <ul class="label-ul">
                        <li>
                            <p>属性为元素中添加附加信息</p>
                        </li>
                        <li>
                            <p>有些属性是标签私有属性，如input的type,img的src等</p>
                        </li>
                        <li>
                            <p>常见属性</p>
                            <ol class="label-ol">
                                <li>
                                    <p>
                                        id: 元素唯一标记<span class="p-detail">（通常驼峰式命名）</span>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        class: 元素类名<span class="p-detail">（通常中线命名，最好是语义化命名）</span>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        style: 元素的行内样式<span class="p-detail">（伪类无法通过行内样式写入）</span>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        data-*: data属性可以用于存储页面的数据<span class="p-detail"> （data数据的中线可以多层分割，如data-list-id，不建议保存敏感数据）</span>
                                    </p>
                                </li>
                            </ol>
                        </li>
                    </ul >
                </section>
            </article>
        </Card>
    </div>
</template>