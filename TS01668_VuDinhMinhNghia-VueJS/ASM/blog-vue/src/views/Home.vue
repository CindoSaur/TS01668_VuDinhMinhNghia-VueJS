<template>
  <div class="container mt-4">
    <h2>Danh sách bài viết</h2>

    <div class="card mt-3" v-for="post in posts" :key="post.id">
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{ post.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      posts: [
        { id: 1, title: 'Bài viết 1', content: 'Nội dung bài viết 1' },
        { id: 2, title: 'Bài viết 2', content: 'Nội dung bài viết 2' }
      ]
    }
  }
}
</script>
