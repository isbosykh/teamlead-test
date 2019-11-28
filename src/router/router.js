import Vue from "vue";
import Router from "vue-router";
import Authorization from "@/views/Authorization";
import Posts from "@/views/Posts";
import Post from "@/components/Post";
import NewPost from "@/views/NewPost";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'posts',
            component: Posts
        },
        {
            path: '/auth',
            name: 'auth',
            component: Authorization
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