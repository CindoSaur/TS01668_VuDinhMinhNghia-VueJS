<template>
  <div class="container mt-4">
    <h2>Đăng nhập</h2>

    <form>
      <div class="mb-3">
        <label>Email</label>
        <input type="email" class="form-control">
      </div>

      <div class="mb-3">
        <label>Mật khẩu</label>
        <input type="password" class="form-control">
      </div>

      <button class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>
