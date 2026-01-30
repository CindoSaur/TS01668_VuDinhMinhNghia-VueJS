<template>
  <div>
    <h3>Nhập điểm trung bình của học sinh</h3>
  </div>
  <input type="number" step="0,1" v-model.number="dtb" />
  <p v-if="dtb < 0 || dtb > 10" style="color : red">
    Vui lòng nhập điểm từ 0 -> 10!
  </p>
  <p v-else-if="dtb < 5.0">Xếp loại: Yếu</p>
  <p v-else-if="dtb < 6.5">Xếp loại: Trung bình</p>
  <p v-else-if="dtb < 8.0">Xếp loại: Khá</p>
  <p v-else-if="dtb < 9.0">Xếp loại: Giỏi</p>
  <p v-else>Xếp loại: Xuất xắc</p>
</template>

<script setup>
  import{ref} from 'vue'
  const dtb = ref(0);
</script>
