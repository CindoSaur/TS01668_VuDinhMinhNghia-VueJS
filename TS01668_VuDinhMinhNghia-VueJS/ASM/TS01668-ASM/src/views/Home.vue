<template>
  <div class="container mt-4">
    <div class="row">

      <!-- ===== MAIN CONTENT ===== -->
      <div class="col-md-8">

        <!-- ===== HEADLINE ===== -->
        <div v-if="headline" class="row mb-4">
          <div class="col-12">
            <img
              :src="headline.image"
              class="img-fluid w-100 rounded"
              style="height:380px;object-fit:cover;cursor:pointer"
              @click="goDetail(headline.id)"
            />

            <h2 class="fw-bold mt-3" style="cursor:pointer" @click="goDetail(headline.id)">
              {{ headline.title }}
            </h2>

            <p class="text-muted">
              {{ headline.description || headline.content }}
            </p>

            <span class="badge bg-secondary">
              {{ headline.category || 'Tin mới' }}
            </span>
          </div>
        </div>

        <hr />

        <!-- ===== TIN NOI BAT ===== -->
        <h4 class="fw-bold mb-3">Tin nổi bật</h4>

        <div class="row">
          <div class="col-md-6 mb-4" v-for="n in subNews" :key="n.id">
            <img
              :src="n.image"
              class="img-fluid w-100 rounded mb-2"
              style="height:180px;object-fit:cover;cursor:pointer"
              @click="goDetail(n.id)"
            />

            <h6 class="fw-bold" style="cursor:pointer" @click="goDetail(n.id)">
              {{ n.title }}
            </h6>

            <a
              href="javascript:void(0)"
              class="text-primary text-decoration-none"
              @click="toggle(n)"
            >
              {{ n.show ? 'Thu gọn ▲' : 'Xem thêm ▼' }}
            </a>

            <p v-if="n.show" class="text-muted mt-2">
              {{ n.description || n.content }}
            </p>
          </div>
        </div>
      </div>

      <!-- ===== SIDEBAR: TIN HOM NAY (CÓ ẢNH) ===== -->
      <div class="col-md-4">
        <h5 class="fw-bold mb-3">Tin hôm nay</h5>

        <div
          v-for="n in todayNews"
          :key="n.id"
          class="d-flex gap-2 mb-3 p-2 border rounded align-items-start"
          style="cursor:pointer"
          @click="goDetail(n.id)"
        >
          <!-- IMAGE -->
          <img
            :src="n.image"
            style="width:80px;height:60px;object-fit:cover;border-radius:6px"
          />

          <!-- TEXT -->
          <div>
            <small class="text-muted">
              {{ formatTime(n.id) }}
            </small>

            <p class="fw-bold mb-0 small">
              {{ n.title }}
            </p>
          </div>
        </div>

        <div v-if="todayNews.length === 0" class="text-muted">
          Chưa có tin hôm nay
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { inject, ref, computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const newsList = inject('newsList')


const localNews = computed(() => {
  const userPosts = JSON.parse(localStorage.getItem('posts')) || []

  return [
    ...newsList.value,
    ...userPosts
  ].map(n => ({
    ...n,
    image: n.image || '/images/post-default.jpg',
    show: false
  }))
})


/* ===== HEADLINE ===== */
const headline = computed(() =>
  localNews.value.find(n => n.isHeadline)
)

/* ===== TIN NOI BAT ===== */
const subNews = computed(() =>
  localNews.value.filter(n => !n.isHeadline)
)

/* ===== TIN HOM NAY ===== */
const isToday = (timestamp) => {
  const d = new Date(timestamp)
  const now = new Date()
  return (
    d.getDate() === now.getDate() &&
    d.getMonth() === now.getMonth() &&
    d.getFullYear() === now.getFullYear()
  )
}

const todayNews = computed(() =>
  localNews.value.filter(n => isToday(n.id))
)

/* ===== UTILS ===== */
const toggle = (news) => {
  news.show = !news.show
}

const formatTime = (timestamp) =>
  new Date(timestamp).toLocaleTimeString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit'
  })

const goDetail = (id) => {
  router.push(`/post/${id}`)
}
</script>
