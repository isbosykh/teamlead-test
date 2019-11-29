import Vue from "vue";
import Router from "vue-router";
import Authorization from "@/views/Authorization";
import Main from "@/views/Main";
import Post from "@/components/Post";
import NewPost from "@/views/NewPost";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main,
            redirect: { name: 'posts' },
            children: [
                {
                    path: 'posts',
                    name: 'posts'
                },
                {
                    path: 'users',
                    name: 'users'
                }
            ]
        },
        {
            path: '/auth',
            name: 'auth',
            component: Authorization,
            redirect: { name: 'login' },
            children: [
                {
                    path: 'login',
                    name: 'login',
                },
                {
                    path: 'register',
                    name: 'register',
                }
            ]
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: Post,
        },
        {
            path: '/new-post',
            name: 'new-post',
            component: NewPost,
        },
    ]
});

export default router;