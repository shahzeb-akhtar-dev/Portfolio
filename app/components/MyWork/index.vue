<template>
  <section id="my-work" class="work-section relative">
    <div
      class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24"
    >
      <div class="text-center mb-12 space-y-8">
        <HeaderBadge
          icon="fa-solid fa-diagram-project"
          heading="Portfolio Showcase"
          class="!mx-auto"
        />
        <SectionHeading
          first-part="Crafting Digital "
          second-part="Masterpieces"
          wrapper-class="!justify-center"
        />
        <p class="work-description max-w-3xl mx-auto text-lg leading-relaxed">
          Transforming ideas into
          <span class="work-highlight font-semibold"
            >stunning digital experiences</span
          >
          through innovative design, clean code, and cutting-edge technology.
        </p>
      </div>
    </div>
    <WorkGallery :projects="enrichedProjects" />
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import siteInfo from '@/utils/siteInfo.json'
import HeaderBadge from '../BasicComponents/HeaderBadge.vue'
import SectionHeading from '../BasicComponents/SectionHeading.vue'
import WorkGallery from './WorkGallery.vue'

interface Project {
  id: number | string
  name: string
  description: string
  skills?: string[]
  image: string
  category?: string
  features?: { icon: string; label: string }[]
}

const myWork = ref<Project[]>(siteInfo.projects || [])

const categoryMap: Record<string, string> = {
  'Reminder System': 'Web Application',
  'Workforce Management': 'Web Application',
  'Medical Referral System': 'Web Application',
  'Customer Relationship Management': 'Web Application',
  'Revenue Cycle Management': 'Web Application',
  'Customer Portal Barber Tips': 'Web Application',
  'Barber Tips (Admin Panel)': 'Dashboard',
  'Voucher App': 'Mobile Application',
  'E-Sign Platform': 'Web Application',
  'Hotel Management': 'Web Application',
  'Ride Booking': 'Web Application',
  'Taxi Booker Portal': 'Web Application',
}

const featureMap: Record<string, { icon: string; label: string }[]> = {
  'Reminder System': [
    { icon: 'fa-solid fa-bell', label: 'Smart Reminders' },
    { icon: 'fa-solid fa-users', label: 'Team Workflows' },
    { icon: 'fa-solid fa-mobile-screen', label: 'Responsive UI' },
  ],
  'Workforce Management': [
    { icon: 'fa-solid fa-clock', label: 'Time Tracking' },
    { icon: 'fa-solid fa-money-bill-wave', label: 'Payroll Automation' },
    { icon: 'fa-solid fa-chart-line', label: 'Real-time Monitoring' },
  ],
  'Medical Referral System': [
    { icon: 'fa-solid fa-map-location-dot', label: 'Mapbox Integration' },
    { icon: 'fa-solid fa-hand-pointer', label: 'Drag & Drop Fields' },
    { icon: 'fa-solid fa-shield-halved', label: 'HIPAA Compliant' },
  ],
  'Customer Relationship Management': [
    { icon: 'fa-solid fa-chart-pie', label: 'Analytics Dashboard' },
    { icon: 'fa-solid fa-arrows-up-down-left-right', label: 'Drag & Drop Boards' },
    { icon: 'fa-solid fa-mobile-screen', label: 'Responsive Design' },
  ],
  'Revenue Cycle Management': [
    { icon: 'fa-solid fa-file-invoice-dollar', label: 'Claim Submission' },
    { icon: 'fa-solid fa-user-check', label: 'Insurance Verification' },
    { icon: 'fa-solid fa-credit-card', label: 'Payment Posting' },
  ],
  'Customer Portal Barber Tips': [
    { icon: 'fa-solid fa-shield-halved', label: 'Secure Payments' },
    { icon: 'fa-solid fa-chart-line', label: 'Real-time Analytics' },
    { icon: 'fa-solid fa-mobile-screen', label: 'Responsive Design' },
  ],
  'Barber Tips (Admin Panel)': [
    { icon: 'fa-solid fa-chart-bar', label: 'Tip Analytics' },
    { icon: 'fa-solid fa-star', label: 'Customer Feedback' },
    { icon: 'fa-solid fa-gauge-high', label: 'Dashboard' },
  ],
  'Voucher App': [
    { icon: 'fa-solid fa-qrcode', label: 'QR Code Scanner' },
    { icon: 'fa-solid fa-ticket', label: 'Voucher Management' },
    { icon: 'fa-solid fa-route', label: 'Trip History' },
  ],
  'E-Sign Platform': [
    { icon: 'fa-solid fa-file-signature', label: 'Digital Signatures' },
    { icon: 'fa-solid fa-lock', label: 'Secure Documents' },
    { icon: 'fa-solid fa-clock-rotate-left', label: 'Status Tracking' },
  ],
  'Hotel Management': [
    { icon: 'fa-solid fa-bed', label: 'Room Management' },
    { icon: 'fa-solid fa-calendar-check', label: 'Booking System' },
    { icon: 'fa-solid fa-receipt', label: 'Billing & Invoicing' },
  ],
  'Ride Booking': [
    { icon: 'fa-solid fa-car', label: 'Ride Scheduling' },
    { icon: 'fa-solid fa-credit-card', label: 'Stripe Payments' },
    { icon: 'fa-solid fa-mobile-screen', label: 'Mobile Friendly' },
  ],
  'Taxi Booker Portal': [
    { icon: 'fa-solid fa-taxi', label: 'Ride Booking' },
    { icon: 'fa-solid fa-map-location-dot', label: 'Route Planning' },
    { icon: 'fa-solid fa-star', label: 'Driver Ratings' },
  ],
}

const enrichedProjects = computed(() =>
  myWork.value.map((project) => ({
    ...project,
    category: categoryMap[project.name] || 'Web Application',
    features: featureMap[project.name] || [],
  })),
)
</script>

<style scoped>
.work-section {
  background-color: var(--bg-primary-color);
}

.work-description {
  color: var(--text-secondary-color);
}

.work-highlight {
  color: var(--text-primary-color);
}
</style>
