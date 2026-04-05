<script setup>
import { Icon } from '@iconify/vue'
import { portfolioData } from '../data/portfolio.js'
</script>

<template>
  <section class="section experience" id="experience">
    <div class="section-inner">
      <div class="section-header">
        <div class="section-divider">
          <Icon icon="game-icons:skull-crossed-bones" />
          <Icon icon="game-icons:skull-crossed-bones" />
          <Icon icon="game-icons:skull-crossed-bones" />
        </div>
        <h2>Service Record</h2>
      </div>
      <div class="timeline">
        <div class="timeline-item" v-for="(exp, index) in portfolioData.experience" :key="index">
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <div class="timeline-header">
              <h3 class="timeline-role">{{ exp.role }}</h3>
              <span class="timeline-period">{{ exp.period }}</span>
            </div>
            <div class="timeline-company">{{ exp.company }}</div>
            <p class="timeline-desc">{{ exp.description }}</p>
            <div class="timeline-tags">
              <span class="tag" v-for="tag in exp.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
