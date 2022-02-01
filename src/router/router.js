import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import PostsListPage from "@/pages/PostsListPage";
import About from "@/pages/About";
import PostPage from "@/pages/PostPage";
import PostsListPageWithVuex from "@/pages/PostsListPageWithVuex";


const routes = [
    {
        path: "/",
        component: Main
    },
    {
        path: "/posts",
        component: PostsListPageWithVuex
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/posts/:id",
        component: PostPage
    },
];

export default createRouter({
    routes,
    history: createWebHistory()
});