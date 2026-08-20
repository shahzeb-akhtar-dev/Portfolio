<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import type { Rule } from 'ant-design-vue/es/form'
import type { FormInstance } from 'ant-design-vue'
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  FlagOutlined,
  EditOutlined,
  LockOutlined,
  SendOutlined,
  ClockCircleOutlined,
  AimOutlined,
  ProjectOutlined,
  ThunderboltOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
} from '@ant-design/icons-vue'
import HeaderBadge from '../BasicComponents/HeaderBadge.vue'

import siteInfo from '@/utils/siteInfo.json'
import ContactCard from './ContactCard.vue'
import SocialLinks from './SocialLinks.vue'
import CustomButton from '../BasicComponents/CustomButton.vue'
import SectionHeading from '../BasicComponents/SectionHeading.vue'
import KpiCards, { type KpiItem } from '../BasicComponents/KpiCards.vue'
const formRef = ref<FormInstance>()
const isSubmitting = ref(false)
const showSuccessModal = ref(false)

const contactKpis = computed<KpiItem[]>(() => [
  {
    id: 'reply',
    value: '24h',
    label: 'Typical reply time',
    iconComponent: ClockCircleOutlined,
  },
  {
    id: 'focus',
    value: '100%',
    label: 'Client focus',
    iconComponent: AimOutlined,
  },
  {
    id: 'projects',
    value: '15+',
    label: 'Projects completed',
    iconComponent: ProjectOutlined,
  },
])

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
      console.error('Error:', response.message)
      throw new Error(
        response.message || 'Failed to send message. Please try again later.',
      )
    }
  } catch (error: any) {
    console.error('Error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="contact-section relative overflow-hidden py-20 lg:py-28">
    <div class="contact-noise pointer-events-none absolute inset-0"></div>

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="contact-intro rounded-3xl p-6 sm:p-10">
        <HeaderBadge icon="fa-solid fa-paper-plane" heading="Let's Connect" />
        <SectionHeading
          first-part="Have an idea?"
          second-part="Let’s shape it."
          wrapperClass="!gap-4"
        />

        <div class="mt-8">
          <p
            class="contact-description max-w-2xl text-base leading-relaxed sm:text-lg text-center md:text-left"
          >
            I transform your ideas into high-quality digital solutions with
            clear communication and reliable delivery.
            <span class="mt-2 block contact-description-strong"
              >Share your project details — I'll get back to you with a
              practical plan.</span
            >
          </p>

          <KpiCards :items="contactKpis" />
        </div>
      </div>

      <div class="mt-8 grid gap-6 lg:grid-cols-12">
        <div class="lg:col-span-8">
          <div
            class="contact-form-card relative overflow-hidden rounded-3xl p-6 sm:p-10"
          >
            <!-- <div class="contact-form-decor absolute -right-16 -top-16 h-40 w-40 rounded-full"></div> -->

            <div
              class="relative mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"
            >
              <div class="flex items-start gap-4">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--glow-primary)]"
                >
                  <MailOutlined
                    class="text-[1.6rem] text-[var(--theme-primary-color)]"
                  />
                </div>
                <div>
                  <h2
                    class="contact-form-title text-2xl font-black sm:text-3xl"
                  >
                    Send Me a Message
                  </h2>
                  <p class="contact-form-subtitle mt-1 text-sm">
                    Tell me about your project, goals and requirements.
                  </p>
                </div>
              </div>
              <div
                class="contact-status inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
              >
                <span class="status-dot"></span>
                Available now
              </div>
            </div>

            <a-form
              ref="formRef"
              id="contact-form"
              :model="formData"
              :rules="validationRules"
              layout="vertical"
              @finish="submitForm"
            >
              <div class="grid gap-5 sm:grid-cols-2">
                <a-form-item name="name" class="group/item">
                  <template #label>
                    <span class="contact-label text-sm font-semibold">
                      Full Name <span class="text-red-500">*</span>
                    </span>
                  </template>
                  <a-input
                    v-model:value="formData.name"
                    size="large"
                    placeholder="John Doe"
                    class="custom-input"
                  >
                    <template #prefix>
                      <UserOutlined class="input-prefix-icon" />
                    </template>
                  </a-input>
                </a-form-item>

                <a-form-item name="email" class="group/item">
                  <template #label>
                    <span class="contact-label text-sm font-semibold">
                      Email Address <span class="text-red-500">*</span>
                    </span>
                  </template>
                  <a-input
                    v-model:value="formData.email"
                    size="large"
                    placeholder="john@example.com"
                    class="custom-input"
                  >
                    <template #prefix>
                      <MailOutlined class="input-prefix-icon" />
                    </template>
                  </a-input>
                </a-form-item>
              </div>

              <div class="grid gap-5 sm:grid-cols-2">
                <a-form-item name="phoneNumber" class="group/item">
                  <template #label>
                    <span class="contact-label text-sm font-semibold">
                      Phone Number
                    </span>
                  </template>
                  <a-input
                    v-model:value="formData.phoneNumber"
                    size="large"
                    placeholder="0320 8055453"
                    class="custom-input"
                  >
                    <template #prefix>
                      <PhoneOutlined class="input-prefix-icon" />
                    </template>
                  </a-input>
                </a-form-item>

                <a-form-item name="subject" class="group/item">
                  <template #label>
                    <span class="contact-label text-sm font-semibold">
                      Subject <span class="text-red-500">*</span>
                    </span>
                  </template>
                  <a-input
                    v-model:value="formData.subject"
                    size="large"
                    placeholder="Project Discussion"
                    class="custom-input"
                  >
                    <template #prefix>
                      <FlagOutlined class="input-prefix-icon" />
                    </template>
                  </a-input>
                </a-form-item>
              </div>

              <a-form-item name="message" class="group/item">
                <template #label>
                  <span class="contact-label text-sm font-semibold">
                    Your Message <span class="text-red-500">*</span>
                  </span>
                </template>
                <a-textarea
                  v-model:value="formData.message"
                  :rows="6"
                  placeholder="Tell me about your project, requirements, or any questions you have..."
                  class="custom-input"
                >
                  <template #prefix>
                    <EditOutlined class="input-prefix-icon" />
                  </template>
                </a-textarea>
              </a-form-item>

              <a-form-item class="mb-0 mt-2">
                <CustomButton
                  :disabled="isSubmitting"
                  type="submit"
                  variant="primary"
                  class="submit-btn w-full"
                >
                  <span
                    class="relative z-10 flex items-center justify-center gap-3"
                  >
                    <SendOutlined v-if="!isSubmitting" class="text-base" />
                    <i
                      v-else
                      class="fa-solid fa-spinner animate-spin text-base"
                    ></i>
                    {{
                      isSubmitting ? 'Sending Your Message...' : 'Send Message'
                    }}
                  </span>
                </CustomButton>
              </a-form-item>

              <div
                class="flex items-center justify-center gap-2 text-xs"
                style="color: var(--text-muted-color)"
              >
                <LockOutlined
                  class="text-xs"
                  style="color: var(--text-muted-color)"
                />
                <span
                  >Your information is secure and will never be shared.</span
                >
              </div>
            </a-form>
          </div>
        </div>

        <div class="space-y-6 lg:col-span-4">
          <div class="space-y-4">
            <ContactCard
              icon="fa-solid fa-location-dot"
              title="Visit Me"
              :text="siteInfo.contact.address"
              color="blue"
            />
            <ContactCard
              icon="fa-solid fa-phone"
              title="Call Me"
              :text="siteInfo.contact.phoneNumber"
              color="blue"
              :link="`tel:${siteInfo.contact.phoneNumber}`"
            />
            <ContactCard
              icon="fa-solid fa-envelope"
              title="Email Me"
              :text="siteInfo.contact.email"
              color="blue"
              :link="`mailto:${siteInfo.contact.email}`"
            />
          </div>

          <div class="contact-why-card rounded-2xl p-6">
            <h3 class="contact-why-heading text-xl font-black sm:text-2xl">
              Why work with me
            </h3>
            <div class="mt-5 space-y-4">
              <div class="contact-why-item rounded-xl p-3">
                <div class="flex items-start gap-3">
                  <div class="why-icon">
                    <ThunderboltOutlined class="text-[1.2rem]" />
                  </div>
                  <div>
                    <h4 class="contact-why-title">Fast Response</h4>
                    <p class="contact-why-desc">
                      Quick replies and clear communication.
                    </p>
                  </div>
                </div>
              </div>

              <div class="contact-why-item rounded-xl p-3">
                <div class="flex items-start gap-3">
                  <div class="why-icon">
                    <SafetyCertificateOutlined class="text-[1.2rem]" />
                  </div>
                  <div>
                    <h4 class="contact-why-title">Quality Delivery</h4>
                    <p class="contact-why-desc">
                      Pixel-perfect and performance-focused solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div class="contact-why-item rounded-xl p-3">
                <div class="flex items-start gap-3">
                  <div class="why-icon">
                    <TeamOutlined class="text-[1.2rem]" />
                  </div>
                  <div>
                    <h4 class="contact-why-title">Long-Term Partner</h4>
                    <p class="contact-why-desc">
                      Built for sustainable collaboration and growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <SocialLinks />
      </div>
    </div>

    <a-modal
      v-model:open="showSuccessModal"
      :footer="null"
      :closable="false"
      centered
      width="450px"
      wrap-class-name="custom-modal"
    >
      <div
        class="contact-modal relative overflow-hidden rounded-2xl p-10 text-center"
      >
        <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--primary-transparent),transparent_52%)]"
        ></div>
        <div class="relative">
          <div
            class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full contact-modal-icon"
          >
            <i
              class="fa-solid fa-circle-check text-4xl text-[var(--text-white-color)]"
            ></i>
          </div>
          <h3 class="contact-modal-title mb-3 text-3xl font-black">
            Message Sent!
          </h3>
          <p class="contact-modal-desc mb-8 text-base">
            Thank you for reaching out. I'll get back to you within 24 hours.
          </p>
          <button
            @click="showSuccessModal = false"
            class="contact-modal-btn rounded-xl px-8 py-3 text-base font-bold text-[var(--text-white-color)] transition-transform duration-300 hover:scale-105"
          >
            Great!
          </button>
        </div>
      </div>
    </a-modal>
  </section>
</template>

<style scoped>
.contact-section {
  background-color: var(--bg-secondary-color);
}

.contact-noise {
  background-image:
    radial-gradient(circle at 10% 10%, var(--glow-primary), transparent 30%),
    radial-gradient(
      circle at 85% 15%,
      var(--white-transparent-05),
      transparent 28%
    ),
    radial-gradient(circle at 75% 85%, var(--glow-primary), transparent 26%);
}

.contact-intro {
  border: 1px solid var(--glass-border);
  background: linear-gradient(135deg, var(--surface-glass), transparent 70%);
}

.contact-description {
  color: var(--text-secondary-color);
}

.contact-description-strong {
  color: var(--text-primary-color);
  font-weight: 600;
}

.contact-form-card {
  border: 1px solid var(--glass-border);
  background: var(--surface-glass);
}

.contact-form-decor {
  border: 1px solid var(--glass-border);
  background: radial-gradient(
    circle,
    var(--white-transparent-10),
    transparent 60%
  );
}

.contact-form-title {
  color: var(--text-primary-color);
}

.contact-status {
  background: var(--white-transparent-05);
  border: 1px solid var(--glass-border);
  color: var(--text-primary-color);
}

.contact-form-subtitle {
  color: var(--text-muted-color);
}

.status-dot {
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 9999px;
  background: green;
  box-shadow: 0 0 0 5px var(--glow-primary);
}

.contact-label {
  color: var(--text-secondary-color);
}

.contact-why-card {
  border: 1px solid var(--glass-border);
  background: var(--surface-glass);
}

.contact-why-heading {
  color: var(--text-primary-color);
}

.contact-why-title {
  color: var(--text-primary-color);
  font-weight: 700;
}

.contact-why-desc {
  color: var(--text-muted-color);
}

.contact-why-item {
  border: 1px solid transparent;
  background: var(--white-transparent-03);
  transition:
    border-color 250ms ease,
    transform 250ms ease;
}

.contact-why-item:hover {
  border-color: var(--glass-border);
  transform: translateX(4px);
}

.why-icon {
  height: 2rem;
  width: 2rem;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--theme-primary-color);
  background: var(--theme-primary-light);
  border: 1px solid var(--theme-primary-light);
}

.contact-modal {
  background: linear-gradient(
    to bottom right,
    var(--bg-card-color),
    var(--bg-secondary-color)
  );
}

.contact-modal-icon {
  background: var(--theme-gradient-primary);
  box-shadow: var(--shadow-md);
}

.contact-modal-btn {
  background: var(--theme-gradient-primary);
  box-shadow: var(--shadow-sm);
}

.contact-modal-title {
  color: var(--text-primary-color);
}

.contact-modal-desc {
  color: var(--text-secondary-color);
}

.input-prefix-icon {
  color: var(--theme-primary-color);
  font-size: 1.2rem;
  margin-right: 0.6rem;
}

:deep(.custom-input) {
  border-radius: 0.75rem;
  border: 1px solid var(--glass-border);
  background: var(--white-transparent-03);
  padding: 0.75rem 1rem;
  font-size: 1rem;
  color: var(--text-primary-color);
  transition: all 300ms ease;
}

:deep(.custom-input .ant-input) {
  background: transparent;
}

:deep(.custom-input)::placeholder {
  color: var(--text-muted-color);
}

:deep(.custom-input:hover) {
  border-color: var(--theme-primary-color);
}

:deep(.custom-input:focus),
:deep(.custom-input.ant-input-focused) {
  border-color: var(--theme-primary-color);
  background: var(--white-transparent-05);
  box-shadow: 0 0 0 3px var(--glow-primary);
}

:deep(.ant-input-textarea textarea.custom-input) {
  min-height: 150px;
  resize: vertical;
}

:deep(.ant-input-textarea .ant-input) {
  background: transparent;
}

.submit-btn {
  border-radius: 0.75rem !important;
  padding: 0.85rem 1.5rem !important;
  font-weight: 700 !important;
  font-size: 1rem !important;
}

.submit-btn:hover {
  transform: translateY(-1px);
}

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

:deep(.ant-form-item) {
  @apply mb-6;
}

:deep(.ant-form-item-label > label) {
  @apply h-auto pb-2;
}

:deep(.ant-form-item-explain-error) {
  @apply text-pink-400;
}

:deep(.custom-modal .ant-modal-content) {
  @apply bg-transparent p-0 shadow-none;
}

:deep(.custom-modal .ant-modal-body) {
  @apply p-0;
}

@media (max-width: 640px) {
  .contact-intro {
    padding: 1.25rem;
  }
}
</style>
