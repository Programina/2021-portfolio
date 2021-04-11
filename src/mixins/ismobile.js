
  export default {
    computed: {
    isMobile() {
        switch (this.$vuetify.breakpoint.name) {
          case "xs":
            return true;
          case "sm":
            return true;
          case "md":
            return false;
          case "lg":
            return false;
          case "xl":
            return false;
        }
      }
  }  
}