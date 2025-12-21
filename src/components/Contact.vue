<template>
  <section id="contact" class="contact">
    <h2>Contact</h2>
    <div class="contact-links">
      <a v-for="link in links" :key="link.label" :href="link.url" class="contact-link">
        {{ link.label }}
      </a>
    </div>
  </section>
</template>

<script setup>
const links = [
  { label: 'Email', url: 'mailto:ricardoshrestha@gmail.com' },
  { label: 'GitHub', url: 'https://github.com/JObV9n/' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sachinshrestha830/' }
]
</script>

<style scoped>
.contact {
  padding: 2rem;
  background: white;
  max-width: 95vh;
  width: 100%;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 400;
  color: #333;
}

p {
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  color: #555;
}

.contact-links {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.contact-link {
  color: #b5b8bc;
  text-decoration: none;
  font-size: 0.95rem;
}

.contact-link:hover {
  text-decoration: underline;
}

.contact-link:not(:last-child)::after {
  content: ',';
  margin-left: 0.25rem;
  color: #555;
}
</style>
