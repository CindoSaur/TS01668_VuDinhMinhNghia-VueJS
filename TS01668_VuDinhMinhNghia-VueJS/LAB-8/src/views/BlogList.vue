<template>
    <div class="blog-list-view">
        <div class="d-flex justify-content-between align-items-end mb-5">
            <div>
                <h2 class="fw-bold mb-1">Danh sách bài viết</h2>
                <p class="text-muted">Cập nhật những kiến thức mới nhất từ cộng đồng</p>
            </div>
        </div>

        <div class="row g-4">
            <div v-for="id in [1, 2, 3, 4, 5, 6]" :key="id" class="col-md-4 col-sm-6">
                <div class="card h-100 custom-card">
                    <img :src="`https://picsum.photos/400/250?random=${id}`" class="card-img-top rounded-top-4"
                        alt="Blog Image">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">Bài viết số {{ id }}</h5>
                        <p class="card-text text-muted">
                            Tóm tắt nội dung bài viết số {{ id }}. Đây là một mô tả ngắn để người dùng nắm bắt thông tin
                            cơ bản trước khi xem chi tiết.
                        </p>
                    </div>
                    <div class="card-footer bg-transparent border-0 pb-4">
                        <router-link :to="{ name: 'BlogPost', params: { id: id } }"
                            class="btn btn-link p-0 text-decoration-none fw-bold">
                            Đọc thêm <i class="bi bi-arrow-right"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogList'
}
</script>

<style scoped>
.card-img-top {
    height: 180px;
    object-fit: cover;
}
</style>
