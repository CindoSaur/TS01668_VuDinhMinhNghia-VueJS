<template>
    <div>
        <h3 class="fw-bold mb-4">Cài đặt tài khoản</h3>
        <div class="section mb-5">
            <h6 class="text-primary fw-bold text-uppercase small mb-3">Bảo mật</h6>
            <div class="mb-3">
                <label class="form-label">Mật khẩu hiện tại</label>
                <input type="password" class="form-control" placeholder="********">
            </div>
            <div class="mb-3">
                <label class="form-label">Mật khẩu mới</label>
                <input type="password" class="form-control">
            </div>
            <button class="btn btn-primary btn-sm">Cập nhật mật khẩu</button>
        </div>

        <div class="section">
            <h6 class="text-primary fw-bold text-uppercase small mb-3">Thông báo</h6>
            <div class="form-check form-switch mb-2">
                <input class="form-check-input" type="checkbox" id="emailNotif" checked>
                <label class="form-check-input" for="emailNotif">Nhận thông báo qua Email</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="pushNotif">
                <label class="form-check-input" for="pushNotif">Nhận thông báo đẩy</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserProfileSettings'
}
</script>
<style lang="">

</style>
