<template>
  <div class="container mt-4">
    <h2>Thông tin cá nhân</h2>

    <form>
      <div class="mb-3">
        <label>Tên</label>
        <input type="text" class="form-control" value="Nguyễn Văn A">
      </div>

      <div class="mb-3">
        <label>Email</label>
        <input type="email" class="form-control" value="a@gmail.com">
      </div>

      <button class="btn btn-primary">Cập nhật</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>
