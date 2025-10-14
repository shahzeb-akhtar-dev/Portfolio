<template>
  <div class="portfolio-section">
    <!-- Animated Background -->
    <div class="portfolio-bg">
      <div class="bg-orb orb-1"></div>
      <div class="bg-orb orb-2"></div>
      <div class="mesh-gradient"></div>
    </div>

    <div class="portfolio-container">
      <!-- Header Section -->
      <div class="portfolio-header">
        <div class="header-badge">
          <div class="badge-pulse"></div>
          <i class="fa-solid fa-briefcase"></i>
          <span>MY PORTFOLIO</span>
        </div>
        
        <h1 class="portfolio-title">
          <span class="title-main">Works That Will</span>
          <span class="title-highlight">Amaze You!</span>
        </h1>
        
        <p class="portfolio-description">
          We develop the best quality websites that serve for the long term.
          <strong>Well-documented</strong>, <strong>clean</strong>, 
          <strong>easy</strong> and <strong>elegant</strong> interface helps 
          any non-technical clients.
        </p>

        <!-- Stats Bar -->
        <div class="stats-bar">
          <div class="stat-box">
            <div class="stat-icon">
              <i class="fa-solid fa-rocket"></i>
            </div>
            <div class="stat-info">
              <div class="stat-number">{{ myWork.length }}+</div>
              <div class="stat-text">Projects</div>
            </div>
          </div>
          <div class="stat-box">
            <div class="stat-icon">
              <i class="fa-solid fa-users"></i>
            </div>
            <div class="stat-info">
              <div class="stat-number">100%</div>
              <div class="stat-text">Satisfaction</div>
            </div>
          </div>
          <div class="stat-box">
            <div class="stat-icon">
              <i class="fa-solid fa-award"></i>
            </div>
            <div class="stat-info">
              <div class="stat-number">5+</div>
              <div class="stat-text">Years</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid">
        <div
          v-for="(project, index) in recentProjects"
          :key="project.id"
          class="project-card"
          :style="{ '--index': index }"
        >
          <div class="card-wrapper">
            <!-- Image Container -->
            <div class="card-image">
              <img :src="project.image" :alt="project.name" />
              <div class="image-overlay"></div>
              <div class="project-number">{{ String(index + 1).padStart(2, '0') }}</div>
            </div>

            <!-- Content -->
            <div class="card-content">
              <h3 class="project-name">{{ project.name }}</h3>
              <p class="project-desc">{{ project.description }}</p>
              
              <div class="card-footer">
                <a href="#" class="view-btn">
                  <span>View Project</span>
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
                <div class="tech-badge">
                  <i class="fa-solid fa-code"></i>
                </div>
              </div>
            </div>

            <!-- Hover Effects -->
            <div class="card-shine"></div>
            <div class="card-glow"></div>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="load-more-wrapper" v-if="workDataLimit < myWork.length">
        <button class="load-more-btn" @click="loadMore">
          <span class="btn-text">Load More Projects</span>
          <span class="btn-icon">
            <i class="fa-solid fa-chevron-down"></i>
          </span>
          <div class="btn-glow"></div>
        </button>
      </div>

      <!-- All Projects Loaded Message -->
      <div class="all-loaded" v-else>
        <div class="loaded-icon">
          <i class="fa-solid fa-check-circle"></i>
        </div>
        <p>All projects loaded! 🎉</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myWork: [
        {
          id: 1,
          name: 'EZ-Reminder System',
          description:
            'Led frontend development, building campaigns, templates, and workflows for improved user functionality. Created interfaces for contact and workspace management.',
          image: 'https://cdn-icons-png.flaticon.com/512/854/854878.png',
        },
        {
          id: 2,
          name: 'EzHubSpot (Workforce Management)',
          description:
            'Designed and implemented core modules for time tracking, payroll automation, attendance, and leave requests. Built real-time user monitoring.',
          image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        },
        {
          id: 3,
          name: 'Medical Referral System',
          description:
            'Developed a dynamic user interface, integrated backend APIs, and customized Mapbox for location-based interactions with draggable fields.',
          image: 'https://cdn-icons-png.flaticon.com/512/2966/2966482.png',
        },
        {
          id: 4,
          name: 'Customer Relationship Management',
          description:
            'Designed responsive UI for deals, boards, staff management, and analytics. Integrated Apex Charts for visualization and drag-and-drop functionality.',
          image: 'https://cdn-icons-png.flaticon.com/512/1039/1039328.png',
        },
        {
          id: 5,
          name: 'RCM (Revenue Cycle Management)',
          description:
            'Contributed to a multi-modular medical billing system covering patient registration, insurance verification, claim submission, and payment posting.',
          image: 'https://cdn-icons-png.flaticon.com/512/2331/2331941.png',
        },
        {
          id: 6,
          name: 'Tipz (Customer Portal)',
          description:
            'Built a portal for customers to send tips to barbers. Integrated Stripe for secure payments, ensuring a smooth tipping experience.',
          image: 'https://cdn-icons-png.flaticon.com/512/1170/1170576.png',
        },
        {
          id: 7,
          name: 'Tipz-Admin (Admin Panel)',
          description:
            'Developed a dashboard for barbershops to view received tips, track amounts, and review customer feedback with analytics.',
          image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        },
        {
          id: 8,
          name: 'TCA (Voucher App)',
          description:
            'Developed a voucher management app where users can apply vouchers by scanning QR codes or entering codes with trip history tracking.',
          image: 'https://cdn-icons-png.flaticon.com/512/888/888879.png',
        },
        {
          id: 9,
          name: 'Ez SignDocu (E-Sign Platform)',
          description:
            'Built a secure e-signature platform enabling users to upload, sign, and manage documents digitally with real-time status tracking.',
          image: 'https://cdn-icons-png.flaticon.com/512/888/888879.png',
        },
        {
          id: 10,
          name: 'Servr (Hotel Management)',
          description:
            'Developed a hotel management solution covering booking, check-in/check-out, room availability, customer profiles, and billing.',
          image: 'https://cdn-icons-png.flaticon.com/512/888/888879.png',
        },
        {
          id: 11,
          name: 'Drive-Vip-Cars (Ride Booking)',
          description:
            'Built a responsive ride-booking site where users can schedule and manage rides with smooth booking flow and mobile-friendly design.',
          image: 'https://cdn-icons-png.flaticon.com/512/3104/3104830.png',
        },
        {
          id: 12,
          name: 'A2B Tommyfield (Ride Booking)',
          description:
            'Developed a ride-booking platform with clean and intuitive UI/UX for seamless ride scheduling and management.',
          image: 'https://cdn-icons-png.flaticon.com/512/883/883806.png',
        },
      ],
      workDataLimit: 6,
    }
  },
  computed: {
    recentProjects() {
      return this.myWork.slice(0, this.workDataLimit)
    },
  },
  methods: {
    loadMore() {
      const limit = this.myWork.length
      if (this.workDataLimit < limit) {
        this.workDataLimit += 3
      }
    },
  },
}
</script>

<style scoped>
/* CSS Variables */
:root {
  --theme-primary-color: rgb(255 90 1);
  --theme-gradient-primary-color: linear-gradient(70deg, rgb(255, 90, 1) 53%, rgb(255 75 0) 61%);
  --text-black-color: #000000;
  --text-secondary-color: #a19797;
  --text-white-color: #ffff;
  --primary-transparent-color: rgb(255 90 1 / 93%);
}

/* Main Section */
.portfolio-section {
  position: relative;
  min-height: 100vh;
  padding: 8rem 0;
  background: linear-gradient(180deg, #ffffff 0%, #fff8f5 50%, #fef3ee 100%);
  overflow: hidden;
}

/* Background */
.portfolio-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.4;
}

.orb-1 {
  width: 700px;
  height: 700px;
  top: -200px;
  right: -200px;
  background: radial-gradient(circle, rgba(255, 90, 1, 0.3) 0%, transparent 70%);
  animation: float-orb 20s ease-in-out infinite;
}

.orb-2 {
  width: 600px;
  height: 600px;
  bottom: -200px;
  left: -200px;
  background: radial-gradient(circle, rgba(255, 140, 50, 0.25) 0%, transparent 70%);
  animation: float-orb 25s ease-in-out infinite reverse;
}

.mesh-gradient {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255, 90, 1, 0.02) 2px, transparent 2px),
    linear-gradient(90deg, rgba(255, 90, 1, 0.02) 2px, transparent 2px);
  background-size: 80px 80px;
}

@keyframes float-orb {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(50px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-30px, 30px) scale(0.9);
  }
}

/* Container */
.portfolio-container {
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Header */
.portfolio-header {
  text-align: center;
  margin-bottom: 6rem;
  animation: fade-in-up 1s ease-out;
}

.header-badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 2rem;
  background: linear-gradient(135deg, rgba(255, 90, 1, 0.1) 0%, rgba(255, 90, 1, 0.05) 100%);
  border: 2px solid rgba(255, 90, 1, 0.3);
  border-radius: 100px;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  color: var(--theme-primary-color);
  overflow: hidden;
}

.badge-pulse {
  position: absolute;
  width: 10px;
  height: 10px;
  background: var(--theme-primary-color);
  border-radius: 50%;
  left: 1.5rem;
  animation: pulse-grow 2s ease-in-out infinite;
}

@keyframes pulse-grow {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(2);
    opacity: 0;
  }
}

.header-badge i {
  font-size: 1.1rem;
  z-index: 1;
}

.portfolio-title {
  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 900;
  line-height: 1.15;
  margin-bottom: 2rem;
}

.title-main {
  display: block;
  color: var(--text-black-color);
}

.title-highlight {
  display: block;
  background: var(--theme-gradient-primary-color);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% auto;
  animation: gradient-shift 3s linear infinite;
}

@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}

.portfolio-description {
  max-width: 700px;
  margin: 0 auto 3rem;
  font-size: 1.125rem;
  line-height: 1.9;
  color: var(--text-secondary-color);
}

.portfolio-description strong {
  color: var(--text-black-color);
  font-weight: 700;
}

/* Stats Bar */
.stats-bar {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
}

.stat-box {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.stat-box:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(255, 90, 1, 0.15);
}

.stat-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: var(--theme-gradient-primary-color);
  border-radius: 12px;
  color: white;
  font-size: 1.5rem;
  box-shadow: 0 8px 25px rgba(255, 90, 1, 0.3);
}

.stat-info {
  text-align: left;
}

.stat-number {
  font-size: 1.75rem;
  font-weight: 900;
  color: var(--theme-primary-color);
  line-height: 1;
  margin-bottom: 0.25rem;
}

.stat-text {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-secondary-color);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-bottom: 4rem;
}

.project-card {
  animation: scale-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
  animation-delay: calc(var(--index) * 0.1s);
}

.card-wrapper {
  position: relative;
  height: 100%;
  background: white;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;
}

.card-wrapper:hover {
  transform: translateY(-15px);
  box-shadow: 0 30px 80px rgba(255, 90, 1, 0.2);
}

.card-wrapper:hover .image-overlay {
  opacity: 0.9;
}

.card-wrapper:hover .project-number {
  transform: scale(1.2) rotate(10deg);
}

.card-wrapper:hover .card-shine {
  transform: translateX(100%);
}

.card-wrapper:hover .card-glow {
  opacity: 1;
}

/* Card Image */
.card-image {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  background: linear-gradient(135deg, #f5f5f5 0%, #e5e5e5 100%);
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.card-wrapper:hover .card-image img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: var(--theme-gradient-primary-color);
  opacity: 0;
  transition: opacity 0.5s ease;
  mix-blend-mode: multiply;
}

.project-number {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--theme-primary-color);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Card Content */
.card-content {
  padding: 2rem;
}

.project-name {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-black-color);
  margin-bottom: 1rem;
  line-height: 1.3;
  transition: color 0.3s ease;
}

.card-wrapper:hover .project-name {
  color: var(--theme-primary-color);
}

.project-desc {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-secondary-color);
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.view-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--theme-primary-color);
  text-decoration: none;
  transition: all 0.3s ease;
}

.view-btn:hover {
  gap: 1.25rem;
}

.view-btn i {
  transition: transform 0.3s ease;
}

.view-btn:hover i {
  transform: translateX(5px);
}

.tech-badge {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 90, 1, 0.1) 0%, rgba(255, 90, 1, 0.05) 100%);
  border-radius: 10px;
  color: var(--theme-primary-color);
  font-size: 1.1rem;
}

/* Card Effects */
.card-shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%);
  transform: translateX(-100%);
  transition: transform 0.8s ease;
  pointer-events: none;
}

.card-glow {
  position: absolute;
  inset: -20px;
  background: radial-gradient(circle, rgba(255, 90, 1, 0.2) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.5s ease;
  filter: blur(30px);
  pointer-events: none;
}

/* Load More Button */
.load-more-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

.load-more-btn {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 3rem;
  background: var(--theme-gradient-primary-color);
  border: none;
  border-radius: 1.5rem;
  color: white;
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 15px 50px rgba(255, 90, 1, 0.4);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.load-more-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 70px rgba(255, 90, 1, 0.5);
}

.load-more-btn:hover .btn-icon {
  animation: bounce-down 0.6s ease-in-out infinite;
}

.btn-text,
.btn-icon {
  position: relative;
  z-index: 2;
}

.btn-icon {
  display: flex;
  align-items: center;
}

@keyframes bounce-down {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(5px);
  }
}

.btn-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.load-more-btn:hover .btn-glow {
  transform: translateX(100%);
}

/* All Loaded */
.all-loaded {
  text-align: center;
  padding: 3rem;
  animation: fade-in 0.8s ease-out;
}

.loaded-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%);
  border-radius: 50%;
  color: #22c55e;
  font-size: 3rem;
  animation: scale-pulse 2s ease-in-out infinite;
}

@keyframes scale-pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.all-loaded p {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-secondary-color);
}

/* Animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
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

/* Responsive */
@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }

  .stats-bar {
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .portfolio-section {
    padding: 5rem 0;
  }

  .portfolio-container {
    padding: 0 1.5rem;
  }

  .portfolio-header {
    margin-bottom: 4rem;
  }

  .stats-bar {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .stat-box {
    width: 100%;
    max-width: 400px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .card-image {
    height: 240px;
  }
}

@media (max-width: 480px) {
  .portfolio-title {
    font-size: 2.5rem;
  }

  .header-badge {
    font-size: 0.75rem;
    padding: 0.75rem 1.5rem;
  }

  .card-content {
    padding: 1.5rem;
  }

  .project-name {
    font-size: 1.25rem;
  }

  .load-more-btn {
    padding: 1.25rem 2.5rem;
    font-size: 1rem;
  }
}
</style>