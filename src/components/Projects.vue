<script setup>
import { Icon } from '@iconify/vue'
import { portfolioData } from '../data/portfolio.js'
</script>

<template>
  <section class="section projects" id="projects">
    <div class="section-inner">
      <div class="section-header">
        <div class="section-divider">
          <Icon icon="game-icons:crossed-swords" />
          <Icon icon="game-icons:crossed-swords" />
          <Icon icon="game-icons:crossed-swords" />
        </div>
        <h2>Campaign Archives</h2>
      </div>
      <div class="projects-grid">
        <div class="project-card" v-for="project in portfolioData.projects" :key="project.title">
          <div class="project-card-accent"></div>
          <div class="project-card-body">
            <div class="project-status">{{ project.status }}</div>
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.description }}</p>
            <div class="project-tech">
              <span class="tag" v-for="tech in project.tech" :key="tech">{{ tech }}</span>
            </div>
            <div class="project-links">
              <a v-if="project.github" :href="project.github" target="_blank" rel="noopener">
                <Icon icon="game-icons:bolter-gun" /> Repository
              </a>
              <a v-if="project.live" :href="project.live" target="_blank" rel="noopener">
                <Icon icon="game-icons:linked-rings" /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
