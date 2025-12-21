<template>
  <section class="hero">
    <div class="profile">
      <div class="profile-image">
        <img src="/src/img/meta.jpeg" alt="Profile">
      </div>
      <div class="profile-info">
        <h1>{{ name }}</h1>
        <div class="links">
          <a href="#">About</a> - <a href="#projects">Projects</a> - <a href="#contact">Contact</a>
        </div>
        <p><strong>Interests:</strong> {{ interests }}</p>
        <p><strong>Open to:</strong> {{ OpenTo }} </p>
    </div>
    </div>
  </section>
</template>

<script setup>
const name = 'Sachin Shrestha'
const interests = 'Backend Engineering, Software Development, design, and technology.'
const OpenTo = "Consulting, Full-time, Part-time, Freelance, Teaching and Coaching."
</script>

<style scoped>
.hero {
  padding: 2rem;
  background: white;
  border-bottom: 1px solid #f5f5f5;
}

.profile {
  display: flex;
  gap: 2rem;
  max-width: 95vh;
}

.profile-image img {
  width: 18vh;
  height: 25vh;
  object-fit: contain;
}

.profile-info h1 {
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  color: #333;
}

.links {
  margin-bottom: 1rem;
}

.links a {
  color: #d2d5d8;
  text-decoration: none;
}

.links a:hover {
  text-decoration: underline;
}

.profile-info p {
  margin-bottom: 0.5rem;
  color: #555;
  line-height: 1.6;
  font-size: 0.95rem;
}
</style>
