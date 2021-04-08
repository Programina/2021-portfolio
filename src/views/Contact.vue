<template>
  <v-container class="contact">
    <v-row>
      <v-col class="mb-5" cols="12">
        <h1>I'd love to hear from you.</h1>
        <br/>
        <br/>
        <v-row justify="center">
          <v-col class="subheading mx-6" target="_blank" cols="10">
                <v-form class="px-3">
                  <v-text-field
                      v-model="name"
                      :counter="10"
                      :error-messages="errors"
                      label="Name"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="email"
                      :counter="10"
                      :error-messages="errors"
                      label="Email"
                      required
                    ></v-text-field>
                    <v-textarea
                      v-model="description"
                      :counter="10"
                      :error-messages="errors"
                      label="Your message"
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