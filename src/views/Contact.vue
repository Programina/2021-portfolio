<template>
  <v-container class="contact">
    <v-row>
      <v-col class="mb-5" cols="12">
        <h1 class="px-12">I'd love to hear from you.</h1>
        <br/>
        <br/>
        <v-row justify="center">
          <v-col class="subheading mx-6" target="_blank" cols="10">
                <v-form class="px-3">
                  <v-text-field
                      v-model="name"
                      :counter="40"
                      :error-messages="errors"
                      label="Name"
                      :rules="inputRules"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="email"
                      :counter="40"
                      :error-messages="errors"
                      label="Email"
                      :rules="inputRules"
                      required
                    ></v-text-field>
                    <v-textarea
                      v-model="description"
                      :counter="450"
                      :error-messages="errors"
                      label="Your message"
                      :rules="inputRules"
                      required
                    ></v-textarea>
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
    phoneNumber: "",
    email: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: null,
    inputRules: [
      v => v.length >= 3 || 'Minimum length is 3 characters'
    ]
  }),

  methods: {
    submit() {
      console.log("Submit")
    },
    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
    },
  },
};
</script>