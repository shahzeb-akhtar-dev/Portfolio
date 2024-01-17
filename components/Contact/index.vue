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
        If You need any help in web Development contact me at the following
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
          <div class="details">0320 8055452</div>
        </div>
        <div class="c-item">
          <div class="heading">
            <i class="fa-solid fa-envelope-circle-check"></i>
            Email
          </div>
          <div class="details">shahzebakhtar892@gmail.com</div>
        </div>
      </div>
      <div class="message-box col-6">
        <div class="box">
          <a-form-model ref="ruleForm" :model="form" :rules="rules">
            <div class="b-item">
              <a-form-model-item ref="name" label="Full Name" prop="name">
                <a-input
                  v-model="form.name"
                  @blur="
                    () => {
                      $refs.name.onFieldBlur()
                    }
                  "
                />
              </a-form-model-item>
            </div>

            <div class="b-item">
              <a-form-model-item
                ref="phoneNumber"
                label="Phone Number"
                prop="phoneNumber"
              >
                <a-input type="number" v-model="form.phoneNumber"></a-input>
              </a-form-model-item>
            </div>
            <div class="b-item">
              <a-form-model-item ref="email" label="Email" prop="email">
                <a-input type="email" v-model="form.email"></a-input>
              </a-form-model-item>
            </div>
            <div class="b-item">
              <a-form-model-item
                ref="subject"
                label="Subject"
                prop="subject"
              >
                <a-input v-model="form.subject"></a-input>
              </a-form-model-item>
            </div>
            <div class="b-item">
              <a-form-model-item ref="message" label="Message" prop="message">
                <a-textarea
                  v-model="form.message"
                  placeholder="Type Your Message"
                  :auto-size="{ minRows: 3, maxRows: 5 }"
                />
              </a-form-model-item>
            </div>
          </a-form-model>
          <div class="b-item">
            <custom-button @click="sendMail" :loading="mailLoading">Send</custom-button>
          </div>
        </div>
      </div>
    </div>
    <div class="social-links">
      <ul>
        <li>
          <a href="https://www.facebook.com/shahzeb.akhtar.583" target="blank">
            <i class="fa-brands fa-square-facebook"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/shahzeb-akhtar-889570247/"
            target="blank"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/ShahzebAkhtar89" target="blank">
            <i class="fa-brands fa-square-twitter"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fa-brands fa-square-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CustomButton from '../BasicComponents/CustomButton.vue'
export default {
  components: { CustomButton },
  data() {
    return {
      form: {},
      mailLoading: false,
      rules: {
        name: [
          {
            required: true,
            message: 'Full Name is required.',
            trigger: 'blur',
          },
          {
            min: 3,
            max: 50,
            message: 'Length should be 3 to 50',
            trigger: 'blur',
          },
        ],
        phoneNumber: [
          {
            required: true,
            message: 'Phone Number is required.',
            trigger: 'blur',
          },
          {
            min: 3,
            max: 17,
            message: 'Length should be 3 to 17',
            trigger: 'blur',
          },
        ],
        email: [
          {
            required: true,
            message: 'Email is required.',
            trigger: 'blur',
          },
          {
            type: 'email',
            message: 'Please enter valid email',
            trigger: 'blur',
          },
        ],
        message: [
          {
            required: true,
            message: 'Message is required.',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    sendMail() {
      this.mailLoading = true
      let form = this.form
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          Email.send({
            Host: 'smtp.elasticemail.com',
            Username: 'stephanakhtar.web@gmail.com',
            Password: '7AF83909F8EAC86E2E241F40E7138F8D5A7A',
            To: 'shahzebakhtar892@gmail.com',
            From: 'stephanakhtar.web@gmail.com',
            Subject: form.subject || '',
            Body: `name : ${form.name} , phone Number : ${form.phoneNumber} , email : ${form.message}`,
          }).then((e) => {
            this.mailLoading = false

            if (e == 'OK') {
              this.form={}
              this.$notification.success({
                message: 'Email send',
              })
            } else {
              this.$notification.error({
                message: 'Email sending failed',
                description: e,
              })
            }
          })
        }
      })
    },
  },
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
          .ant-form-item-label {
            label {
              color: inherit;
              padding: 0.5rem 0rem;
              font-weight: 500;
              &:not(.ant-form-item-required) {
                &::after {
                  display: none;
                }
              }
              &.ant-form-item-required {
                &::after {
                  display: inline-block;
                  color: #f5222d;
                  font-size: 1.6rem;
                  font-family: SimSun, sans-serif;
                  line-height: 1;
                  content: '*' !important;
                  margin-left: 0.4rem;
                  vertical-align: super;
                }
                &::before {
                  display: none;
                }
              }
            }
          }

          .ant-input {
            box-shadow: 0 0 1.7rem -0.6rem var(--box-shadow-color);
            color: var(--theme-primary-color);
            font-weight: 500;
            &:hover {
              border-color: var(--box-shadow-color);
            }
            &:focus {
              border-color: var(--box-shadow-color);
              border-right-width: 1px !important;
              outline: 0;
              box-shadow: inset 0 0 14px -0.2rem var(--box-shadow-color);
            }

            &::-webkit-inner-spin-button,
            &::-webkit-outer-spin-button {
              -webkit-appearance: none;
            }
            -moz-appearance: textfield;
          }
          button {
            width: 100%;
          }
        }
      }
    }
  }
  .social-links {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 5rem;
      li {
        margin: 0.5rem 1.5rem;
        border-radius: 50%;
        font-size: 6.5rem;
        list-style-type: none;
        a {
          text-decoration: none;
          i {
            color: var(--text-black-color);
            height: 5.55rem;
            background: inherit;
            width: 4.5rem;
            display: flex;
            justify-content: center;
            line-height: 5.5rem;
            transition: 0.4s;
          }
          &:hover i {
            color: var(--theme-primary-color);
            background: #ffffff;
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
