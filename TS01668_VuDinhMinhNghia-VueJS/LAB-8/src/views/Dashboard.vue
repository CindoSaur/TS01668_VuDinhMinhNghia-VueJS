<template>
    <div class="dashboard-view py-4">
        <div class="d-flex justify-content-between align-items-center mb-5">
            <h2 class="fw-bold mb-0 text-primary">Bảng điều khiển</h2>
            <button class="btn btn-primary btn-sm rounded-pill px-3">
                <i class="bi bi-plus-lg me-1"></i> Viết bài mới
            </button>
        </div>

        <div class="row g-4 mb-5">
            <div v-for="(stat, index) in stats" :key="index" class="col-md-3 col-sm-6">
                <div class="custom-card text-center p-4">
                    <div :class="`icon-box bg-${stat.color} bg-opacity-10 text-${stat.color} rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center`"
                        style="width: 60px; height: 60px;">
                        <i :class="`bi bi-${stat.icon} fs-4`"></i>
                    </div>
                    <h3 class="fw-bold mb-0">{{ stat.value }}</h3>
                    <p class="text-muted small mb-0">{{ stat.label }}</p>
                </div>
            </div>
        </div>

        <div class="custom-card p-4">
            <h5 class="fw-bold mb-4">Các bài viết mới nhất</h5>
            <div class="table-responsive">
                <table class="table table-hover align-middle">
                    <thead class="table-light">
                        <tr>
                            <th>ID</th>
                            <th>Tiêu đề</th>
                            <th>Ngày đăng</th>
                            <th>Lượt xem</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="id in [1, 2, 3]" :key="id">
                            <td>#00{{ id }}</td>
                            <td><span class="fw-semibold">Bài viết số {{ id }}</span></td>
                            <td>10/02/2024</td>
                            <td>{{ 120 * id }}</td>
                            <td>
                                <button class="btn btn-sm btn-light text-primary me-2"><i
                                        class="bi bi-pencil-square"></i></button>
                                <button class="btn btn-sm btn-light text-danger"><i class="bi bi-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',
    data() {
        return {
            stats: [
                { label: 'Bài viết', value: '24', icon: 'journal-text', color: 'primary' },
                { label: 'Lượt xem', value: '1,280', icon: 'eye-fill', color: 'success' },
                { label: 'Bình luận', value: '48', icon: 'chat-dots-fill', color: 'warning' },
                { label: 'Người dùng', value: '12', icon: 'people-fill', color: 'info' }
            ]
        }
    }
}
</script>

<style scoped>
.icon-box i {
    line-height: 0;
}
</style>
