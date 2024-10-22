import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import 'normalize.css';

import App from './App.vue'
import router from './router'

const i18n = createI18n({
    locale: 'am',
    fallbackLocale: 'ru',
    messages: {
      am: {
        title:'Ախմախ Անիի',
        title2:'Ծնունդ 🤩',
        memories:'նկարներ մեր քիփ օրերից',
        usedwords:'Անիի խոսքերը որը հավերժ կհիշենք😂',
        Vzgoani:'Վզգ դու գիտես որ քեզ ավելի շատեմ սիրում քան Արմենին',
        KarulAni:'Կառուլլ ջաան քո բգի համար եկանք հասանք ըստեղ',
        ArmenAni:'Արմեն որ ուզում ես իմանաս էս ձին ավելի լավմա քան դու'


      },
      ru: {
         title:'Ani Jenner`s',
         title2:' birthday🤩',
        memories:'Memories of us',
        usedwords:'Ani`s words that we will be remember forever😂',
        Vzgoani:'Վզգ դու գիտես որ քեզ ավելի շատեմ սիրում քան Արմենին',
        KarulAni:'Կառուլլ ջաան քո բգի համար եկանք հասանք ըստեղ'
      }
    }
  })

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
