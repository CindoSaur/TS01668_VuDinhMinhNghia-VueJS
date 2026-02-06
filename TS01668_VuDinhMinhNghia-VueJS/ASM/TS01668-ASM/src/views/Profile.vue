<template>
  <div class="container mt-4">

    <!-- ===== INFO ===== -->
    <div class="row p-3 mb-4 border rounded">

      <!-- AVATAR -->
      <div class="col-md-4 text-center">
        <img
          :src="previewAvatar || user.avatar || defaultAvatar"
          class="rounded-circle mb-3"
          style="width:160px;height:160px;object-fit:cover"
        />

        <input
          type="file"
          class="form-control"
          accept="image/*"
          @change="onSelectAvatar"
        />
      </div>

      <!-- FORM -->
      <div class="col-md-8">
        <h4 class="mb-3">Thông tin cá nhân</h4>

        <input v-model="newName" class="form-control mb-2" placeholder="Họ tên" />
        <input v-model="newEmail" class="form-control mb-2" placeholder="Email" />
        <input v-model="newPassword" type="password" class="form-control mb-3" placeholder="Mật khẩu mới" />

        <button class="btn btn-success" @click="updateProfile">
          Lưu thay đổi
        </button>
      </div>
    </div>

    <!-- ===== POSTS ===== -->
    <div class="border rounded p-3">
      <h4>Bài viết đã đăng</h4>

      <p v-if="posts.length === 0" class="text-muted">
        Chưa có bài viết
      </p>

      <table v-else class="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Tiêu đề</th>
            <th>Ngày</th>
            <th width="160">Thao tác</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(p, i) in posts" :key="p.id">
            <td>{{ i + 1 }}</td>
            <td>{{ p.title }}</td>
            <td>{{ p.date }}</td>
            <td>
              <button class="btn btn-sm btn-warning me-1" @click="openEdit(p)">
                Sửa
              </button>
              <button class="btn btn-sm btn-danger" @click="deletePost(p.id)">
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ===== MODAL EDIT POST ===== -->
    <div
      v-if="editingPost"
      class="modal fade show"
      style="display:block; background:rgba(0,0,0,0.5)"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">

          <div class="modal-header">
            <h5 class="modal-title">Chỉnh sửa bài viết</h5>
            <button class="btn-close" @click="closeEdit"></button>
          </div>

          <div class="modal-body">

            <input
              v-model="editingPost.editTitle"
              class="form-control mb-3"
              placeholder="Tiêu đề bài viết"
            />

            <textarea
              v-model="editingPost.editContent"
              class="form-control mb-3"
              rows="6"
              placeholder="Nội dung bài viết"
            ></textarea>

            <!-- IMAGE -->
            <img
              :src="previewPostImage || editingPost.image"
              class="img-fluid rounded mb-2"
              style="max-height:250px;object-fit:cover"
            />

            <input
              type="file"
              class="form-control"
              accept="image/*"
              @change="onSelectPostImage"
            />

          </div>

          <div class="modal-footer">
            <button class="btn btn-secondary" @click="closeEdit">
              Hủy
            </button>
            <button class="btn btn-success" @click="saveEdit">
              Lưu thay đổi
            </button>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue'

const newsList = inject('newsList')

const defaultAvatar = 'https://cdn-icons-png.flaticon.com/512/149/149071.png'

const user = ref({})
const posts = ref([])

const newName = ref('')
const newEmail = ref('')
const newPassword = ref('')
const previewAvatar = ref(null)
let avatarBase64 = null

const editingPost = ref(null)
const previewPostImage = ref(null)
let postImageBase64 = null

/* ===== INIT ===== */
onMounted(() => {
  user.value = JSON.parse(localStorage.getItem('user'))
  newName.value = user.value.name
  newEmail.value = user.value.email

  const allPosts = JSON.parse(localStorage.getItem('posts')) || []
  posts.value = allPosts.filter(p => p.userId === user.value.id)
})

/* ===== AVATAR ===== */
const onSelectAvatar = (e) => {
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    avatarBase64 = reader.result
    previewAvatar.value = avatarBase64
  }
  reader.readAsDataURL(file)
}

/* ===== SAVE PROFILE ===== */
const updateProfile = () => {
  const users = JSON.parse(localStorage.getItem('users')) || []
  const index = users.findIndex(u => u.id === user.value.id)

  user.value.name = newName.value
  user.value.email = newEmail.value
  if (newPassword.value) user.value.password = newPassword.value
  if (avatarBase64) user.value.avatar = avatarBase64

  users[index] = user.value
  localStorage.setItem('users', JSON.stringify(users))
  localStorage.setItem('user', JSON.stringify(user.value))

  alert('Đã lưu thành công!')
}

/* ===== EDIT POST ===== */
const openEdit = (p) => {
  editingPost.value = {
    ...p,
    editTitle: p.title,
    editContent: p.content
  }
  previewPostImage.value = null
  postImageBase64 = null
}

const onSelectPostImage = (e) => {
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    postImageBase64 = reader.result
    previewPostImage.value = postImageBase64
  }
  reader.readAsDataURL(file)
}

const saveEdit = () => {
  let all = JSON.parse(localStorage.getItem('posts')) || []
  const index = all.findIndex(p => p.id === editingPost.value.id)

  all[index].title = editingPost.value.editTitle
  all[index].content = editingPost.value.editContent
  if (postImageBase64) all[index].image = postImageBase64

  localStorage.setItem('posts', JSON.stringify(all))

  /* update profile */
  const i = posts.value.findIndex(p => p.id === editingPost.value.id)
  posts.value[i] = { ...all[index] }

  const h = newsList.value.findIndex(n => n.id === editingPost.value.id)
  if (h !== -1) newsList.value[h] = { ...all[index] }

  editingPost.value = null
  alert('Cập nhật bài viết thành công!')
}

const closeEdit = () => {
  editingPost.value = null
}

/* ===== DELETE ===== */
const deletePost = (id) => {
  if (!confirm('Xóa bài viết?')) return

  let all = JSON.parse(localStorage.getItem('posts')) || []
  all = all.filter(p => p.id !== id)

  localStorage.setItem('posts', JSON.stringify(all))
  posts.value = posts.value.filter(p => p.id !== id)
  newsList.value = newsList.value.filter(p => p.id !== id)
}
</script>
