<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { Rule } from 'ant-design-vue/es/form'
import type { FormInstance } from 'ant-design-vue'
import HeaderBadge from '../BasicComponents/HeaderBadge.vue'

import siteInfo from '@/utilies/siteInfo.json'
import ContactCard from './ContactCard.vue'
import SocialLinks from './SocialLinks.vue'
const formRef = ref<FormInstance>()
const isSubmitting = ref(false)
const showSuccessModal = ref(false)

const formData = reactive({
  name: '',
  phoneNumber: '',
  email: '',
  subject: '',
  message: '',
})

const validationRules: Record<string, Rule[]> = {
  name: [
    { required: true, message: 'Please enter your name', trigger: 'blur' },
    {
      min: 3,
      max: 50,
      message: 'Name should be 3–50 characters',
      trigger: 'blur',
    },
  ],
  phoneNumber: [
    {
      required: true,
      message: 'Please enter your phone number',
      trigger: 'blur',
    },
    {
      min: 3,
      max: 17,
      message: 'Phone should be 3–17 characters',
      trigger: 'blur',
    },
  ],
  email: [
    { required: true, message: 'Please enter your email', trigger: 'blur' },
    { type: 'email', message: 'Please enter a valid email', trigger: 'blur' },
  ],
  message: [
    { required: true, message: 'Please enter your message', trigger: 'blur' },
    {
      min: 10,
      message: 'Message should be at least 10 characters',
      trigger: 'blur',
    },
  ],
}

const submitForm = async () => {
  isSubmitting.value = true

  try {
    const response = await $fetch('/api/send-mail', {
      method: 'POST',
      body: formData,
    })

    if (response.success) {
      Object.assign(formData, {
        name: '',
        phoneNumber: '',
        email: '',
        subject: '',
        message: '',
      })
      showSuccessModal.value = true
      formRef.value?.resetFields()
    } else {
      throw new Error(response.error)
    }
  } catch (error: any) {
    console.error('Error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-slate-950">
    <!-- Content -->
    <div class="relative z-10">
      <!-- Hero Section -->
      <div
        class="relative overflow-hidden border-b border-white/5 backdrop-blur-sm"
      >
        <div
          class="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-32"
        >
          <!-- Badge -->
          <HeaderBadge icon="fa-brands fa-nfc-symbol" heading="Let's Connect" />

          <!-- Title -->
          <h1
            class="mb-6 animate-fade-in-up text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            <span
              class="block bg-gradient-to-r from-white via-orange-100 to-orange-300 bg-clip-text text-transparent drop-shadow-2xl"
            >
              Ready to Start
            </span>
            <span
              class="block bg-gradient-to-r from-orange-400 via-pink-400 to-orange-500 bg-clip-text text-transparent animate-gradient-x"
            >
              Your Project?
            </span>
          </h1>

          <!-- Description -->
          <p
            class="mx-auto mb-10 max-w-3xl animate-fade-in text-lg text-gray-300 sm:text-xl lg:text-2xl"
          >
            Transform your ideas into reality with cutting-edge solutions.
            <span class="block mt-2 text-orange-400 font-semibold"
              >Let's create something extraordinary together.</span
            >
          </p>

          <!-- Stats -->
          <div
            class="mx-auto mt-12 grid max-w-4xl grid-cols-3 gap-6 animate-fade-in-up"
          >
            <div
              class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-orange-500/50 hover:bg-white/10 hover:scale-105"
            >
              <div class="text-3xl font-black text-orange-400 mb-2">24h</div>
              <div class="text-sm text-gray-400 font-medium">Response Time</div>
              <div
                class="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-transparent transition-all duration-300"
              ></div>
            </div>
            <div
              class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:bg-white/10 hover:scale-105"
            >
              <div class="text-3xl font-black text-pink-400 mb-2">100%</div>
              <div class="text-sm text-gray-400 font-medium">Satisfaction</div>
              <div
                class="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-pink-500/0 group-hover:from-pink-500/10 group-hover:to-transparent transition-all duration-300"
              ></div>
            </div>
            <div
              class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/50 hover:bg-white/10 hover:scale-105"
            >
              <div class="text-3xl font-black text-purple-400 mb-2">
                {{ siteInfo.projects.length }}+
              </div>
              <div class="text-sm text-gray-400 font-medium">Projects Done</div>
              <div
                class="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-300"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div class="grid gap-6 lg:grid-cols-12 lg:gap-6">
          <!-- Form Column -->
          <div class="lg:col-span-7 h-full">
            <div
              class="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-orange-500/30 sm:p-12 animate-slide-in-left"
            >
              <!-- Shine Effect -->
              <div
                class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                ></div>
              </div>

              <!-- Header -->
              <div class="relative mb-10">
                <h2 class="mb-3 text-4xl font-black text-white sm:text-5xl">
                  <span
                    class="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent"
                  >
                    Drop Me a Line
                  </span>
                </h2>
                <p class="flex items-center gap-2 text-base text-gray-400">
                  <span class="relative flex h-3 w-3">
                    <span
                      class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
                    ></span>
                    <span
                      class="relative inline-flex h-3 w-3 rounded-full bg-green-500"
                    ></span>
                  </span>
                  Available now • Usually responds within 24 hours
                </p>
              </div>

              <!-- Form -->
              <a-form
                ref="formRef"
                :model="formData"
                :rules="validationRules"
                layout="vertical"
                @finish="submitForm"
              >
                <!-- Name & Email -->
                <div class="grid gap-6 sm:grid-cols-2">
                  <a-form-item name="name" class="group/item">
                    <template #label>
                      <span
                        class="flex items-center gap-2 text-sm font-bold text-gray-300 transition-colors group-focus-within/item:text-orange-400"
                      >
                        <i class="fa-solid fa-user"></i>
                        Your Name
                      </span>
                    </template>
                    <a-input
                      v-model:value="formData.name"
                      size="large"
                      placeholder="John Doe"
                      class="custom-input"
                    />
                  </a-form-item>

                  <a-form-item name="email" class="group/item">
                    <template #label>
                      <span
                        class="flex items-center gap-2 text-sm font-bold text-gray-300 transition-colors group-focus-within/item:text-orange-400"
                      >
                        <i class="fa-solid fa-envelope"></i>
                        Email Address
                      </span>
                    </template>
                    <a-input
                      v-model:value="formData.email"
                      size="large"
                      placeholder="john@example.com"
                      class="custom-input"
                    />
                  </a-form-item>
                </div>

                <!-- Phone & Subject -->
                <div class="grid gap-6 sm:grid-cols-2">
                  <a-form-item name="phoneNumber" class="group/item">
                    <template #label>
                      <span
                        class="flex items-center gap-2 text-sm font-bold text-gray-300 transition-colors group-focus-within/item:text-orange-400"
                      >
                        <i class="fa-solid fa-phone"></i>
                        Phone Number
                      </span>
                    </template>
                    <a-input
                      v-model:value="formData.phoneNumber"
                      size="large"
                      placeholder="0320 8055453"
                      class="custom-input"
                    />
                  </a-form-item>

                  <a-form-item name="subject" class="group/item">
                    <template #label>
                      <span
                        class="flex items-center gap-2 text-sm font-bold text-gray-300 transition-colors group-focus-within/item:text-orange-400"
                      >
                        <i class="fa-solid fa-bookmark"></i>
                        Subject
                      </span>
                    </template>
                    <a-input
                      v-model:value="formData.subject"
                      size="large"
                      placeholder="Project Discussion"
                      class="custom-input"
                    />
                  </a-form-item>
                </div>

                <!-- Message -->
                <a-form-item name="message" class="group/item">
                  <template #label>
                    <span
                      class="flex items-center gap-2 text-sm font-bold text-gray-300 transition-colors group-focus-within/item:text-orange-400"
                    >
                      <i class="fa-solid fa-pen-to-square"></i>
                      Your Message
                    </span>
                  </template>
                  <a-textarea
                    v-model:value="formData.message"
                    :rows="6"
                    placeholder="Tell me about your project, requirements, or any questions you have..."
                    class="custom-input"
                  />
                </a-form-item>

                <!-- Submit -->
                <a-form-item class="mb-0">
                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-orange-600 to-pink-600 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-orange-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl hover:shadow-orange-500/60 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span
                      class="relative z-10 flex items-center justify-center gap-3"
                    >
                      <i
                        v-if="!isSubmitting"
                        class="fa-solid fa-rocket text-xl group-hover:rotate-45 transition-transform duration-300"
                      ></i>
                      <i
                        v-else
                        class="fa-solid fa-spinner animate-spin text-xl"
                      ></i>
                      {{
                        isSubmitting
                          ? 'Sending Your Message...'
                          : 'Send Message'
                      }}
                    </span>
                    <div
                      class="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    ></div>
                  </button>
                </a-form-item>
              </a-form>
            </div>
          </div>

          <!-- Info Column -->
          <div class="space-y-6 lg:col-span-5 animate-slide-in-right">
            <!-- Contact Cards -->
            <div class="space-y-4">
              <!-- Location -->

              <ContactCard
                icon="fa-solid fa-location-dot"
                title="Visit Me"
                :text="siteInfo.contact.address"
                color="blue"
              />

              <!-- Phone -->
              <ContactCard
                icon="fa-solid fa-phone-flip"
                title="Call Me"
                :text="siteInfo.contact.phoneNumber"
                color="green"
                :link="`tel:${siteInfo.contact.phoneNumber}`"
              />
              <!-- Email -->
              <ContactCard
                icon="fa-solid fa-envelope-open-text"
                title="Email Me"
                :text="siteInfo.contact.email"
                color="orange"
                :link="`mailto:${siteInfo.contact.email}`"
              />
            </div>

            <!-- Why Work With Me -->
            <div
              class="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl"
            >
              <h3 class="mb-6 text-2xl font-black text-white">
                <span
                  class="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent"
                >
                  Why Work With Me?
                </span>
              </h3>
              <div class="space-y-5">
                <div
                  class="group flex items-start gap-4 rounded-xl p-3 transition-all duration-300 hover:bg-white/5"
                >
                  <div
                    class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-500/5 transition-all duration-300 group-hover:from-orange-500/30 group-hover:to-orange-500/10"
                  >
                    <i class="fa-solid fa-bolt text-xl text-orange-400"></i>
                  </div>
                  <div>
                    <h4 class="mb-1 font-bold text-white">Fast Response</h4>
                    <p class="text-sm text-gray-400">
                      Quick turnaround on all inquiries
                    </p>
                  </div>
                </div>

                <div
                  class="group flex items-start gap-4 rounded-xl p-3 transition-all duration-300 hover:bg-white/5"
                >
                  <div
                    class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-500/5 transition-all duration-300 group-hover:from-pink-500/30 group-hover:to-pink-500/10"
                  >
                    <i class="fa-solid fa-trophy text-xl text-pink-400"></i>
                  </div>
                  <div>
                    <h4 class="mb-1 font-bold text-white">Quality Work</h4>
                    <p class="text-sm text-gray-400">
                      Pixel-perfect & optimized solutions
                    </p>
                  </div>
                </div>

                <div
                  class="group flex items-start gap-4 rounded-xl p-3 transition-all duration-300 hover:bg-white/5"
                >
                  <div
                    class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-500/5 transition-all duration-300 group-hover:from-purple-500/30 group-hover:to-purple-500/10"
                  >
                    <i
                      class="fa-solid fa-handshake text-xl text-purple-400"
                    ></i>
                  </div>
                  <div>
                    <h4 class="mb-1 font-bold text-white">Reliable Partner</h4>
                    <p class="text-sm text-gray-400">
                      Long-term collaboration focus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Social -->
         <div class="mt-6 ">

        
        <SocialLinks />
         </div>
      </div>
    </div>

    <!-- Success Modal -->
    <a-modal
      v-model:open="showSuccessModal"
      :footer="null"
      :closable="false"
      centered
      width="450px"
      wrap-class-name="custom-modal"
    >
      <div
        class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-10 text-center"
      >
        <!-- Animated Background -->
        <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_50%)]"
        ></div>

        <div class="relative">
          <!-- Success Icon -->
          <div class="mx-auto mb-6 flex h-24 w-24 items-center justify-center">
            <div class="relative">
              <div
                class="absolute inset-0 animate-ping rounded-full bg-green-500/50"
              ></div>
              <div
                class="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-2xl shadow-green-500/50 animate-scale-in"
              >
                <i class="fa-solid fa-circle-check text-5xl text-white"></i>
              </div>
            </div>
          </div>

          <!-- Content -->
          <h3 class="mb-3 text-3xl font-black text-white">Message Sent!</h3>
          <p class="mb-8 text-base text-gray-300">
            Thank you for reaching out. I'll get back to you within 24 hours.
          </p>

          <!-- Button -->
          <button
            @click="showSuccessModal = false"
            class="group relative overflow-hidden rounded-xl bg-gradient-to-r from-orange-600 to-pink-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/60"
          >
            <span class="relative z-10">Great!</span>
            <div
              class="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            ></div>
          </button>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<style scoped>
/* Custom Animations */
@keyframes gradient-x {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes pulse-slower {
  0%,
  100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.4;
  }
}

@keyframes spin-slow {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
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
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-gradient-x {
  background-size: 200% auto;
  animation: gradient-x 3s ease infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-pulse-slower {
  animation: pulse-slower 6s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}

.animate-fade-in-down {
  animation: fade-in-down 0.8s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out 0.2s backwards;
}

.animate-fade-in {
  animation: fade-in 1s ease-out 0.4s backwards;
}

.animate-slide-in-left {
  animation: slide-in-left 0.8s ease-out;
}

.animate-slide-in-right {
  animation: slide-in-right 0.8s ease-out 0.2s backwards;
}

.animate-scale-in {
  animation: scale-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Custom Input Styles */
:deep(.custom-input) {
  @apply rounded-xl border-2 border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-gray-500 backdrop-blur-sm transition-all duration-300;
}

:deep(.custom-input:hover) {
  @apply border-white/20 bg-white/10;
}

:deep(.custom-input:focus),
:deep(.custom-input.ant-input-focused) {
  @apply border-orange-500/50 bg-white/10 shadow-lg shadow-orange-500/20;
}

:deep(.ant-input-textarea textarea.custom-input) {
  @apply min-h-[150px] resize-y;
}

/* Scrollbar */
:deep(.ant-input-textarea textarea)::-webkit-scrollbar {
  width: 8px;
}

:deep(.ant-input-textarea textarea)::-webkit-scrollbar-track {
  @apply rounded-lg bg-white/5;
}

:deep(.ant-input-textarea textarea)::-webkit-scrollbar-thumb {
  @apply rounded-lg bg-orange-500/50 transition-colors;
}

:deep(.ant-input-textarea textarea)::-webkit-scrollbar-thumb:hover {
  @apply bg-orange-500/70;
}

/* Form Item */
:deep(.ant-form-item) {
  @apply mb-6;
}

:deep(.ant-form-item-label > label) {
  @apply h-auto pb-2;
}

:deep(.ant-form-item-explain-error) {
  @apply text-pink-400;
}

/* Modal */
:deep(.custom-modal .ant-modal-content) {
  @apply bg-transparent p-0 shadow-none;
}

:deep(.custom-modal .ant-modal-body) {
  @apply p-0;
}

/* Responsive */
@media (max-width: 640px) {
  .animate-slide-in-left,
  .animate-slide-in-right {
    animation: fade-in 0.8s ease-out;
  }
}
</style>
