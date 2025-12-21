<template>
  <section id="about" class="about">
    <h2>Hello World!</h2>
    <p>{{ description }}</p>
  </section>
</template>

<script setup>
const description = 'I am Sachin Shrestha, a passionate backend engineer and software developer with a keen interest in design and technology. With a strong foundation in building robust backend systems, I like creating something new and trying out new things.'
</script>

<style scoped>
.about {
  padding: 2rem;
  background: white;
  border-bottom: 1px solid #f5f5f5;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 400;
  color: #333;
}

p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #555;
  max-width: 1200px;
}
</style>
