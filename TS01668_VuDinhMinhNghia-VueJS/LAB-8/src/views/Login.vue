<template>
    <div class="login-view d-flex align-items-center justify-content-center">
        <div class="custom-card p-5 shadow-lg" style="max-width: 400px; width: 100%;">
            <div class="text-center mb-4">
                <h2 class="fw-bold text-primary">Đăng nhập</h2>
                <p class="text-muted">Chào mừng bạn quay trở lại với MyBlog</p>
            </div>

            <form @submit.prevent="handleLogin">
                <div class="mb-3">
                    <label class="form-label fw-semibold">Email</label>
                    <input type="email" class="form-control" placeholder="admin@fpt.edu.vn" required>
                </div>
                <div class="mb-4">
                    <label class="form-label fw-semibold">Mật khẩu</label>
                    <input type="password" class="form-control" placeholder="********" required>
                </div>

                <button type="submit" class="btn btn-primary w-100 py-3 rounded-pill fw-bold">
                    Đăng nhập ngay
                </button>
            </form>

            <div class="mt-4 text-center">
                <p class="text-muted small">
                    Chưa có tài khoản? <a href="#" class="text-primary text-decoration-none fw-bold">Đăng ký ngay</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { auth } from "../router/router";

export default {
    name: 'Login',
    methods: {
        handleLogin() {
            auth.login();
            alert("Đăng nhập thành công!");
            this.$router.push({ name: 'Dashboard' });
        }
    }
}
</script>

<style scoped>
.login-view {
    min-height: 70vh;
}
</style>
