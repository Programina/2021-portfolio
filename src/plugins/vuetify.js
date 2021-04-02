import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#0093E9',
            secondary: '#80D0C7',
            tertiary: '#80D0C7',
            text: '#362328',
            accent: '#8c9eff',
            error: '#b71c1c',
            background: '#fff',
            secondaryBackground: '#EEFBFF',
            primaryDark: '#0093E9',
            secondaryDark: '#797979',
            textDark: '#80D0C7',
            accentDark: '#8c9eff',
            errorDark: '#b71c1c',
            backgroundDark: '#362328',
            secondaryBackgroundDark: '#EEFBFF',
          },
        },
      },
});
