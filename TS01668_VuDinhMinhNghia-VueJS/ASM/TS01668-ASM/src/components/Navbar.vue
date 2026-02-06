<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        BREAKING NEWS
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">

          <li class="nav-item">
            <router-link to="/" class="nav-link">
              <i class="bi bi-house-door me-1"></i>
              Home
            </router-link>
          </li>
          <li class="nav-item" v-if="isLogin">
            <router-link to="/post" class="nav-link">
              <i class="bi bi-plus-circle me-1"></i>
              Post
            </router-link>
          </li>

          <li class="nav-item" v-if="isLogin">
            <router-link to="/profile" class="nav-link">
              <i class="bi bi-person-circle me-1"></i>
              Profile
            </router-link>
          </li>

          <li class="nav-item" v-if="isLogin">
            <span class="nav-link text-light">
              Xin chào {{ user.name }}
            </span>
          </li>

          <li class="nav-item" v-if="!isLogin">
            <router-link to="/login" class="nav-link">
              <i class="bi bi-box-arrow-in-right me-1"></i>
              Login
            </router-link>
          </li>

          <li class="nav-item" v-if="isLogin">
            <a href="#" class="nav-link" @click.prevent="logout">
              <i class="bi bi-box-arrow-right me-1"></i>
              Logout
            </a>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { inject, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentUser = inject('currentUser')

const isLogin = computed(() => {
  return currentUser.value !== null
})

const user = computed(() => {
  return currentUser.value || {}
})

const logout = () => {
  localStorage.removeItem('user')
  currentUser.value = null
  router.push('/login')
}
</script>


