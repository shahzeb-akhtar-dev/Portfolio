<template>
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
    <!-- Animated Background Effects -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Animated Orbs -->
      <div class="absolute top-0 -right-1/4 w-[1000px] h-[1000px] bg-gradient-to-br from-orange-500/20 via-pink-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-purple-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse-slower"></div>
      
      <!-- Grid Overlay -->
      <div class="absolute inset-0 bg-grid-white opacity-5"></div>
      
      <!-- Floating Particles -->
      <div v-for="n in 30" :key="n" 
           :style="{ 
             left: `${Math.random() * 100}%`, 
             animationDelay: `${Math.random() * 5}s`,
             animationDuration: `${15 + Math.random() * 10}s`
           }"
           class="absolute bottom-0 w-1 h-1 bg-orange-400 rounded-full animate-float-up opacity-0">
      </div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <!-- Left Panel - Info -->
        <div class="space-y-8 animate-slide-in-left">
          <!-- Glass Card Container -->
          <div class="relative group">
            <!-- Glow Effect -->
            <div class="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <!-- Main Card -->
            <div class="relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 lg:p-10 overflow-hidden">
              <!-- Top gradient overlay -->
              <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
              
              <!-- Badge -->
              <div class="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-transparent backdrop-blur-xl border border-orange-500/20 rounded-full mb-6 group/badge hover:border-orange-500/40 transition-all duration-300">
                <div class="relative">
                  <div class="absolute inset-0 bg-orange-500 rounded-full animate-ping"></div>
                  <div class="relative w-2 h-2 bg-orange-500 rounded-full"></div>
                </div>
                <i class="fa-solid fa-microchip text-orange-400 text-sm"></i>
                <span class="text-xs font-bold tracking-widest text-orange-400 uppercase">Technical Skills</span>
              </div>

              <!-- Title -->
              <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8">
                <span class="block text-white mb-2">Technologies</span>
                <span class="block bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                  I Master
                </span>
              </h1>

              <!-- Description Box -->
              <div class="relative bg-gradient-to-br from-orange-500/10 to-purple-500/10 backdrop-blur-sm border-l-4 border-orange-500 rounded-2xl p-6 mb-8">
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/50 animate-float">
                    <i class="fa-solid fa-wand-magic-sparkles text-white text-xl"></i>
                  </div>
                  <p class="text-slate-300 leading-relaxed">
                    Crafting <span class="text-white font-semibold">pixel-perfect</span>,
                    <span class="text-orange-400 font-semibold">lightning-fast</span>, and
                    <span class="text-purple-400 font-semibold">user-centric</span> web experiences using
                    modern tech stack and best practices.
                  </p>
                </div>
              </div>

              <!-- Achievement Stats -->
              <div class="grid grid-cols-3 gap-4">
                <!-- Stat 1 -->
                <div class="group/stat relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/20 overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover/stat:from-orange-500/10 group-hover/stat:to-transparent transition-all duration-300"></div>
                  <div class="relative text-center">
                    <div class="text-3xl font-black bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-1">
                      {{ skills.length }}+
                    </div>
                    <div class="text-xs font-semibold text-slate-400 uppercase tracking-wide">Tech Stack</div>
                  </div>
                </div>

                <!-- Stat 2 -->
                <div class="group/stat relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover/stat:from-purple-500/10 group-hover/stat:to-transparent transition-all duration-300"></div>
                  <div class="relative text-center">
                    <div class="text-3xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1">
                      5+
                    </div>
                    <div class="text-xs font-semibold text-slate-400 uppercase tracking-wide">Years Exp</div>
                  </div>
                </div>

                <!-- Stat 3 -->
                <div class="group/stat relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover/stat:from-blue-500/10 group-hover/stat:to-transparent transition-all duration-300"></div>
                  <div class="relative text-center">
                    <div class="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                      12+
                    </div>
                    <div class="text-xs font-semibold text-slate-400 uppercase tracking-wide">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Panel - Skills Grid -->
        <div class="space-y-8 animate-slide-in-right">
          <!-- Skills Grid -->
          <div class="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-4 gap-4 lg:gap-6">
            <div
              v-for="(skill, index) in skills"
              :key="index"
              :style="{ animationDelay: `${index * 50}ms` }"
              class="group relative animate-scale-in"
            >
              <!-- Skill Card -->
              <div class="relative aspect-square">
                <!-- Glow on hover -->
                <div class="absolute -inset-1 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-50 blur transition duration-500"></div>
                
                <!-- Main Card -->
                <div class="relative h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 flex items-center justify-center overflow-hidden group-hover:border-orange-500/50 transition-all duration-500 group-hover:scale-110 ">
                  
                  <!-- Icon -->
                  <div class="relative z-10 w-full h-full flex items-center justify-center">
                    <img 
                      :src="skill.icon" 
                      :alt="skill.name"
                      class="w-3/4 h-3/4 object-contain filter drop-shadow-lg group-hover:drop-shadow-2xl  transition-all duration-500"
                    />
                  </div>
                  
                  <!-- Shine effect -->
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                <!-- Tooltip -->
                <div class="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 whitespace-nowrap z-20 shadow-lg shadow-orange-500/50">
                  <span class="text-xs font-bold text-white">{{ skill.name }}</span>
                  <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-orange-500 rotate-45"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Progress Circle -->
          <div class="flex justify-center pt-8">
            <div class="relative w-48 h-48 group/progress">
              <!-- Outer glow ring -->
              <div class="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 opacity-20 blur-xl group-hover/progress:opacity-40 transition-opacity duration-500"></div>
              
              <!-- SVG Progress -->
              <svg class="relative transform -rotate-90 w-48 h-48" viewBox="0 0 200 200">
                <!-- Background circle -->
                <circle
                  cx="100"
                  cy="100"
                  r="85"
                  stroke="currentColor"
                  stroke-width="8"
                  fill="none"
                  class="text-slate-800"
                />
                <!-- Progress circle -->
                <circle
                  cx="100"
                  cy="100"
                  r="85"
                  stroke="url(#gradient)"
                  stroke-width="8"
                  fill="none"
                  stroke-linecap="round"
                  class="progress-circle"
                  style="stroke-dasharray: 534; stroke-dashoffset: 0;"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color: var(--theme-primary-light);" />
                    <stop offset="50%" style="stop-color: var(--theme-secondary-color);" />
                    <stop offset="100%" style="stop-color: var(--theme-tertiary-color);" />
                  </linearGradient>
                </defs>
              </svg>
              
              <!-- Center text -->
              <div class="absolute inset-0 flex flex-col items-center justify-center">
                <div class="text-5xl font-black bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  100%
                </div>
                <div class="text-sm font-bold text-orange-400 uppercase tracking-widest mt-1">
                  Mastery
                </div>
              </div>
              
              <!-- Rotating border -->
              <div class="absolute inset-0 rounded-full border-2 border-transparent border-t-orange-500 border-r-pink-500 animate-spin-slow opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Types
interface Skill {
  name: string
  icon: string
}

// Skills data
const skills = ref<Skill[]>([
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Nuxt', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Sass', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
  { name: 'Webpack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg' },
  { name: 'Vite', icon: 'https://vitejs.dev/logo.svg' }
])
</script>
  <!-- Custom Animations -->
    <style>
      @keyframes float-up {
        0% {
          transform: translateY(0);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(-100vh);
          opacity: 0;
        }
      }

      @keyframes gradient-x {
        0%, 100% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
      }

      @keyframes float {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }

      @keyframes slide-in-left {
        from {
          opacity: 0;
          transform: translateX(-50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes slide-in-right {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes scale-in {
        from {
          opacity: 0;
          transform: scale(0.5) rotate(-180deg);
        }
        to {
          opacity: 1;
          transform: scale(1) rotate(0deg);
        }
      }

      @keyframes spin-slow {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      @keyframes pulse-slow {
        0%, 100% {
          opacity: 0.2;
          transform: scale(1);
        }
        50% {
          opacity: 0.3;
          transform: scale(1.05);
        }
      }

      @keyframes pulse-slower {
        0%, 100% {
          opacity: 0.2;
          transform: scale(1);
        }
        50% {
          opacity: 0.25;
          transform: scale(1.08);
        }
      }

      .animate-float-up {
        animation: float-up 15s ease-in-out infinite;
      }

      .animate-gradient-x {
        background-size: 200% auto;
        animation: gradient-x 3s linear infinite;
      }

      .animate-float {
        animation: float 3s ease-in-out infinite;
      }

      .animate-slide-in-left {
        animation: slide-in-left 0.8s ease-out;
      }

      .animate-slide-in-right {
        animation: slide-in-right 0.8s ease-out 0.2s backwards;
      }

      .animate-scale-in {
        animation: scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
      }

      .animate-spin-slow {
        animation: spin-slow 8s linear infinite;
      }

      .animate-pulse-slow {
        animation: pulse-slow 4s ease-in-out infinite;
      }

      .animate-pulse-slower {
        animation: pulse-slower 6s ease-in-out infinite;
      }

      .bg-grid-white {
        background-image: 
          linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        background-size: 50px 50px;
      }

      .progress-circle {
        animation: progress-fill 2s ease-out forwards;
      }

      @keyframes progress-fill {
        from {
          stroke-dashoffset: 534;
        }
        to {
          stroke-dashoffset: 0;
        }
      }
    </style>