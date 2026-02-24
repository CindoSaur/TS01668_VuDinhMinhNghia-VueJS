<template>
    <div class="row w-100 ">
        <div class="col-6">
            <h2>Form Đăng Ký</h2>
            <form @submit.prevent="handleSubmit">
                <div class="mb-3">
                    <label class="form-label">Họ tên:</label>
                    <input type="text" class="form-control" v-model="data.fullName">
                </div>

                <div class="mb-3">
                    <label class="form-label">Email:</label>
                    <input type="email" class="form-control" v-model="data.email">
                </div>

                <div class="mb-3">
                    <label class="form-label">Mật khẩu:</label>
                    <input type="password" class="form-control" v-model="data.password">
                </div>

                <div class="mb-3">
                    <label class="form-label">Ngày sinh:</label>
                    <input type="date" class="form-control" v-model="data.birthday">
                </div>

                <div class="mb-3">
                    <label class="me-2">Giới tính:</label>
                    <input type="radio" value="Nam" v-model="data.gender"> Nam
                    <input type="radio" value="Nữ" v-model="data.gender"> Nữ
                    <input type="radio" value="Khác" v-model="data.gender"> Khác
                </div>

                <div class="mb-3" style="width: 25em;">
                    <label class="me-2">Ngôn ngữ:</label>
                    <input type="checkbox" value="Tiếng Việt" v-model="data.languages"> Tiếng Việt
                    <input type="checkbox" value="Tiếng Anh" v-model="data.languages"> Tiếng Anh
                    <input type="checkbox" value="Tiếng Nhật" v-model="data.languages"> Tiếng Nhật
                </div>

                <button type="submit" class="btn btn-primary" @click="handleSubmit" :disabled="!isValid">Đăng
                    ký</button>
            </form>
            {{ isValid }}

        </div>
        <div class="col-6">
            <h1>Thông tin đăng ký</h1>
            <p><b>Họ và tên:</b> {{ user.fullName }}</p>
            <p><b>Email:</b> {{ user.email }}</p>
            <p><b>Ngày sinh:</b> {{ user.birthday }}</p>
            <p><b>Giới tính:</b> {{ user.gender }}</p>
            <p><b>Ngôn ngữ:</b> {{ user.languages.join(", ") }}</p>
        </div>
    </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const data = reactive({
    fullName: '',
    email: '',
    password: '',
    birthday: '',
    gender: 'Nam',
    languages: []
});

const user = ref({ ...data });

const isValid = computed(
    () => data.fullName && emailRegex.test(data.email) && data.password && data.birthday
        && data.languages[0]
);

const handleSubmit = () => {
    console.log(isValid.value);

    if (isValid.value)
        user.value = { ...data }
};

</script>
