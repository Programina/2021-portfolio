<template>
  <v-container class="contact">
    <v-row>
      <v-col class="mb-5" cols="12">
        <h1>This is an contact page</h1>
        <h2 class="headline font-weight-bold mb-3">Contact me</h2>
        <v-row justify="center">
          <div class="subheading mx-6" target="_blank" width="100%">
            <v-card>
              <v-card-title>Contact me</v-card-title> 
              <v-card-text>
                <v-form class="px-3">
                  <v-text-field
                      v-model="name"
                      :counter="10"
                      :error-messages="errors"
                      label="Name"
                      required
                    ></v-text-field>
               
                </v-form>
              </v-card-text>
            </v-card>
          </div>
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