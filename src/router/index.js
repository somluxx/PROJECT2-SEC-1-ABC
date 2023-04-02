import { createRouter, createWebHistory } from 'vue-router'
import FirstPageView from '../view/FirstPageView.vue'
import TimeDisplayView from '../view/TimeDisplayView.vue'
import NewTodoListView from '../view/NewTodoListView.vue'
import CommentView from '../view/CommentView.vue'
import NotFoundView from '../view/NotFoundView.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path : '/',
            name : 'Home',
            component: FirstPageView
        },
        {
            path : '/timer',
            name : 'Timer',
            component: TimeDisplayView
        },
        {
            path : '/list',
            name : 'List',
            component: NewTodoListView
        },
        {
            path : '/comment',
            name : 'Comment',
            component: CommentView
        },
        {
            path: '/:notfoundpath(.*)',
            name: 'NotFound',
            component: NotFoundView
        }
    ]
})

export default router