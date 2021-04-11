<template>
  <component :is="component"></component>
</template>

<script>

import DefaultHeaderDesktop from '@/components/headers/DefaultHeaderDesktop'
import ContactHeader from '@/components/headers/ContactHeader'
import HabitStacksHeader from '@/components/headers/HabitStacksHeader'
import DateSaverHeader from '@/components/headers/DateSaverHeader'
import { mapState } from 'vuex'

export default {
  name: "DesktopHeaderTemplate",
  components: {DefaultHeaderDesktop, ContactHeader, DateSaverHeader, HabitStacksHeader},
  data() {
    return {
      components: [   
        {  
          componentName: 'DefaultHeaderDesktop',
          path: '/home'
        },
        {  
          componentName: 'DefaultHeaderDesktop',
          path: '/'
        },
         { 
          componentName: 'AboutHeader',
          path: '/about'
        }, 
        {
          componentName: 'ContactHeader',
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
    ...mapState(['currentRoute']) ,
    component(){
      let comp;
      if(this.currentRoute.path) {
        comp = this.components.find(val => val.path === this.currentRoute.path)
      } else {
        comp = {
          componentName: 'DefaultHeaderDesktop', 
          path: '/'
          }
      }
      
      console.log("Component name ", comp.componentName)
      return comp.componentName
    }
  }
};
</script>

