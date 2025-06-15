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
