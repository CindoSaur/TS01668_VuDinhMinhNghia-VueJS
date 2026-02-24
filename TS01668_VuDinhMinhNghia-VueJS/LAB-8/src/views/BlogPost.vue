  <template>
    <div class="blog-post-view py-4">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <nav aria-label="breadcrumb" class="mb-4">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/blog">Bài viết</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">Chi tiết</li>
                    </ol>
                </nav>

                <div class="custom-card p-5">
                    <img :src="`https://picsum.photos/1000/500?random=${$route.params.id}`"
                        class="img-fluid rounded-4 mb-5 shadow-sm" alt="Feature Image">

                    <h2 class="display-5 fw-bold mb-4">Bài viết số {{ $route.params.id }}</h2>

                    <div class="d-flex align-items-center mb-4 text-muted">
                        <div class="me-3">
                            <i class="bi bi-calendar3 me-1"></i> 10 Tháng 2, 2024
                        </div>
                        <div>
                            <i class="bi bi-person me-1"></i> Tác giả: Admin
                        </div>
                    </div>

                    <div class="post-content lh-lg text-secondary">
                        <p>
                            Đây là nội dung chi tiết của bài viết số {{ $route.params.id }}. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </p>
                    </div>

                    <hr class="my-5" />

                    <button @click="$router.push({ name: 'BlogList' })" class="btn btn-outline-primary rounded-pill">
                        <i class="bi bi-arrow-left me-2"></i> Quay lại danh sách
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogPost'
}
</script>

<style scoped>
.post-content {
    font-size: 1.1rem;
}
</style>
