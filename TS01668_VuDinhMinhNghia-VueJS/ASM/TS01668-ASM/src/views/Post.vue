<template>
  <div class="container mt-5 d-flex justify-content-center">
    <div class="card shadow-lg w-100" style="max-width:720px;border-radius:16px">

      <!-- HEADER -->
      <div
        class="card-header text-white text-center"
        style="background:linear-gradient(135deg,#0d6efd,#6610f2);border-radius:16px 16px 0 0"
      >
        <h4 class="fw-bold mb-0">ĐĂNG BÀI VIẾT</h4>
        <small class="opacity-75">Chia sẻ thông tin của bạn</small>
      </div>

      <!-- BODY -->
      <div class="card-body p-4">

        <!-- TITLE -->
        <div class="mb-3">
          <label class="form-label fw-semibold">Tiêu đề</label>
          <input
            v-model="title"
            class="form-control form-control-lg"
            placeholder="Nhập tiêu đề bài viết"
          />
        </div>

        <!-- CONTENT -->
        <div class="mb-3">
          <label class="form-label fw-semibold">Nội dung</label>
          <textarea
            v-model="content"
            class="form-control"
            rows="6"
            placeholder="Nội dung bài viết..."
          ></textarea>
        </div>

        <!-- IMAGE -->
        <div class="mb-3">
          <label class="form-label fw-semibold">Ảnh minh họa</label>

          <!-- IMAGE SELECT -->
          <select v-model="image" class="form-select mb-2">
            <option value="">-- Ảnh mẫu --</option>
            <option value="/images/bao1.jpg">Ảnh tin tức 1</option>
            <option value="/images/bao2.jpg">Ảnh tin tức 2</option>
            <option value="/images/post-default.jpg">Ảnh mặc định</option>
          </select>

          <!-- IMAGE URL -->
          <input
            v-model="image"
            type="text"
            class="form-control"
            placeholder="Hoặc dán link ảnh (https://...)"
          />
        </div>

        <!-- PREVIEW -->
        <div v-if="image" class="text-center mb-4">
          <img
            :src="image"
            @error="onImageError"
            class="img-fluid rounded-3 shadow-sm"
            style="max-height:260px;object-fit:cover"
          />
          <div class="text-muted small mt-1">Xem trước ảnh</div>
        </div>

        <!-- ERROR -->
        <div v-if="error" class="alert alert-danger text-center py-2">
          {{ error }}
        </div>

        <!-- BUTTON -->
        <button class="btn btn-primary btn-lg w-100 mt-3" @click="createPost">
          Đăng bài viết
        </button>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const title = ref('')
const content = ref('')
const image = ref('')
const error = ref('')

/* ===== IMAGE ERROR ===== */
const onImageError = () => {
  image.value = '/images/post-default.jpg'
}

/* ===== CREATE POST ===== */
const createPost = () => {
  error.value = ''

  if (!title.value || !content.value) {
    error.value = 'Vui lòng nhập đầy đủ tiêu đề và nội dung'
    return
  }

  const user = JSON.parse(localStorage.getItem('user'))
  if (!user) {
    error.value = 'Vui lòng đăng nhập'
    return
  }

  const posts = JSON.parse(localStorage.getItem('posts')) || []

  posts.unshift({
    id: Date.now(),
    userId: user.id,
    title: title.value,
    content: content.value,
    image: image.value || '/images/post-default.jpg',
    date: new Date().toLocaleString('vi-VN'),
    status: 'Đã đăng'
  })

  localStorage.setItem('posts', JSON.stringify(posts))
  router.push('/')
}
</script>
