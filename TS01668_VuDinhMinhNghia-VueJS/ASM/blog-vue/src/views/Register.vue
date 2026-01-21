<template>
  <div class="container mt-4">
    <h2>Đăng ký</h2>

    <form>
      <div class="mb-3">
        <label>Tên</label>
        <input type="text" class="form-control">
      </div>

      <div class="mb-3">
        <label>Email</label>
        <input type="email" class="form-control">
      </div>

      <div class="mb-3">
        <label>Mật khẩu</label>
        <input type="password" class="form-control">
      </div>

      <button class="btn btn-success">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>
