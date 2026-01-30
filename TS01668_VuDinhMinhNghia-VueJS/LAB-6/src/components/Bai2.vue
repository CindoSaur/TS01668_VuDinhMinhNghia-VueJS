<template>
  <div>
    <h3>
      Nhập thắng của bạn
    </h3>
    <input type="number" v-model-number="month"/>
    <p v-if="month < 1 || month < 12">Vui lòng nhập tháng vào đây</p>
    <p v-else-if="month >= 1 && month <= 3">Mù Xuân</p>
    <p v-else-if="month >= 4 && month <= 6">Mù Hè</p>
    <p v-else-if="motnh >= 7 && month <= 9">Mùa Thu</p>
    <p v-else>Mù Đông</p>
  </div>
</template>
<script setup>
  import{ref} from 'vue';
  const month = ref('1');
</script>
