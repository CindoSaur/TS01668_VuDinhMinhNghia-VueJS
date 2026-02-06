<template>
  <div class="container mt-5" style="max-width: 420px;">

    <!-- HEADER KIỂU BÁO -->
    <div class="text-center border-bottom mb-4 pb-2">
      <h2 class="fw-bold">BÁO MỚI MỖI NGÀY</h2>
      <p class="text-center border-bottom mb-4 pb-2">Tin tức - Thời sự - Thế giới - Giải trí</p>
      <small class="text-muted">TẠO TÀI KHOẢN CỦA BẠN</small>
    </div>

    <!-- FORM -->
    <div class="border p-4">
      <h5 class="text-uppercase mb-3">Đăng ký</h5>

      <div class="mb-3">
        <label class="form-label fw-semibold">Email</label>
        <input type="email" class="form-control" placeholder="Hãy nhập email của bạn" v-model="email" />
      </div>

      <div class="mb-3">
        <label class="form-label fw-semibold">Tên người dùng</label>
        <input type="text" class="form-control" placeholder="Họ và Tên của bạn" v-model="name" />
      </div>

      <div class="mb-3">
        <label class="form-label fw-semibold">Mật khẩu</label>
        <input type="password" class="form-control" placeholder="••••••••" v-model="password" />
      </div>

      <div class="mb-3">
        <label class="form-label fw-semibold">Xác nhận mật khẩu</label>
        <input type="password" class="form-control" placeholder="••••••••" v-model="confirmPassword" />
      </div>

      <button class="btn btn-dark w-100" @click="register">
        Đăng ký
      </button>

      <p v-if="error" class="text-danger text-center mt-2">
        {{ error }}
      </p>

      <div class="text-center mt-3">
        <small>
          Đã có tài khoản?
          <span class="text-decoration-underline" style="cursor: pointer" @click="$router.push('/login')">
            Đăng nhập
          </span>
        </small>
      </div>
    </div>

    <!-- FOOTER -->
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
const name = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')

const register = () => {
  error.value = ''

  if (!email.value || !name.value || !password.value || !confirmPassword.value) {
    error.value = 'Vui lòng nhập đầy đủ thông tin'
    return
  }

  if (password.value !== confirmPassword.value) {
    error.value = 'Mật khẩu xác nhận không khớp'
    return
  }

  const users = JSON.parse(localStorage.getItem('users')) || []

  const exists = users.find(u => u.email === email.value)
  if (exists) {
    error.value = 'Email đã tồn tại'
    return
  }

  users.push({
    id: Date.now(),
    email: email.value,
    password: password.value,
    name: name.value
  })

  localStorage.setItem('users', JSON.stringify(users))
  router.push('/login')
}
</script>
