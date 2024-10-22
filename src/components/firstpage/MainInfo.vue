<template>
<div id="birthday" class="birthday">
    <h1>{{$t('memories')}}</h1>
    <div class="pics-of-qips">
      <img src="./img/qip1.jpg" alt="">
      <img src="./img/qip2.jpg" alt="">
      <img src="./img/qip3.jpg" alt="">
      <img src="./img/qip4.jpg" alt="">
      <img src="./img/qper10.jpg" alt="">
      <img src="./img/4ofus.jpg" alt="">
    </div>
    <div class="aniixosqere">
      <div>
      <h1>{{$t('usedwords')}}</h1>

      </div>
      <div class="words-with-imgs">
        <div>
          <img src="./img/vazgen-ani.jpg" alt="" @click="playAudio" >
          <h2>{{$t('Vzgoani')}}</h2>
          <audio ref="audio">
            <source src="./img/anivzgo.mp3" type="audio/mp3" />
          </audio>
        </div>
        <div>
          <img src="./img/armen-ani.jpg" alt="" @click="playAudio2">
          <h2>{{$t('ArmenAni')}}</h2>
          <audio ref="audio2">
            <source src="./img/armenani.mp3" type="audio/mp3" />
          </audio>
        </div>
        <div>
          <img src="./img/karulani.jpg" alt="" @click="playAudio3">
          <h2>{{$t('KarulAni')}}</h2>
          <audio ref="audio3">
            <source src="./img/karulani.mp3" type="audio/mp3" />
          </audio>
        </div>
      </div>
    </div>

    <div>
      <h1>Անննսսսս էս նվերովել ուզումենք շնորհավորենք քեզ քեզ ամենալավ բաներւ Անննսսսս</h1>
      <img src="./img/gift.jpg" alt="" class="gift">
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
const audio = ref(null)
const audio2 = ref(null)
const audio3 = ref(null)

// Function to play audio when the image is clicked
const playAudio = () => {
  audio2.value.pause()
  audio3.value.pause()

  audio.value.play()
}
const playAudio2 = () => {
  audio.value.pause()
  audio3.value.pause()
  audio2.value.play()
}
const playAudio3 = () => {
  audio2.value.pause()
  audio.value.pause()
  
  audio3.value.play()
}
</script>

<style scoped lang="scss">
@font-face {
  font-family: 'myfont';
  src: url('../fonts/myfont.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
.birthday{
    color: black;
     & h1{
    background: white;
    padding: 20px 0;   
    margin-bottom: 80px; 
  }
}
.pics-of-qips{
  display: flex;
  align-items: center;
  flex-direction: column;
    row-gap: 20px;
    margin-bottom: 100px;
    
}
.pics-of-qips img{
  width: 300px;
}
.aniixosqere{
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
 
}
img{
  width: 300px;
}
.words-with-imgs{
  & div{
    display: flex;
    flex-direction: column;
    align-items: center;
    &>h2{
      background: white;
      padding: 20px 0;
    }
  }
}
.gift{
  width: 100%;
}
</style>