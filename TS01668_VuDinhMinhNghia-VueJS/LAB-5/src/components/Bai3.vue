<template>
  <div class="col-sm-8 mx-auto">
    <h2>Thông tin cá nhân</h2>
    <div class="mb-3">
      <label>Tuổi</label>
      <input v-model="user.age" type="number" class="form-control">
    </div>
    <div class="mb-3">
      <label>Email</label>
      <input v-model="user.email" class="form-control">
    </div>
    <div class="bg-dark text-white p-3 rounded">
      <h5>Thông tin đã nhập:</h5>
      <p>Họ tên: {{ user.name }}</p>
      <p>Tuổi: {{ user.age }}</p>
      <p>Email: {{ user.email }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const user = reactive({
  name: '',
  age: 'null',
  email: ''
})
</script>
