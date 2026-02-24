
<template>
    <div class="user-profile-view py-4">
        <div class="row">
            <div class="col-md-4 mb-4">
                <div class="custom-card p-4">
                    <div class="text-center mb-4">
                        <img src="https://ui-avatars.com/api/?name=Admin&background=0D6EFD&color=fff&size=128"
                            class="rounded-circle shadow-sm mb-3" alt="Avatar">
                        <h4 class="mb-0">Administrator</h4>
                        <p class="text-muted small">admin@fpt.edu.vn</p>
                    </div>

                    <div class="list-group list-group-flush rounded-3">
                        <RouterLink to="/profile/info"
                            class="list-group-item list-group-item-action py-3 d-flex align-items-center">
                            <i class="bi bi-person-circle me-3 text-primary"></i> Thông tin cơ bản
                        </RouterLink>
                        <RouterLink to="/profile/settings"
                            class="list-group-item list-group-item-action py-3 d-flex align-items-center">
                            <i class="bi bi-gear-fill me-3 text-primary"></i> Cài đặt tài khoản
                        </RouterLink>
                    </div>
                </div>
            </div>

            <div class="col-md-8">
                <div class="custom-card p-4">
                    <!-- Nơi hiển thị các component con (info, settings) -->


                    <RouterView v-slot="{ Component }">
                        <transition name="fade" mode="out-in">
                            <component :is="Component" />
                        </transition>
                    </RouterView>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserProfile'
}
</script>

<style scoped>
.list-group-item.RouterLink-active {
    background-color: var(--bg-light);
    color: var(--primary-color);
    font-weight: 600;
    border-left: 4px solid var(--primary-color);
}

.list-group-item {
    border: none;
    font-weight: 500;
    border-radius: 8px !important;
    margin-bottom: 5px;
}
</style>
