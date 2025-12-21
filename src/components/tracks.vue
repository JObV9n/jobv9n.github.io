<template>
  <section id="projects" class="projects">
    <h2>Projects & Work</h2>
    <div class="project-list">
      <div v-for="project in projects" :key="project.id" class="project">
        <h3><a :href="project.link" class="link">{{ project.title }}</a></h3>
        <p class="summary">{{ project.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: 'schoolorship_finder',
    description: 'Scraping, Typescript, Puppeteer, and try to find, schoolorships',
    link:"https://github.com/JObV9n/schoolorship_finder"

  },
  {
    id: 2,
    title: 'Eshop',
    description: 'E-commerce(Clothes only), Vue, Typescript, most, Frontend implemented with GPT',
    link:"https://github.com/JObV9n/eshop"
  },
  {
    id: 3,
    title: 'Calculator App',
    description: 'First Android App ever Created, kickass basic calculator!',
    link:"https://github.com/JObV9n/CalculatorApp"
  }
]
</script>

<style scoped>
.projects {
  padding: 2rem;
  background: white;
  border-bottom: 1px solid #f5f5f5;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 400;
  color: #333;
}

.project-list {
  max-width: 1200px;
}

.project {
  margin-bottom: 2rem;
}

.project h3 {
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
  color: #333;
  font-weight: 600;
}

.link {
  color: #333;
  text-decoration: none;
  font-size: 0.9rem;
}

.link:hover {
  text-decoration: underline;
}

.summary {
  color: #555;
  margin-top: 0.5rem;
  line-height: 1.6;
  font-size: 0.9rem;
  font-style: italic;
}
</style>
