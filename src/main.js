//main.js这是项目的核心文件。全局的配置都在这个文件里面配置
import Vue from 'vue'

import App from './app.vue'
import router from './routes.js'

import iView from 'iview'

import 'iview/dist/styles/iview.css'    // 使用 CSS

import './assets/scss/style.scss'

Vue.config.debug = true;//开启错误提示

Vue.use(iView);

//渲染根节点
new Vue({
    router,
    el: 'app',
    render: h => h(App)
});