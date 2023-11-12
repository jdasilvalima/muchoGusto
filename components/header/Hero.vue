<template>
  <div class="header-hero green-theme">
    <div class="header-hero-text">
      <p class="tex-left">Rooftop</p>
      <p class="tex-center">Paris Market</p>
      <p class="tex-right">Paris</p>
    </div>
   <h1 :style="{'font-size': fontSize + 'vw'}">muchoGusto</h1>
 </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const initialFontSize = 14.5;
let fontSize = ref<number>(initialFontSize);

onMounted(() => {
  window.addEventListener('scroll', modifyTextSize);
});

onUnmounted(() => {
  window.removeEventListener('scroll', modifyTextSize);
});

function modifyTextSize() {
  const currentPagePosition = window.scrollY;
  fontSize.value = initialFontSize - (currentPagePosition * 0.01)
}
</script>

<style scoped>
.header-hero {
  font-family: 'CakoRegular', sans-serif;
  height: 100vh;
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
  bottom: 1.25rem;
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
    transform: translateY(-150%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>