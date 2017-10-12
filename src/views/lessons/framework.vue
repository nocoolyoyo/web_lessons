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
            <h1 slot="title">前端框架</h1>
            <article>
                <section>
                    <h2>框架 <a class="section-cursor">#</a></h2>
                    <ul class="label-ul">
                        <li>
                            <p>为了</p>
                        </li>
                        <li>
                            <p>根据框架的功能来区分和选择</p>
                        </li>
                        <li>
                            <p>本地解释器执行，如node.js</p>
                        </li>
                    </ul >
                </section>
                <section>
                    <h2>对象和数据类型 <a class="section-cursor">#</a></h2>
                    <ul class="label-ul">
                        <li>
                            <p>js中所有的数据类型其实都是对象</p>
                        </li>
                        <li>
                            <p>数据的类型转换</p>
                        </li>
                        <li>
                            <p>尽量不要用弱类型判断</p>
                        </li>
                    </ul >
                </section>
                <section>
                    <h2>对象的方法拓展 <a class="section-cursor">#</a></h2>
                    <ul class="label-ul">
                        <li>
                            <p>数据类型</p>
                        </li>
                        <li>
                            <p>构造方法实现类功能</p>
                        </li>
                    </ul >
                </section>
            </article>
        </Card>
    </div>
</template>