<script setup>
import { Icon } from '@iconify/vue'
import { portfolioData } from '../data/portfolio.js'
</script>

<template>
  <section class="hero" id="hero">
    <div class="hero-content">
      <div class="hero-avatar">
        <div class="hero-avatar-frame">
          <span class="corner tl"></span>
          <span class="corner tr"></span>
          <span class="corner bl"></span>
          <span class="corner br"></span>
          <img src="/meta-Cu3_drnv.jpeg" :alt="portfolioData.name + ' ' + portfolioData.lastName" />
        </div>
        <div class="hero-avatar-label">{{ portfolioData.avatarLabel }}</div>
      </div>
      <div class="hero-text">
        <div class="hero-eyebrow">Designation</div>
        <h1 class="hero-name">{{ portfolioData.name }} <span>{{ portfolioData.lastName }}</span></h1>
        <p class="hero-title">{{ portfolioData.title }}</p>
        <div class="hero-divider"></div>
        <p class="hero-bio">{{ portfolioData.bio }}</p>
        <div class="hero-cta">
          <a href="#projects" class="btn btn-primary">
            <Icon icon="game-icons:templar-eye" /> View Campaigns
          </a>
          <a href="#contact" class="btn btn-outline">
            <Icon icon="game-icons:scroll-unfurled" /> Transmit Vox
          </a>
        </div>
        <div class="hero-socials">
          <a :href="portfolioData.contact.github" target="_blank" rel="noopener">
            <Icon icon="game-icons:bolter-gun" /> GitHub
          </a>
          <a :href="portfolioData.contact.linkedin" target="_blank" rel="noopener">
            <Icon icon="game-icons:linked-rings" /> LinkedIn
          </a>
          <a :href="portfolioData.contact.twitter" target="_blank" rel="noopener">
            <Icon icon="game-icons:radio-tower" /> Twitter
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
