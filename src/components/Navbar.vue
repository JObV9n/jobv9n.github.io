<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import { portfolioData } from '../data/portfolio.js'

const isOpen = ref(false)
const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  document.body.style.overflow = isOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

const handleNavClick = (e, href) => {
  e.preventDefault()
  closeMenu()
  const targetEl = document.querySelector(href)
  if (targetEl) {
    const navbarHeight = 60
    const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navbarHeight
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="navbar" :class="{ scrolled }">
    <a href="#" class="navbar-logo">
      <Icon icon="game-icons:eagle-emblem" class="aquila" />
      <span>Imperial Portfolio</span>
    </a>
    <div class="navbar-links">
      <a 
        v-for="link in portfolioData.navLinks" 
        :key="link.href" 
        :href="link.href"
        @click="(e) => handleNavClick(e, link.href)"
      >
        {{ link.label }}
      </a>
    </div>
    <button class="navbar-toggle" @click="toggleMenu" aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
  <div class="mobile-nav" :class="{ open: isOpen }">
    <a 
      v-for="link in portfolioData.navLinks" 
      :key="link.href" 
      :href="link.href" 
      @click="(e) => handleNavClick(e, link.href)"
    >
      {{ link.label }}
    </a>
  </div>
</template>
