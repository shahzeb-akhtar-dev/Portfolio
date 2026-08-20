<template>
  <div class="social-wrapper rounded-2xl p-5 sm:p-6">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 class="social-title text-2xl font-black">Connect With Me</h3>
        <p class="social-desc mt-1 text-sm">Follow my journey on social media</p>
      </div>
      <div class="social-divider hidden sm:block" />
      <div class="social-grid flex flex-wrap gap-3">
        <a
          v-for="social in socialLinks"
          :key="social.name"
          :href="social.href || '#'"
          target="_blank"
          class="social-pill group"
        >
          <span class="social-icon-wrap">
            <Icon :icon="social.icon" class="social-icon" />
          </span>
          <span class="social-name">{{ social.name }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import siteInfo from '@/utils/siteInfo.json'

const socialLinks = [
  {
    name: 'Facebook',
    icon: 'ri:facebook-fill',
    href: siteInfo.socialLinks.facebook,
  },
  {
    name: 'LinkedIn',
    icon: 'mdi:linkedin',
    href: siteInfo.socialLinks.linkedin,
  },
  {
    name: 'Twitter',
    icon: 'mdi:twitter',
    href: siteInfo.socialLinks.twitter,
  },
  {
    name: 'Instagram',
    icon: 'mdi:instagram',
    href: '#',
  },
]
</script>

<style scoped>
.social-wrapper {
  border: 1px solid var(--glass-border);
  background: var(--surface-glass);
}

.social-divider {
  width: 1px;
  align-self: stretch;
  background: var(--glass-border);
}

.social-title {
  color: var(--text-primary-color);
}

.social-desc {
  color: var(--text-secondary-color);
}

.social-grid {
  justify-content: flex-start;
}

.social-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  border: 1px solid var(--glass-border);
  background: var(--white-transparent-03);
  padding: 0.5rem 0.8rem;
  border-radius: 9999px;
  transition: all 250ms ease;
}

.social-pill:hover {
  border-color: var(--theme-primary-color);
  transform: translateY(-2px);
}

.social-icon-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 1.85rem;
  width: 1.85rem;
  border-radius: 9999px;
  background: var(--white-transparent-05);
  border: 1px solid var(--glass-border);
}

.social-icon {
  width: 0.95rem;
  height: 0.95rem;
  color: var(--text-primary-color);
}

.social-name {
  color: var(--text-secondary-color);
  font-size: 0.8rem;
  font-weight: 600;
}

.social-pill:hover .social-name,
.social-pill:hover .social-icon {
  color: var(--theme-primary-color);
}

@media (max-width: 640px) {
  .social-grid {
    width: 100%;
  }

  .social-pill {
    flex: 1;
    justify-content: center;
    min-width: 8rem;
  }
}
</style>
