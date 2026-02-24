  import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import BlogList from "../views/BlogList.vue";
import BlogPost from "../views/BlogPost.vue";
import UserProfile from "../views/UserProfile.vue";
import UserProfileInfo from "../views/UserProfileInfo.vue";
import UserProfileSettings from "../views/UserProfileSettings.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";

export const auth = {
    isAuthenticated: false,
    login() { this.isAuthenticated = true; },
    logout() { this.isAuthenticated = false; }
};

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/blog", name: "BlogList", component: BlogList },
    { path: "/blog/:id", name: "BlogPost", component: BlogPost },
    {
        path: "/profile",
        name: "UserProfile",
        component: UserProfile,
        alias: "/me",
        children: [
            { path: "", redirect: { name: "UserProfileInfo" } },
            { path: "info", name: "UserProfileInfo", component: UserProfileInfo },
            { path: "settings", name: "UserProfileSettings", component: UserProfileSettings },
        ],
    },
    { path: "/login", name: "Login", component: Login },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: { requiresAuth: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth) && !auth.isAuthenticated) {
        next({ name: "Login" });
    } else {
        next();
    }
});

export default router;
