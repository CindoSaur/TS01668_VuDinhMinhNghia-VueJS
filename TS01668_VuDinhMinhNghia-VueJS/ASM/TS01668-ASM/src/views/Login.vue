<template>
  <div class="container mt-5" style="max-width: 420px;">
    <div class="text-center border-bottom mb-4 pb-2">
      <h2 class="fw-bold">BÁO MỚI MỖI NGÀY</h2>
      <p class="text-center border-bottom mb-4 pb-2">Tin tức - Thời sự - Thế giới - Giải trí</p>
      <small class="text-muted">ĐĂNG NHẬP TÀI KHOẢN CỦA BẠN</small>
    </div>

    <div class="border p-4">
      <h5 class="text-uppercase mb-3">Đăng nhập</h5>

      <div class="mb-3">
        <label class="form-label fw-semibold">Email</label>
        <input type="email" class="form-control" placeholder="Hãy nhập email của bạn" v-model="email" />
      </div>

      <div class="mb-3">
        <label class="form-label fw-semibold">Mật khẩu</label>
        <input type="password" class="form-control" placeholder="••••••••" v-model="password" />
      </div>

      <button type="button" class="btn btn-dark w-100" @click="login">
        Đăng nhập
      </button>


      <p v-if="error" class="text-danger text-center mt-2">
        {{ error }}
      </p>

      <div class="text-center mt-3">
        <small>
          Chưa có tài khoản?
          <span class="text-decoration-underline" style="cursor: pointer" @click="$router.push('/register')">
            Đăng ký
          </span>
        </small>
      </div>
    </div>

    <div class="text-center mt-3">
      <small class="text-muted">
        Cẻm ơn vì đã ủng hộ
      </small>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')
const error = ref('')

const login = () => {
  error.value = ''

  const users = JSON.parse(localStorage.getItem('users')) || []
  const user = users.find(
    u => u.email === email.value && u.password === password.value
  )

  if (user) {
    localStorage.setItem('user', JSON.stringify(user))
    window.dispatchEvent(new Event('user-change'))
    router.push('/')
  } else {
    error.value = 'Email hoặc mật khẩu không đúng'
  }
}
</script>
