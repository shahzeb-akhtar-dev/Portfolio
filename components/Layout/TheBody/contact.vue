<template>
  <div class="contact-info">
    <div class="title-h">
      <div class="text-line">
        <div class="text">Contact me</div>
      </div>
    </div>

    <div class="description col-6" style="padding: 7rem 0rem">
      <h1>Contact</h1>
      <p>
        If You need any help in web Development contact me in the following
        ways.
      </p>
    </div>
    <div class="contact row">
      <div class="info col-6">
        <div class="c-item">
          <div class="heading">
            <i class="fa-solid fa-map-location-dot"></i>
            Location
          </div>
          <div class="details">Pakistan KPK Haripur Ghazi</div>
        </div>
        <div class="c-item">
          <div class="heading">
            <i class="fa-solid fa-phone-volume"></i>
            Phone Number
          </div>
          <div class="details">0303 XXXXXXX</div>
        </div>
        <div class="c-item">
          <div class="heading">
            <i class="fa-solid fa-envelope-circle-check"></i>
            Email
          </div>
          <div class="details">stephanakhtar.web@gmail.com</div>
        </div>
      </div>
      <div class="message-box col-6">
        <div class="box">
          <div class="b-item">
            <label for="name">Name</label>
            <a-input></a-input>
          </div>
          <div class="b-item">
            <label for="phone">Phone Number</label>
            <a-input></a-input>
          </div>
          <div class="b-item">
            <label for="email">Email</label>
            <a-input></a-input>
          </div>
          <div class="b-item">
            <label for="message">Message</label>
            <a-textarea
              placeholder="Type Your Message"
              :auto-size="{ minRows: 3, maxRows: 5 }"
            />
          </div>
          <div class="b-item">
            <custom-button>Send</custom-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '../../BasicComponents/CustomButton.vue'
export default {
  components: { CustomButton },
}
</script>

<style lang="scss">
.contact-info {
  padding: 9rem 0rem;
  .contact {
    .info {
      .c-item {
        padding: 2rem 0rem;
        .heading {
          font-size: large;
          font-weight: 700;
          color: var(--theme-black-color);
          i {
            padding-right: 2rem;
          }
        }
        .details {
          padding-left: 5.5rem;
        }
      }
    }

    .message-box {
      .box {
        width: 52rem;
        margin: auto;
        padding: 2rem;
        border-radius: 2rem;
        box-shadow: 0px 0px 55px -14px var(--box-shadow-color);
        // background: var(--theme-primary-color);
        .b-item {
          margin: 2rem 0rem;
          label {
            // color: #fff;
            padding: 0.5rem 0rem;
            font-weight: 500;
          }

          .ant-input {
            box-shadow: 0 0 1.7rem -0.6rem var(--box-shadow-color);

            &:hover {
              border-color: var(--box-shadow-color);
            }
            &:focus {
              border-color: var(--box-shadow-color);
              border-right-width: 1px !important;
              outline: 0;
              box-shadow: inset 0 0 14px -0.2rem var(--box-shadow-color);
            }
          }
          button {
            width: 100%;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 350px) {
  .contact-info {
    .contact {
      .box {
        width: 100% !important;
      }
    }
  }
}
</style>
