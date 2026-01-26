<template>
  <div class="p-5">
    <input v-model="userInput" class="form-control mb-3" placeholder="Nhập dữ liệu vào đâu" />
    <p>Giá trị bạn nhập: {{ userInput }}</p>
  </div>
</template>
<script setup>
import {ref} from 'vue'
const userInput=ref('FPL')
</script>
