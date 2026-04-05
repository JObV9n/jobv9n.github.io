<script setup>
import { Icon } from '@iconify/vue'
import { portfolioData } from '../data/portfolio.js'
</script>

<template>
  <section class="section contact" id="contact">
    <div class="section-inner contact-inner">
      <div class="contact-decree">++ Incoming Transmission ++</div>
      <h2 class="contact-heading">Establish <span>Vox Link</span></h2>
      <p class="contact-sub">
        Ready to embark on a new crusade? Send a transmission through the astropathic network, 
        and I shall respond with haste. Let us forge something worthy of the Emperor.
      </p>
      <div class="contact-links">
        <a :href="'mailto:' + portfolioData.contact.email" class="contact-link">
          <Icon icon="game-icons:scroll-unfurled" class="icon" />
          <span>Astropathic Mail</span>
        </a>
        <a :href="portfolioData.contact.github" target="_blank" rel="noopener" class="contact-link">
          <Icon icon="game-icons:bolter-gun" class="icon" />
          <span>GitHub Archives</span>
        </a>
        <a :href="portfolioData.contact.linkedin" target="_blank" rel="noopener" class="contact-link">
          <Icon icon="game-icons:linked-rings" class="icon" />
          <span>LinkedIn Cogitator</span>
        </a>
        <a :href="portfolioData.contact.twitter" target="_blank" rel="noopener" class="contact-link">
          <Icon icon="game-icons:radio-tower" class="icon" />
          <span>Twitter Vox</span>
        </a>
      </div>
      <div class="imperial-seal">
        <Icon icon="game-icons:wax-seal" />
      </div>
    </div>
  </section>
</template>
