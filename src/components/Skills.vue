<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import { portfolioData } from '../data/portfolio.js'

const animatedBars = ref(false)

const animateSkillBars = () => {
  const section = document.getElementById('skills')
  if (!section) return
  
  const rect = section.getBoundingClientRect()
  if (rect.top < window.innerHeight * 0.75 && !animatedBars.value) {
    animatedBars.value = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', animateSkillBars)
  animateSkillBars()
})

onUnmounted(() => {
  window.removeEventListener('scroll', animateSkillBars)
})
</script>

<template>
  <section class="section skills" id="skills">
    <div class="section-inner">
      <div class="section-header">
        <div class="section-divider">
          <Icon icon="game-icons:cog" />
          <Icon icon="game-icons:cog" />
          <Icon icon="game-icons:cog" />
        </div>
        <h2>Arsenal & Capabilities</h2>
      </div>
      <div class="skills-grid">
        <div class="skill-category" v-for="category in portfolioData.skills" :key="category.category">
          <Icon :icon="category.icon" class="skill-category-icon" />
          <h3 class="skill-category-title">{{ category.category }}</h3>
          <div class="skill-item" v-for="skill in category.items" :key="skill.name">
            <div class="skill-label-row">
              <span class="skill-label">{{ skill.name }}</span>
              <span class="skill-pct">{{ skill.level }}%</span>
            </div>
            <div class="skill-bar-track">
              <div 
                class="skill-bar-fill" 
                :class="{ animated: animatedBars }"
                :style="{ '--fill': skill.level + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
