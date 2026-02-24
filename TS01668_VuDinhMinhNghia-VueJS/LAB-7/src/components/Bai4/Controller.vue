<template>
    <div>
        <Login v-if="!isLoggedIn" @loggedIn="handleLoginSuccess" />
        <Comment v-else :username="loggedInUser" />
    </div>
</template>


<script setup>
import { ref } from 'vue';
import Comment from './Comment.vue';
import Login from './Login.vue';

const isLoggedIn = ref(false);
const loggedInUser = ref('');

function handleLoginSuccess(username) {
    loggedInUser.value = username;
    isLoggedIn.value = true;
}
</script>
