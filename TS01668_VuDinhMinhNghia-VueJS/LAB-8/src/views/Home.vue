<template>
    <div class="home-view py-5 text-center">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <h1 class="display-4 fw-bold mb-4">Chào mừng đến với <span class="text-primary">NghiaBlog</span></h1>
                <p class="lead mb-5 text-muted">
                    Nơi chia sẻ kiến thức, kinh nghiệm và những câu chuyện thú vị về lập trình và cuộc sống.
                    Khám phá những bài viết mới nhất của chúng tôi ngay hôm nay.
                </p>
                <div class="d-flex justify-content-center gap-3">
                    <RouterLink to="/blog" class="btn btn-primary btn-lg px-5 rounded-pill">Khám phá bài
                        viết</RouterLink>
                    <RouterLink to="/me" class="btn btn-outline-secondary btn-lg px-5 rounded-pill">Về
                        tôi</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
.home-view {
    min-height: 60vh;
    display: flex;
    align-items: center;
}
</style>

