<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div class="container">
            <router-link class="navbar-brand fw-bold text-primary" to="/">NghiaBlog</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Trang chủ</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/blog">Bài viết</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/dashboard">Bảng điều khiển</router-link>
                    </li>
                </ul>
                <div class="d-flex align-items-center">
                    <router-link class="nav-link me-3" to="/me">Cá nhân</router-link>
                    <router-link v-if="!isAuthenticated" to="/login"
                        class="btn btn-outline-primary btn-sm rounded-pill px-3">
                        Đăng nhập
                    </router-link>
                    <button v-else @click="logout" class="btn btn-outline-danger btn-sm rounded-pill px-3">
                        Đăng xuất
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { auth } from '../router/router';

export default {
    name: 'AppHeader',
    data() {
        return {
            auth: auth
        }
    },
    computed: {
        isAuthenticated() {
            return this.auth.isAuthenticated;
        }
    },
    methods: {
        logout() {
            this.auth.logout();
            this.$router.push('/login');
        }
    }
}
</script>
