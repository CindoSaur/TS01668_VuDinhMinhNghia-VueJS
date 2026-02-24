<template>
    <div>
        <h3 class="fw-bold mb-4">Thông tin cơ bản</h3>
        <form class="row g-3">
            <div class="col-md-6">
                <label class="form-label fw-semibold">Họ và tên</label>
                <input type="text" class="form-control" value="Admin User" readonly>
            </div>
            <div class="col-md-6">
                <label class="form-label fw-semibold">Email</label>
                <input type="email" class="form-control" value="admin@fpt.edu.vn" readonly>
            </div>
            <div class="col-md-12">
                <label class="form-label fw-semibold">Tiểu sử</label>
                <textarea class="form-control" rows="3"
                    readonly>Tôi là quản trị viên của MyBlog. Rất vui được chia sẻ kiến thức với mọi người.</textarea>
            </div>
            <div class="col-md-6">
                <label class="form-label fw-semibold">Ngày tham gia</label>
                <p class="text-muted">10/02/2024</p>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'UserProfileInfo'
}
</script>
