<template>
  <Navbar />
  <router-view />
</template>

<script setup>
import { ref, provide, computed } from 'vue'
import Navbar from './components/Navbar.vue'

import BAO1 from './assets/BAO1.jpg'
import BAO2 from './assets/BAO2.jpg'
import BAO3 from './assets/BAO3.jpg'
import BAO4 from './assets/BAO4.jpg'

/* ===== USER ===== */
const currentUser = ref(
  JSON.parse(localStorage.getItem('user'))
)

window.addEventListener('user-change', () => {
  currentUser.value = JSON.parse(localStorage.getItem('user'))
})

/* ===== TIN MẪU ===== */
const baseNews = ref([
  {
    id: 1,
    title: 'Hà Nội bắn pháo hoa 33 điểm dịp Tết Nguyên đán',
    description: 'Hà Nội tổ chức 33 điểm bắn với 34 trận địa pháo hoa, kéo dài 15 phút trong đêm Giao thừa Tết Nguyên đán Bính Ngọ 2026, tổng kinh phí gần 40 tỷ đồng từ ngân sách và nguồn xã hội hóa.',
    image: BAO1,
    category: 'Cuộc sống',
    isHeadline: true
  },
  {
    id: 2,
    title: 'Phó chủ tịch UBND TP HCM làm Phó chủ tịch HĐND',
    description: 'Ông Nguyễn Văn Dũng, 54 tuổi, thôi làm Phó chủ tịch UBND TP HCM và quay lại giữ vị trí Phó chủ tịch HĐND thành phố. ',
    image: BAO2,
    category: 'Thời sự',
    isHeadline: false
  },
  {
    id: 3,
    title: 'Lý do Ấn Độ khó từ bỏ dầu Nga',
    description: 'Mỹ gây áp lực buộc Ấn Độ giảm nhập dầu Nga, nhưng lợi ích kinh tế và tính toán địa chính trị khiến New Delhi khó quay lưng với nguồn năng lượng giá rẻ này.',
    image: BAO3,
    category: 'Quốc tế',
    isHeadline: false
  },
  {
    id: 4,
    title: 'Tướng Nga bị bắn ở Moskva',
    description: 'Tướng Vladimir Alekseyev bị bắn nhiều phát đạn trong một tòa chung cư ở Moskva và đã được đưa đến bệnh viện.',
    image: BAO4,
    category: 'Thế giới',
    isHeadline: false
  }
])

/* ===== POST USER ===== */
const posts = ref(
  JSON.parse(localStorage.getItem('posts')) || []
)

window.addEventListener('post-change', () => {
  posts.value = JSON.parse(localStorage.getItem('posts')) || []
})

/* ===== GỘP DATA ===== */
const newsList = computed(() => [
  ...baseNews.value,
  ...posts.value.map(p => ({
    id: p.id,
    title: p.title,
    description: p.content,
    image: BAO1, // ảnh tạm
    category: 'Người dùng',
    isHeadline: false
  }))
])

/* ===== COMMENT ===== */
const comments = ref(
  JSON.parse(localStorage.getItem('comments')) || []
)

provide('currentUser', currentUser)
provide('newsList', newsList)
provide('comments', comments)
</script>
