<template>
  <component :is="component"></component>
</template>

<script>

import currentRouteMx from '@/mixins/currentRouteMx.js'
export default {
  name: "DesktopHeaderTemplate",
  components: {},
  mixins: { 
    currentRouteMx
  },
  data() {
    return {
      components: [   
        {  
          componentName: 'DefaultHeaderDesktop',
          path: '/home'
        },
         { 
          componentName: 'About',
          path: '/about'
        }, 
        {
          componentName: 'Contact',
          path: '/contact'
        }, 
        { 
          componentName: 'HabitStacksHeader',
          path: '/habit-stacks'
        },
        { 
          componentName: 'DateSaverHeader',
          path: '/date-saver'
        },
      ]
    };
  },
  computed:{
    component(){
      let comp = this.components.filter(val => val.path === this.currentRoutePath)
      console.log("COmponent name ", comp.componentName)
      return comp.componentName
    }
  }
};
</script>

