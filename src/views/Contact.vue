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
                <v-form>
                  <!-- <ValidationObserver ref="observer" v-slot="{ invalid }">
                    <form @submit.prevent="submit">
                      <ValidationProvider
                        v-slot="{ errors }"
                        name="Name"
                        rules="required|max:10"
                      >
                        <v-text-field
                          v-model="name"
                          :counter="10"
                          :error-messages="errors"
                          label="Name"
                          required
                        ></v-text-field>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        name="phoneNumber"
                        :rules="{
                          required: true,
                          digits: 7,
                          regex:
                            '^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$',
                        }"
                      >
                        <v-text-field
                          v-model="phoneNumber"
                          :counter="7"
                          :error-messages="errors"
                          label="Phone Number"
                          required
                        ></v-text-field>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        name="email"
                        rules="required|email"
                      >
                        <v-text-field
                          v-model="email"
                          :error-messages="errors"
                          label="E-mail"
                          required
                        ></v-text-field>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        name="select"
                        rules="required"
                      >
                        <v-select
                          v-model="select"
                          :items="items"
                          :error-messages="errors"
                          label="Select"
                          data-vv-name="select"
                          required
                        ></v-select>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                        name="checkbox"
                      >
                        <v-checkbox
                          v-model="checkbox"
                          :error-messages="errors"
                          value="1"
                          label="Option"
                          type="checkbox"
                          required
                        ></v-checkbox>
                      </ValidationProvider>

                      <v-btn class="mr-4" type="submit" :disabled="invalid">
                        submit
                      </v-btn>
                      <v-btn @click="clear"> clear </v-btn>
                    </form>
                  </ValidationObserver> -->
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
// import { required, email, max } from "vee-validate";
// import {
//   extend,
//   ValidationObserver,
//   ValidationProvider,
//   setInteractionMode,
// } from "vee-validate";
// setInteractionMode("eager");
// extend("required", {
//   ...required,
//   message: "{_field_} can not be empty",
// });
// extend("max", {
//   ...max,
//   message: "{_field_} may not be greater than {length} characters",
// });
// extend("email", {
//   ...email,
//   message: "Email must be valid",
// });

export default {
  name: "FirstProject",
  components: {
    // ValidationProvider,
    // ValidationObserver,
  },
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
      // this.$refs.observer.validate();
      console.log("Submit")
    },
    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      // this.$refs.observer.reset();
    },
  },
};
</script>