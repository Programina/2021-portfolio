TODO: Add a loading spinner for while the email attempts to send
<template>
  <v-container class="contact d-flex justify-center">
    <v-row justify="center" :class="[!isMobile ? 'contact-row' : 'contact-row is-mobile']">
      <v-col v-if="!isLoading" class="mb-5" >

        <v-row justify="center">
          <v-col class="contact-copy">
             I am very keen on getting feedback on how to improve my portfolio. Please check out my open <a href="https://github.com/Programina/2021-portfolio/issues">issues list</a> on Github and feel free to add to it. 
          </v-col>
        </v-row>
        <v-row  justify="center">
          <v-col class="mx-6" target="_blank">
            <v-form
              class="px-3"
              ref="form"
              v-model="formValidity"
              @submit.prevent="submit"
            >
              <v-text-field
                v-model="from_email.name"
                label="Name"
                name="from_name"
                :rules="inputRules"
                placeholder="Jane Doe"
                required
              ></v-text-field>
              <v-text-field
                v-model="from_email.subject"
                name="subject"
                label="Subject"
                :rules="inputRules"
                required
              ></v-text-field>
              <v-text-field
                v-model="from_email.email"
                name="reply_to"
                label="Email"
                placeholder="jane@doe.com"
                :rules="emailRules"
                required
              ></v-text-field>
              <v-textarea
                v-model="from_email.message"
                :counter="450"
                name="message"
                label="Your message"
                :rules="inputRules"
                placeholder="Your message goes here"
                required
              ></v-textarea>

              <v-row class="justify-end my-8">
                <v-btn @click="resetValidation" text rounded color="warning">
                  <span class="mr-2">Reset</span>
                </v-btn>
                <v-btn 
                  type="submit"
                  elevation="10"
                  text
                  rounded
                  color="primary"
                  :disabled="!formValidity"
                >
                  <span>Submit</span>
                </v-btn>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
        
      </v-col>
      <v-col v-if="isLoading" class="d-flex my-10 justify-center">
        <v-progress-circular
          :size="50"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import emailjs from "emailjs-com"
import ismobile from "@/mixins/ismobile.js"
import ContactSuccess from "@/views/mainmenu/ContactSuccess"
export default {
  name: "Contact",
  components: {ContactSuccess},
  mixins: [ismobile],
  data: () => ({
    from_email: {
      name: "",
      email: "",
      message: "",
      subject: "",
    },
    formValidity: false,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    inputRules: [(v) => v.length >= 3 || "Minimum length is 3 characters."],
    emailRules: [
      (v) => v.length >= 3 || "Minimum length is 3 characters.",
      (v) => v.indexOf("@") !== 0 || "Your email needs a username.",
      (v) => v.includes("@") !== 0 || "Your email needs an @ symbol.",
    ],
    isLoading: false
  }),

  methods: {
    submit(e) {
      this.isLoading = true
      if (this.$refs.form.validate()) {
        emailjs
          .sendForm(
            "service_j01rnvj",
            "template_lzk32dj",
            e.target,
            "user_WbDXf9Pkmprfenjc8Rw5v"
          )
          .then(
            (result) => {
              console.log("SUCCESS!", result.status, result.text);
              if(result) {
                this.isLoading = false
                this.$router.push('/contact-success')
              }
            },
            (error) => {
              console.error(
                "Uh oh! Something went wrong. Here are some thoughts on the error that occured:",
                error
              );
            }
          );
      }
    },
    resetValidation() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style lang="scss" scoped>

.contact {
  .contact-row  {
    padding: 0 90px; 
    max-width: 900px;
    &.is-mobile {
      padding: 0;
    }
  }

  .contact-copy {
    padding: 0 46px;
  }
}

a,
a:visited,
a:hover,
a:active,
a:focus {
  text-transform: inherit;
  color: #3BCEA0 !important;
}
</style>