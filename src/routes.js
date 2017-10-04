// 引用模板
import Vue from 'vue';
import Router from 'vue-router';
import home from './views/home.vue';

import lessonHtml from './views/lessons/html.vue'

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            redirect: '/html',
            component:home,
            children: [
                { path: 'html', component: lessonHtml },
            ]
        }
    ]
})