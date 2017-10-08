<script>
    export default {
        data () {
            return {
            }
        },
    }
</script>

<template>
    <div class="point-item">
        <Card shadow>
            <h1 slot="title">CSS</h1>
            <article>
                <section>
                    <h2>基本内容 <a class="section-cursor">#</a></h2>
                    <ul class="label-ul">
                        <li>
                            <p>Html提供内容结构，CSS则对其进行修饰和格式化</p>
                        </li>
                        <li>
                            <p>辅助页面的布局，后来css3的则加入了动画</p>
                        </li>
                        <li>
                            <p>通过css选择器语法获取需要修饰的节点</p>
                        </li>
                        <li>
                            <p>叠层顺序：缺省样式 - 外部样式 - 内部样式 - 内联样式</p>
                        </li>
                    </ul >
                </section>
                <section>
                    <h2>盒模型 <a class="section-cursor">#</a></h2>
                    <ul class="label-ul">
                        <li>
                            <p>margin</p>
                        </li>
                        <li>
                            <p>padding</p>
                        </li>
                        <li>
                            <p>border</p>
                        </li>
                        <li>
                            <p>box-sizing</p>
                        </li>
                    </ul >
                </section>
                <section>
                    <h2>浏览器兼容 <a class="section-cursor">#</a></h2>
                    <ul class="label-ul">
                        <li>
                            <p>margin</p>
                        </li>
                        <li>
                            <p>padding</p>
                        </li>
                        <li>
                            <p>border</p>
                        </li>
                        <li>
                            <p>box-sizing</p>
                        </li>
                    </ul >
                </section>
            </article>
        </Card>
    </div>
</template>