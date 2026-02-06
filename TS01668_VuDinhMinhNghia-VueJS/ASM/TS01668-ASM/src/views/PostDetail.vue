<template>
  <div class="container mt-4">
    <div class="row">

      <!-- ===== MAIN ===== -->
      <div class="col-md-8" v-if="post">

        <h2 class="fw-bold mb-3">
          {{ post.title }}
        </h2>

        <img
          :src="post.image"
          class="img-fluid w-100 rounded mb-3"
          style="max-height:400px;object-fit:cover"
        />

        <p class="text-muted">
          {{ post.content || post.description }}
        </p>

        <span v-if="post.category" class="badge bg-secondary mb-4">
          {{ post.category }}
        </span>

        <hr />

        <!-- ===== COMMENT ===== -->
        <h5 class="fw-bold mb-3">Bình luận</h5>

        <!-- CHƯA LOGIN -->
        <div
          v-if="!isLogin"
          class="border rounded p-3 text-center text-muted mb-3"
          style="cursor:pointer"
          @click="goLogin"
        >
          Đăng nhập để bình luận
        </div>

        <!-- ĐÃ LOGIN -->
        <div v-else class="mb-3">
          <textarea
            v-model="newComment"
            class="form-control mb-2"
            rows="3"
            placeholder="Viết bình luận..."
          ></textarea>

          <button class="btn btn-primary btn-sm" @click="addComment">
            Gửi
          </button>
        </div>

        <!-- LIST COMMENT -->
        <div
          v-for="c in postComments"
          :key="c.id"
          class="border-top pt-2 mt-2"
        >
          <strong>{{ c.userName }}</strong>
          <small class="text-muted ms-2">{{ c.time }}</small>
          <p class="mb-1">{{ c.content }}</p>
        </div>

        <div v-if="postComments.length === 0" class="text-muted">
          Chưa có bình luận nào
        </div>
      </div>

      <!-- ===== SIDEBAR ===== -->
      <div class="col-md-4">
        <h5 class="fw-bold mb-3">Tin khác</h5>

        <div
          v-for="n in otherPosts"
          :key="n.id"
          class="mb-3"
          style="cursor:pointer"
          @click="goDetail(n.id)"
        >
          <img
            :src="n.image"
            class="img-fluid w-100 rounded mb-1"
            style="height:120px;object-fit:cover"
          />
          <p class="fw-bold mb-1">{{ n.title }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { inject, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

/* ===== DATA ===== */
const newsList = inject('newsList')
const comments = inject('comments')
const currentUser = inject('currentUser')

const postId = route.params.id   // 🔥 FIX Ở ĐÂY

/* ===== GỘP TIN ===== */
const allPosts = computed(() => {
  const userPosts = JSON.parse(localStorage.getItem('posts')) || []
  return [...newsList.value, ...userPosts]
})

/* ===== POST ===== */
const post = computed(() =>
  allPosts.value.find(p => p.id == postId)   // 🔥 FIX
)

const otherPosts = computed(() =>
  allPosts.value.filter(p => p.id != postId).slice(0, 5)
)

/* ===== COMMENT ===== */
const newComment = ref('')
const isLogin = computed(() => currentUser.value !== null)

const postComments = computed(() =>
  comments.value.filter(c => c.postId == postId) // 🔥 FIX
)

const addComment = () => {
  if (!newComment.value.trim()) return

  const comment = {
    id: Date.now(),
    postId,
    userName: currentUser.value.name,
    content: newComment.value,
    time: new Date().toLocaleString('vi-VN')
  }

  comments.value.unshift(comment)
  localStorage.setItem('comments', JSON.stringify(comments.value))
  newComment.value = ''
}

/* ===== NAV ===== */
const goLogin = () => router.push('/login')
const goDetail = id => router.push(`/post/${id}`)
</script>

