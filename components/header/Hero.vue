<template>
  <div class="header-hero green-theme">

    <!-- TODO handle smooth scroll -->
    
    <div class="header-hero-text">
      <p class="tex-left">Rooftop</p>
      <p class="tex-center">Paris Market</p>
      <p class="tex-right">Paris</p>
    </div>

    <div class="header-hero-mouth" :style="{ transform: `translate3d(0, ${mouthTranslateY}px, 0)` }">
      <div class="header-hero-mouth-svg mouth-pink" :style="{ clipPath: `polygon(0% 0%, 100% 0%, 100% ${clipPathY}vh, 0% ${clipPathY}vh)` }">
        <svg viewBox="0 0 157.7 108.2">
          <path fill="#E7BEAF" class="mouth-spot" d="M124.4,0.1c5.6-0.2,7.3,1.5,7,6.9c-0.3,4.7-2.7,7.5-7.3,8.3c-3.9,0.7-8.6-1.6-10.2-5.1c-1.1-2.3,0.1-6,2.4-7.3
              C118.8,1.5,121.2-0.5,124.4,0.1"></path>
          <path fill="#E7BEAF" class="mouth-part-top" d="M4.5,68.2c0,0,39.8-42.7,57.6-32.4c17.8,10.3,21.4,16.3,21.4,16.3s13.8-20.3,32-14
              c18.2,6.3,37.6,36.4,37.6,36.4c-6.8-5.1-37.5-13.5-70.9-13.9c-33.3-0.4-70.1,15.5-70.1,15.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path fill="#E7BEAF" class="mouth-part-bottom" d="M153.2,74.6c0,0-27.8,35.7-68.5,28.1c-25.4-4.8-72.5-26.5-72.5-26.5s87.2,11.1,131.5,0" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>

      <div class="header-hero-mouth-svg mouth-green">
        <svg viewBox="0 0 157.7 108.2">
          <path fill="#3A4638" d="M124.4,0.1c5.6-0.2,7.3,1.5,7,6.9c-0.3,4.7-2.7,7.5-7.3,8.3c-3.9,0.7-8.6-1.6-10.2-5.1c-1.1-2.3,0.1-6,2.4-7.3
            C118.8,1.5,121.2-0.5,124.4,0.1"></path>
          <path fill="#3A4638" d="M4.5,68.2c0,0,39.8-42.7,57.6-32.4c17.8,10.3,21.4,16.3,21.4,16.3s13.8-20.3,32-14
            c18.2,6.3,37.6,36.4,37.6,36.4c-6.8-5.1-37.5-13.5-70.9-13.9c-33.3-0.4-70.1,15.5-70.1,15.5" ></path>
          <path fill="#3A4638" d="M153.2,74.6c0,0-27.8,35.7-68.5,28.1c-25.4-4.8-72.5-26.5-72.5-26.5s87.2,11.1,131.5,0" ></path>
        </svg>
      </div>
    </div>

    <h1 :style="{'font-size': fontSize + 'vw'}">muchoGusto</h1>

 </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const initialFontSize = 14.5;
let fontSize = ref<number>(initialFontSize);
const mouthTranslateY = ref(0);
const clipPathY = ref(100);

/*
onMounted(() => {
  window.addEventListener('scroll', modifyTextSize);
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', modifyTextSize);
  window.removeEventListener('scroll', handleScroll);
});
*/

function modifyTextSize() {
  const currentPagePosition = window.scrollY;
  fontSize.value = initialFontSize - (currentPagePosition * 0.01);
}

function handleScroll() {
  if(window.scrollY < 1390)
    mouthTranslateY.value = window.scrollY;

  if(window.scrollY < 571.4)
    clipPathY.value = 100 - window.scrollY * 0.175;
}
</script>

<style scoped>
.header-hero {
  font-family: 'CakoRegular', sans-serif;
  height: 707px;
  position: relative;
}

.header-hero-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  font-size: 6vw;
  text-transform: uppercase;
}

h1 {
  position: absolute;
  bottom: 0rem;
  left: 50%;
  transform-origin: center bottom;
	animation: slide-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0s forwards;
}

.tex-center {
  animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both;
}

.tex-left {
  animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s both;
}

.tex-right {
  animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2s both;
}

.header-hero-mouth {
  position: sticky;
  top: 0;
  height: 707px;
  z-index: 2;
}

.header-hero-mouth-svg {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-hero-mouth-svg svg {
  margin-top: -35vh;
  padding: 0;
  width: 40vw;
  height: 40vh;
}

.mouth-spot {
  animation: animate-mouth-spot 2s cubic-bezier(0.47, 0, 0.745, 0.715) 0s both;
}

.mouth-part-top {
  animation: animate-mouth-part-top 2s cubic-bezier(0.47, 0, 0.745, 0.715) 0.5s both;
}

.mouth-part-bottom {
  animation: animate-mouth-part-bottom 2s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both;
}

.mouth-pink {
  z-index: 3;
}

.mouth-green {
  z-index: 2;
}

@media (min-width:650px) {
  .header-hero-text {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    font-size: 2rem;
  }
}

/**
 * ----------------------------------------
 * animation slide-top
 * ----------------------------------------
 */
@keyframes slide-top {
  0% {
    transform: translate(-50%, 120%);
  }
  100% {
    transform: translate(-50%, 0%);
  }
}

/**
 * ----------------------------------------
 * animation slide-bottom
 * ----------------------------------------
 */
@keyframes slide-bottom {
  0% {
    transform: translateY(-350%);
  }
  100% {
    transform: translateY(0);
  }
}

/**
 * ----------------------------------------
 * animation mouth
 * ----------------------------------------
 */
@keyframes animate-mouth-spot {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(231, 190, 175);
  }
}

@keyframes animate-mouth-part-top {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(231, 190, 175);
  }
}

@keyframes animate-mouth-part-bottom {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(231, 190, 175);
  }
}
</style>