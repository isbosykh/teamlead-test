import Vue from "vue";
import Router from "vue-router";
import Authorization from "@/views/Authorization";
import Main from "@/views/Main";
import NewPost from "@/views/NewPost";
import Posts from "@/views/Posts";
import Users from "@/views/Users";
import Post from "@/components/Post";

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
                    path: 'posts/:page?',
                    name: 'posts',
                    component: Posts,
                },
                {
                    path: 'posts/edit/:id',
                    name: 'edit',
                    component: Post
                },
                {
                    path: 'users',
                    name: 'users',
                    component: Users,
                    children: [
                        {
                            path: 'edit/:id',
                            name: 'edit',
                        },
                    ]
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
            path: '/new-post',
            name: 'new-post',
            component: NewPost,
        },
    ]
});

export default router;