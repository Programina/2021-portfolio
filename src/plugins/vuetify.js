import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#3BCEA0',
            secondary: '#80D0C7',
            tertiary: '#80D0C7',
            text: '#362328',
            accent: '#8c9eff',
            error: '#b71c1c',
            background: '#fff',
            secondaryBackground: '#EEFBFF',
            lightgrey: '#000029',
            darkgrey: '#797979'
           
          },
          dark: {
            primary: '#3BCEA0',
            secondary: '#797979',
            text: '#80D0C7',
            accent: '#8c9eff',
            error: '#b71c1c',
            background: '#362328',
            secondaryBackground: '#EEFBFF',
            lightgrey: '#000029',
            darkgrey: '#797979'
          }
        },
      },
});
