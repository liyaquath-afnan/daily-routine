<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo/Brand -->
      <div class="navbar-brand">
        <a href="#" class="brand-link">
          Daily Routine
        </a>
      </div>

      <!-- Mobile menu button -->
      <button 
        class="mobile-menu-btn"
        @click="toggleMobileMenu"
        :class="{ 'active': isMobileMenuOpen }"
        aria-label="Toggle navigation menu"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <!-- Navigation Links -->
      <div class="navbar-menu" :class="{ 'active': isMobileMenuOpen }">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#" class="nav-link" @click="closeMobileMenu">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click="closeMobileMenu">
              My Routines
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click="closeMobileMenu">
              Create Routine
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click="closeMobileMenu">
              Profile
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Mobile menu state
const isMobileMenuOpen = ref(false)

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Close mobile menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Close mobile menu when clicking outside
const handleClickOutside = (event: Event) => {
  const navbar = document.querySelector('.navbar')
  if (navbar && !navbar.contains(event.target as Node)) {
    closeMobileMenu()
  }
}

// Close mobile menu on window resize
const handleResize = () => {
  if (window.innerWidth > 768) {
    closeMobileMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped src="./navbar.css"></style>
