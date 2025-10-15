<template>
  <div
    class="relative flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_0_25px_rgba(255,255,255,0.08)]"
  >
    <h3 class="mb-3 text-2xl font-black text-white">Connect With Me</h3>
    <p class="mb-6 text-sm text-gray-300">Follow my journey on social media</p>

    <div
      class="flex flex-wrap justify-center gap-5 sm:gap-6"
    >
      <!-- Facebook -->
      <a
        :href="siteInfo.contact.facebook || '#'"
        target="_blank"
        class="group flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[var(--theme-primary-color)] hover:bg-[var(--theme-primary-color)]/20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 text-white transition-colors duration-300 group-hover:text-[var(--theme-primary-color)]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M22.675 0h-21.35C.6 0 0 .6 0 1.337v21.326C0 23.4.6 24 1.325 24h11.494v-9.294H9.691v-3.622h3.128V8.413c0-3.1 1.894-4.787 4.658-4.787 1.325 0 2.463.098 2.796.142v3.243l-1.919.001c-1.505 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.127C23.4 24 24 23.4 24 22.663V1.337C24 .6 23.4 0 22.675 0z"
          />
        </svg>
      </a>

      <!-- LinkedIn -->
      <a
        :href="siteInfo.contact.linkedin || '#'"
        target="_blank"
        class="group flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[var(--theme-primary-color)] hover:bg-[var(--theme-primary-color)]/20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 text-white transition-colors duration-300 group-hover:text-[var(--theme-primary-color)]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.103 1 2.483 1 4.983 2.12 4.983 3.5zM.244 8.053h4.497V24H.244zM8.74 8.053h4.31v2.173h.06c.6-1.135 2.06-2.332 4.242-2.332 4.535 0 5.37 2.984 5.37 6.863V24h-4.494v-7.9c0-1.884-.035-4.304-2.626-4.304-2.63 0-3.03 2.054-3.03 4.17V24H8.74z"
          />
        </svg>
      </a>

      <!-- Twitter -->
      <a
        :href="siteInfo.contact.twitter || '#'"
        target="_blank"
        class="group flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[var(--theme-primary-color)] hover:bg-[var(--theme-primary-color)]/20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 text-white transition-colors duration-300 group-hover:text-[var(--theme-primary-color)]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M23.953 4.57a10.005 10.005 0 0 1-2.825.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195A4.918 4.918 0 0 0 11.73 7.5c0 .39.045.765.127 1.124C7.688 8.47 4.067 6.39 1.64 3.16a4.822 4.822 0 0 0-.666 2.475 4.918 4.918 0 0 0 2.19 4.1 4.9 4.9 0 0 1-2.23-.616v.06a4.92 4.92 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.084 4.937 4.937 0 0 0 4.6 3.417A9.867 9.867 0 0 1 0 19.54 13.94 13.94 0 0 0 7.548 22c9.142 0 14.307-7.72 13.995-14.646a9.935 9.935 0 0 0 2.41-2.784z"
          />
        </svg>
      </a>

      <!-- Instagram -->
      <a
        href="#"
        target="_blank"
        class="group flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[var(--theme-primary-color)] hover:bg-[var(--theme-primary-color)]/20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 text-white transition-colors duration-300 group-hover:text-[var(--theme-primary-color)]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.344 3.608 1.32.975.975 1.257 2.242 1.32 3.608.058 1.266.07 1.646.07 4.84s-.012 3.574-.07 4.84c-.063 1.366-.345 2.633-1.32 3.608-.975.975-2.242 1.257-3.608 1.32-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.345-3.608-1.32-.975-.975-1.257-2.242-1.32-3.608C2.175 15.574 2.163 15.194 2.163 12s.012-3.574.07-4.84c.063-1.366.345-2.633 1.32-3.608.975-.975 2.242-1.257 3.608-1.32C8.416 2.175 8.796 2.163 12 2.163zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm6.406-1.682a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88zM12 8.838a3.162 3.162 0 1 1 0 6.324 3.162 3.162 0 0 1 0-6.324z"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ContactInfo {
  facebook?: string
  linkedin?: string
  twitter?: string
  instagram?: string
}

interface SiteInfo {
  contact: ContactInfo
}

const siteInfo: SiteInfo = {
  contact: {
    facebook: 'https://facebook.com/',
    linkedin: 'https://linkedin.com/in/',
    twitter: 'https://twitter.com/',
    instagram: 'https://instagram.com/',
  },
}
</script>

<style scoped>
a.group:hover svg {
  filter: drop-shadow(0 0 6px var(--theme-primary-color));
}
</style>
