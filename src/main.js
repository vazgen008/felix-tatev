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
        title:'Հարսանյաց հրավիրատոմս',
        countdown:'Հարսանիքին մնաց',
        countdownTimes:{
          days:'օր',
          hours:'ժամ',
          minutes:'րոպե',
          seconds:'վայրկյան'
        },
        invitationText:'Սիրով հրավիրում ենք Ձեզ՝ կիսելու մեզ հետ մեր կյանքի կարևոր և հիշարժան օրը',
        weddingParty:{
          title:'Հարսանյաց հանդիսություն',
          time:'17:00',
          place:`Ֆելիչէ Ռեստորան`,
          city:'ք.Երևան, 110 Բագրևանդի փողոց',
          buttonText:'Ինչպես հասնել'

        },
        message:'Սիրով սպասում ենք Ձեզ',
        ceremony:{
          title:'Պսակադրության արարողություն',
          time:'14:45',
          church:'Գեղարդի վանք',
          city:'Կոտայքի մարզ'
        },
        bride:{
          title:'Հարսի տուն այց',
          time:'11:30'
        },
        groom:{
          title:'Փեսայի տուն այց',
          time:'10:30'
        }
        

      },
      ru: {
        title: 'Свадебное приглашение',
        countdown:'до свадьбы осталось',
        countdownTimes:{
          days:'дня',
          hours:'часов',
          minutes:'минут',
          seconds:'секунды'
        },
        invitationText:'Мы счастливы пригласить Вас на нашу свадьбу! Это особенный и радостный для нас день, и мы хотели бы, чтобы Вы стали частью этого праздника.',
        weddingParty:{
          title:'Свадебный Банкет',
          time:'17:00',
          place:'ФЕЛИЧЕ РЕСТОРАН ',
          city:'г. Ереван , ул. Багреванди 110',
          buttonText:'Как добраться'

        },
        message:'С нетерпением ждем Вас',
        bride:{
          title:'посещение дома невесты',
          time:'11:30'
        },
        groom:{
          title:'Посещение дома жениха',
          time:'10:30'
        },
        ceremony:{
          title:'Венчание',
          time:'14:45',
          church:'Монастырь Гегард',
          city:'Котайкская область'
        },
      }
    }
  })

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
