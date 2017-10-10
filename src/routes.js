// 引用模板
import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'

import lessonHtmlDOM from './views/lessons/HtmlDOM.vue'
import lessonCSS from './views/lessons/CSS.vue'
import lessonJavascript from './views/lessons/Javascript.vue'

import lessonBrowser from './views/lessons/Browser.vue'

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            redirect: '/HtmlDOM',
            component:home,
            children: [
                { path: 'HtmlDOM', name:  'HtmlDOM',  component: lessonHtmlDOM },
                { path: 'CSS', name:  'CSS',  component: lessonCSS },
                { path: 'Javascript', name:  'Javascript',  component: lessonJavascript},
                { path: 'Browser', name:  'Browser',  component: lessonBrowser }
            ]
        }
    ]
})