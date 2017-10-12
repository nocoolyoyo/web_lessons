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
                        <li>n
                            <p>border</p>
                        </li>
                        <li>
                            <p>box-sizing</p>
                        </li>
                    </ul >
                    <p>
                        <img src="../../assets/imgs/boxModel.jpg">
                    </p>
                </section>
                <section>
                    <h2>定位与层叠 <a class="section-cursor">#</a></h2>
                    <ul class="label-ul">
                        <li>
                            <p>postion</p>
                            <ol class="label-ol">
                                <li>
                                    <p>absolute</p>
                                </li>
                                <li>
                                    <p>relative</p>
                                </li>
                                <li>
                                    <p>fixed</p>
                                </li>
                                <li>
                                    <p>sticky</p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p>z-index</p>
                        </li>
                        <li>
                            <p>border</p>
                        </li>
                        <li>
                            <p>box-sizing</p>
                        </li>
                    </ul >
                    <iframe  frameborder="no" border="0" height="700px" width="500px" src="https://weui.io/#layers"></iframe>
                </section>

                <section>
                    <h2>细节注意 <a class="section-cursor">#</a></h2>
                    <ul class="label-ul">
                        <li>
                            <p>文字溢出和换行</p>
                        </li>
                        <li>
                            <p>浏览器兼容</p>
                        </li>
                    </ul >
                </section>
            </article>
        </Card>
    </div>
</template>
