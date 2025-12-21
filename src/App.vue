<template>
  <div class="portfolio">
    <main class="main-content">
      <Hero />
      <About />
      <Projects />
    </main>
    <footer class="footer">
      <Contact />
    </footer>
  </div>
</template>

<script setup>
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/tracks.vue'
import Contact from './components/Contact.vue'
</script>

<style scoped>
.portfolio {
  background: white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;  
}

.main-content {
  flex: 1;
  max-width: 95vh;
  width: 100%;
  margin: 0 auto;
}

.footer {
  margin-top: auto;
  width: 100%;
  background: white;
  border-top: 1px solid white;
  display: flex;
  justify-content: center;
}
</style>
