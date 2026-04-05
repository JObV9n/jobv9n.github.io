<script setup>
import { Icon } from '@iconify/vue'
import { portfolioData } from '../data/portfolio.js'
</script>

<template>
  <section class="section about" id="about">
    <div class="section-inner">
      <div class="section-header">
        <div class="section-divider">
          <Icon icon="game-icons:custodian-helmet" />
          <Icon icon="game-icons:custodian-helmet" />
          <Icon icon="game-icons:custodian-helmet" />
        </div>
        <h2>About Me</h2>
      </div>
      <div class="about-content">
        <div class="about-text">
          <p v-for="(para, index) in portfolioData.about.paragraphs" :key="index">{{ para }}</p>
        </div>
        <div class="about-stats">
          <div class="stat-card" v-for="stat in portfolioData.about.stats" :key="stat.label">
            <span class="stat-number">{{ stat.number }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
