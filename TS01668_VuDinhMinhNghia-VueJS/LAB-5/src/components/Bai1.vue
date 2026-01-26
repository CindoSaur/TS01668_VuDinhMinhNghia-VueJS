<template>
  <div class="p-5">
    <p>{{ message }}</p>
    <button class="btn btn-dark" @click="updateMessage">Thay đổi thông điệp</button>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const message = ref ('Hello mọi người(Thông điệp ban đầu)')

  const updateMessage = () =>{
    message.value = 'Tôi là Vũ Đình Minh Nghĩa (Thông điệp đã được thay đổi)'
  }
</script>
