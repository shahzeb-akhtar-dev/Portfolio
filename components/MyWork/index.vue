<template>
  <div class="my-work pt-7 text-center">
    <div class="title-h">
      <div class="text-line">
        <div class="text">My Portfolio</div>
      </div>
    </div>

    <div class="description col-6">
      <h1>See My Works Which Will Amaze You!</h1>
      <p>
        We develop the best quality website that serves for the long term.
        Well-documented, clean, easy and elegant interface helps any
        non-technical clients.
      </p>
    </div>
    <div class="tabs">
      <ul class="work-cards">
        <li v-for="card in recentProjects" :key="card.id">
          <span class="image">
            <img :src="card.image" alt="" />
          </span>
          <div class="overlay">
            <span class="name"
              ><a href="">{{ card.name }}</a></span
            >
            <p class="desc" :title="card.description">
              {{ card.description }}
            </p>
          </div>
        </li>
      </ul>
      <!-- LOAD MORE BUTTON -->
      <custom-button @click="loadMore">
        <template> load more </template>
      </custom-button>
    </div>
  </div>
</template>

<script>
import CustomButton from '~/components/BasicComponents/CustomButton.vue'
export default {
  components: { CustomButton },
  data() {
    return {
      myWork: [
        {
          id: 1,
          name: 'EZ-Reminder System',
          description:
            'Led frontend development, building campaigns, templates, and workflows for improved user functionality. Created interfaces for contact and workspace management, optimized performance through refactoring, and mentored junior developers.',
          image: 'https://cdn-icons-png.flaticon.com/512/854/854878.png',
        },
        {
          id: 2,
          name: 'EzHubSpot (Workforce Management System)',
          description:
            'Designed and implemented core modules for time tracking, payroll automation, attendance, and leave requests. Built real-time user monitoring and optimized system performance with efficient state management and API integrations.',
          image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        },
        {
          id: 3,
          name: 'Medical Referral System',
          description:
            'Developed a dynamic user interface, integrated backend APIs, and customized Mapbox for location-based interactions. Added draggable dynamic custom fields and optimized overall performance for scalability.',
          image: 'https://cdn-icons-png.flaticon.com/512/2966/2966482.png',
        },
        {
          id: 4,
          name: 'Customer Relationship Management (CRM)',
          description:
            'Designed responsive UI for deals, boards, staff management, and analytics. Integrated Apex Charts for visualization, drag-and-drop with Vue Draggable, and customizable fields for better user control.',
          image: 'https://cdn-icons-png.flaticon.com/512/1039/1039328.png',
        },
        {
          id: 5,
          name: 'RCM (Revenue Cycle Management System)',
          description:
            'Contributed to a multi-modular medical billing system covering patient registration, insurance verification, claim submission, and payment posting. Built dashboards and reporting modules for efficient billing management.',
          image: 'https://cdn-icons-png.flaticon.com/512/2331/2331941.png',
        },
        {
          id: 6,
          name: 'Tipz (Customer Portal)',
          description:
            'Built a portal for customers to send tips to barbers. Integrated Stripe for secure payments, ensuring a smooth and seamless tipping experience.',
          image: 'https://cdn-icons-png.flaticon.com/512/1170/1170576.png',
        },
        {
          id: 7,
          name: 'Tipz-Admin (Admin Panel)',
          description:
            'Developed a dashboard for barbershops to view received tips, track amounts, and review customer feedback. Added analytics and filtering for insights.',
          image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        },
        {
          id: 8,
          name: 'TCA (Voucher App)',
          description:
            'Developed a voucher management app where users can apply vouchers by scanning QR codes or entering codes. Added trip history for better user tracking.',
          image: 'https://cdn-icons-png.flaticon.com/512/888/888879.png',
        },
        {
          id: 9,
          name: 'Ez SignDocu (E-Sign Document webApp)',
          description:
            'Built a secure e-signature platform enabling users to upload, sign, and manage documents digitally. Integrated authentication workflows, document versioning, and real-time status tracking to streamline approval processes.',
          image: 'https://cdn-icons-png.flaticon.com/512/888/888879.png',
        },
        {
          id: 10,
          name: 'Servr (Hotel Management System)',
          description:
            'Developed a hotel management solution covering booking, check-in/check-out, and staff coordination. Added modules for room availability, customer profiles, billing, and reporting to improve operational efficiency.',
          image: 'https://cdn-icons-png.flaticon.com/512/888/888879.png',
        },
        {
          id: 11,
          name: 'Drive-Vip-Cars (Ride Booking Website)',
          description:
            'Built a responsive ride-booking site where users can schedule and manage rides. Focused on smooth booking flow and mobile-friendly usability.',
          image: 'https://cdn-icons-png.flaticon.com/512/3104/3104830.png',
        },
        {
          id: 12,
          name: 'A2B Tommyfield (Ride Booking Website)',
          description:
            'Developed a ride-booking platform similar to Drive-Vip-Cars, maintaining a clean and intuitive UI/UX for seamless ride scheduling and management.',
          image: 'https://cdn-icons-png.flaticon.com/512/883/883806.png',
        },
      ],
      workDataLimit: 6,
    }
  },
  computed: {
    recentProjects() {
      let data = this.myWork
      let offSet = this.workDataLimit
      return data.slice(0, offSet)
    },
  },
  mounted() {},
  methods: {
    loadMore() {
      const limit = this.myWork.length
      if (limit >= this.workDataLimit) {
        this.workDataLimit += 3
      } else {
        this.$notification.error({
          message: 'Limit Exceed',
        })
      }
    },
  },
}
</script>

<style lang="scss">
.my-work {
  .tabs {
    width: 60vw;
    margin: 10px auto;
    .work-cards {
      column-count: 3;
      column-gap: 2rem;
      li {
        list-style: none;
        padding-bottom: 2rem;
        position: relative;

        img {
          width: 100%;
          object-fit: cover;
          border-radius: 2rem;
          border: 1rem solid #fff;
          box-shadow: 0rem 0.3rem 0.9rem 0rem #d0cccc;
        }

        .overlay {
          max-width: calc(100% - 1.8rem);
          position: absolute;
          padding-left: 1rem;
          margin: 1rem;
          left: -0.1rem;
          bottom: 1.78rem;
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;
          height: 0%;
          font-weight: 400;
          transition: 0.7s ease-in;
          background-color: var(--primary-transparent-color);
          color: var(--text-white-color);
          overflow: hidden;
          text-align: left;
          width: 100%;
          .name {
            display: block;
            cursor: pointer;
            font-weight: 600;
            margin: 1rem 0rem;
            font-size: 2rem;
            a {
              color: inherit;
            }
            &:hover {
              text-decoration: underline;
            }
          }
          .desc {
            display: -webkit-box;
            -webkit-line-clamp: 2; /* Number of lines */
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            margin: 1rem 0rem;
            cursor: default;
            max-width: 99%;
            line-height: 1.5rem;
          }
        }
        &:hover .overlay {
          height: 35%;
        }
      }
    }
  }
}
</style>
