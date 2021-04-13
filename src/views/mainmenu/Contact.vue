TODO: Add a loading spinner for while the email attempts to send
<template>
  <v-container class="contact">
    <v-row>
      <v-col class="mb-5" cols="12">
        <h1 class="px-12">I'd love to hear from you.</h1>
        <br />
        <br />
        <v-row justify="center">
          <v-col class="subheading mx-6" target="_blank" cols="10">
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
                  text
                  rounded
                  color="primary"
                  :class="{ 'button-gradient': formValidity }"
                  :disabled="!formValidity"
                >
                  <span class="mr-2">Submit</span>
                </v-btn>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import emailjs from "emailjs-com";
export default {
  name: "Contact",
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
  }),

  methods: {
    submit(e) {
      console.log("TARGET", e.target)
      if (this.$refs.form.validate()) {
        emailjs
          .sendForm(
            "service_j01rnvj",
            "template_lzk32dj",
            e.target,
            // {
            //   to_name: "Amina",
            //   from_name: this.from_email.name,
            //   reply_to: this.from_email.from_email,
            //   subject: this.from_email.subject,
            //   message: this.from_email.message,
            // },
            "user_WbDXf9Pkmprfenjc8Rw5v"
          )
          .then(
            (result) => {
              console.log("SUCCESS!", result.status, result.text);
              this.$router.push('/contact-success')
            },
            (error) => {
              console.error(
                "Uh oh! Something went wrong. Here are some thoughts on the error that occured:",
                error
              );
            }
          );
        //   try {
        //     emailjs.sendForm(
        //       "service_j01rnvj",
        //       "template_lzk32dj",
        //       e.target,
        //       "user_WbDXf9Pkmprfenjc8Rw5v",
        //       {
        //         name: this.from_email.name,
        //         email: this.from_email.from_email,
        //         subject: this.from_email.subject,
        //         message: this.from_email.message
        //       }
        //     );
        //     this.$router.push('/contact-success')
        //   } catch (error) {
        //     err => console.error('Uh oh! Something went wrong. Here are some thoughts on the error that occured:', err)
        //   }
        // }
      }
    },
    resetValidation() {
      this.$refs.form.reset();
    },
  },
};
</script>