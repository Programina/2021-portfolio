<template>
  <v-container class="contact">
    <v-row>
      <v-col class="mb-5" cols="12">
        <h1 class="px-12">I'd love to hear from you.</h1>
        <br/>
        <br/>
        <v-row justify="center">
          <v-col class="subheading mx-6" target="_blank" cols="10">
                <v-form class="px-3" ref="form">
                  <v-text-field
                      v-model="name"
                      :counter="40"
                      label="Name"
                      :rules="inputRules"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="email"
                      :counter="40"
                      label="Email"
                      :rules="emailRules"
                      required
                    ></v-text-field>
                    <v-textarea
                      v-model="message"
                      :counter="450"
                      label="Your message"
                      :rules="inputRules"
                      required
                    ></v-textarea>

                    <v-btn
                          @click="submit"
                          text
                          rounded
                          color="background"
                          class="button-gradient"
                        > 
                      <span class="mr-2">Submit</span>
                    
                    </v-btn>

                    <v-btn
                          @click="resetValidation"
                          text
                          rounded
                          color="warning"
                        > 
                      <span class="mr-2">Reset</span>
                    
                    </v-btn>
                </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>

export default {
  name: "FirstProject",
  data: () => ({
    name: "",
    email: "",
    message: "",
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    inputRules: [
      v => v.length >= 3 || 'Minimum length is 3 characters.'
    ],
    emailRules: [
      v => v.length >= 3 || 'Minimum length is 3 characters.',
      v => v.indexOf('@') !== 0 || 'Your email needs a username.',
      v => v.includes('@') !== 0 || 'Your email needs an @ symbol.',
      v => v.indexOf('.') - v.indexOf('@') > 1 || 'Your email needs valid domain.',
    ]
  }),

  methods: {
    submit() {
      if(this.$refs.form.validate()) {
        console.log("Submit")
      }
    },
    resetValidation(){
      this.clear()
      this.$refs.form.resetValidation()
    },
    clear() {
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>